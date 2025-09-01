# Next.js + Firebase (Auth + Firestore + Storage) — MVP Fitness/ Saúde

## 1) Pré-requisitos
- Node 18+
- Projeto Firebase com **Firestore** e **Storage** em região europeia
- Criar **Service Account Key** (JSON) e colocar em `FIREBASE_SERVICE_ACCOUNT_KEY` (env)

## 2) Configuração
1. Copia `.env.example` para `.env.local` e preenche:
   - `NEXT_PUBLIC_FB_*` (do Firebase Console)
   - `FIREBASE_SERVICE_ACCOUNT_KEY` (conteúdo JSON inteiro, em uma linha)
   - `FIREBASE_STORAGE_BUCKET` (ex: `meu-projeto.appspot.com`)

2. Instalar deps:
```bash
npm install
```

3. Rodar:
```bash
npm run dev
```

## 3) Estrutura
- `app/` (Next App Router)
  - `login` (login com Firebase no cliente)
  - `area` (dashboard do aluno)
  - `profissional/alunos` (lista do profissional)
  - `profissional/alunos/[id]` (ficha + editor simples)
  - `api/session` (troca ID token -> cookie; logout com DELETE)
  - `api/students/[id]` (GET/PUT com autorização)
- `lib/firebase/*` (SDK client e Admin)
- `lib/authServer.ts` (leitura da sessão server-side)
- `components/*` (gráficos e editor básico)
- `firestore.rules` e `storage.rules` (base de segurança)

## 4) Fluxo de Autenticação
- Cliente faz login com `signInWithEmailAndPassword` → pega `idToken` → POST `/api/session` → servidor cria **session cookie httpOnly** → middleware protege rotas `/area` e `/profissional/*`.

## 5) Dados e Associações
- `users/{uid}` → perfil/role
- `assignments/{alunoUid}` → `{ personalId, medicoId }`
- `students/{alunoUid}` → subcoleções: `workouts`, `metrics`, `evaluations`, etc.

> Para testes, cria manualmente:
- um usuário Aluno (Auth), e crie `students/{uid}`
- um usuário Profissional (Auth) e defina `custom claims` com `role: "personal"` (via Admin SDK ou Console/CLI)
- crie `assignments/{alunoUid}` com `personalId` e/ou `medicoId`

## 6) Prod/Segurança
- Use HTTPS e defina domínios válidos no Firebase Auth.
- Ajuste `firestore.rules` / `storage.rules` conforme seu modelo.
- Faça backups regulares (Export Firestore/Storage).

Bom arranque! 🚀
