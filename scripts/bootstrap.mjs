#!/usr/bin/env node

import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Configuração do diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Carregar variáveis de ambiente do .env.local
const envPath = join(projectRoot, '.env.local');
const envContent = readFileSync(envPath, 'utf8');
const envVars = {};

envContent.split('\n').forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length > 0) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

// Configurar Firebase Admin
const serviceAccountKey = JSON.parse(envVars.FIREBASE_SERVICE_ACCOUNT_KEY);
const app = initializeApp({
  credential: cert(serviceAccountKey)
});

const auth = getAuth(app);
const db = getFirestore(app);

// Configurações padrão dos usuários seed
const SEED_USERS = {
  aluno: {
    email: process.env.SEED_ALUNO_EMAIL || 'aluno@exemplo.pt',
    password: process.env.SEED_ALUNO_PASS || 'SenhaSegura!123',
    role: 'aluno',
    displayName: 'João Silva (Aluno)'
  },
  personal: {
    email: process.env.SEED_PERSONAL_EMAIL || 'personal@exemplo.pt',
    password: process.env.SEED_PERSONAL_PASS || 'SenhaSegura!123',
    role: 'personal',
    displayName: 'Maria Santos (Personal)'
  },
  medico: {
    email: process.env.SEED_MEDICO_EMAIL || 'medico@exemplo.pt',
    password: process.env.SEED_MEDICO_PASS || 'SenhaSegura!123',
    role: 'medico',
    displayName: 'Dr. Carlos Oliveira (Médico)'
  }
};

async function createUserWithRole(userConfig) {
  try {
    console.log(`🔄 Criando usuário: ${userConfig.email}`);
    
    // Criar usuário no Firebase Auth
    const userRecord = await auth.createUser({
      email: userConfig.email,
      password: userConfig.password,
      displayName: userConfig.displayName,
      emailVerified: true
    });

    // Definir custom claims (role)
    await auth.setCustomUserClaims(userRecord.uid, {
      role: userConfig.role
    });

    // Criar documento do usuário no Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email: userConfig.email,
      displayName: userConfig.displayName,
      role: userConfig.role,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log(`✅ Usuário criado: ${userConfig.email} (${userConfig.role})`);
    return userRecord;
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      console.log(`⚠️  Usuário já existe: ${userConfig.email}`);
      // Buscar usuário existente
      const existingUser = await auth.getUserByEmail(userConfig.email);
      // Atualizar claims se necessário
      await auth.setCustomUserClaims(existingUser.uid, {
        role: userConfig.role
      });
      return existingUser;
    } else {
      console.error(`❌ Erro ao criar usuário ${userConfig.email}:`, error.message);
      throw error;
    }
  }
}

async function createSampleData(users) {
  console.log('🔄 Criando dados de exemplo...');
  
  const alunoUser = users.find(u => u.email === SEED_USERS.aluno.email);
  const personalUser = users.find(u => u.email === SEED_USERS.personal.email);
  const medicoUser = users.find(u => u.email === SEED_USERS.medico.email);

  if (alunoUser) {
    // Criar dados do aluno
    await db.collection('students').doc(alunoUser.uid).set({
      uid: alunoUser.uid,
      name: 'João Silva',
      email: alunoUser.email,
      age: 25,
      weight: 75,
      height: 180,
      goal: 'Ganho de massa muscular',
      createdAt: new Date(),
      updatedAt: new Date(),
      metrics: {
        weight: [
          { date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), value: 73 },
          { date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), value: 74 },
          { date: new Date(), value: 75 }
        ]
      },
      workouts: [
        {
          id: 'workout1',
          name: 'Treino A - Peito e Tríceps',
          exercises: [
            { name: 'Supino Reto', sets: 4, reps: '8-12', weight: '80kg' },
            { name: 'Supino Inclinado', sets: 3, reps: '10-12', weight: '70kg' },
            { name: 'Tríceps Pulley', sets: 3, reps: '12-15', weight: '40kg' }
          ],
          createdAt: new Date(),
          createdBy: personalUser?.uid || 'system'
        }
      ]
    });

    // Criar atribuição do personal ao aluno
    if (personalUser) {
      await db.collection('assignments').add({
        profissionalUid: personalUser.uid,
        alunoUid: alunoUser.uid,
        type: 'personal',
        createdAt: new Date(),
        active: true
      });
    }

    // Criar atribuição do médico ao aluno
    if (medicoUser) {
      await db.collection('assignments').add({
        profissionalUid: medicoUser.uid,
        alunoUid: alunoUser.uid,
        type: 'medico',
        createdAt: new Date(),
        active: true
      });
    }
  }

  console.log('✅ Dados de exemplo criados!');
}

async function bootstrap() {
  try {
    console.log('🚀 Iniciando bootstrap do ProntuFit...');
    console.log('📧 Emails configurados:');
    Object.entries(SEED_USERS).forEach(([role, config]) => {
      console.log(`   ${role}: ${config.email}`);
    });
    console.log('');

    // Criar usuários
    const createdUsers = [];
    for (const [role, config] of Object.entries(SEED_USERS)) {
      const user = await createUserWithRole(config);
      createdUsers.push({ ...user, email: config.email });
    }

    console.log('');
    
    // Criar dados de exemplo
    await createSampleData(createdUsers);

    console.log('');
    console.log('🎉 Bootstrap concluído com sucesso!');
    console.log('');
    console.log('👤 Usuários criados:');
    Object.entries(SEED_USERS).forEach(([role, config]) => {
      console.log(`   ${role.toUpperCase()}: ${config.email} / ${config.password}`);
    });
    console.log('');
    console.log('🔗 Acesse: http://localhost:3001/login');
    
  } catch (error) {
    console.error('❌ Erro durante o bootstrap:', error);
    process.exit(1);
  }
}

// Executar bootstrap
bootstrap();