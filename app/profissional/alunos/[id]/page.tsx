import { redirect } from 'next/navigation';
import { getSession } from '@/lib/authServer';
import { db } from '@/lib/firebase/admin';
import WorkoutEditor from '@/components/WorkoutEditor';

interface Params { id: string }

export default async function FichaAluno({ params }: { params: Params }) {
  const session = await getSession();
  if (!session) redirect('/login');
  const role = session.role || 'aluno';
  if (!['admin','personal','medico'].includes(role)) redirect('/area');

  const alunoUid = params.id;

  // autorização: admin ou profissional vinculado ao aluno
  let allowed = role === 'admin';
  if (!allowed) {
    const asg = await db.collection('assignments').doc(alunoUid).get();
    const data = asg.data();
    allowed = !!data && (data.personalId === session.uid || data.medicoId === session.uid);
  }
  if (!allowed) redirect('/profissional/alunos');

  const alunoDoc = await db.collection('students').doc(alunoUid).get();
  const aluno = alunoDoc.exists ? alunoDoc.data() : null;

  const workoutsSnap = await db.collection('students').doc(alunoUid).collection('workouts').orderBy('data','desc').limit(10).get();
  const workouts = workoutsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

  return (
    <main className="container" style={{paddingTop:'2rem'}}>
      <h1 style={{fontSize:'1.5rem'}}>Ficha do Aluno</h1>
      
      {/* Ficha Resumida em Cards */}
      {aluno ? (
        <div className="grid grid-2" style={{gap:'1rem', marginBottom:'2rem'}}>
          {/* Informações Pessoais */}
          <div className="card">
            <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>👤 Informações Pessoais</h3>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>Nome:</span>
                <span style={{fontWeight:'500'}}>{aluno.name || 'Não informado'}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>Idade:</span>
                <span style={{fontWeight:'500'}}>{aluno.age ? `${aluno.age} anos` : 'Não informado'}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>Email:</span>
                <span style={{fontWeight:'500', fontSize:'0.85rem'}}>{aluno.email || 'Não informado'}</span>
              </div>
            </div>
          </div>

          {/* Medidas Corporais */}
          <div className="card">
            <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>📏 Medidas Corporais</h3>
            <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>Peso:</span>
                <span style={{fontWeight:'500'}}>{aluno.weight ? `${aluno.weight} kg` : 'Não informado'}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>Altura:</span>
                <span style={{fontWeight:'500'}}>{aluno.height ? `${aluno.height} cm` : 'Não informado'}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <span className="small" style={{color:'#666'}}>IMC:</span>
                <span style={{fontWeight:'500'}}>
                  {aluno.weight && aluno.height 
                    ? `${(aluno.weight / Math.pow(aluno.height / 100, 2)).toFixed(1)}` 
                    : 'Não calculado'
                  }
                </span>
              </div>
            </div>
          </div>

          {/* Objetivo */}
          <div className="card" style={{gridColumn:'1 / -1'}}>
            <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>🎯 Objetivo</h3>
            <p style={{margin:0, padding:'0.75rem', backgroundColor:'#f8f9fa', borderRadius:'8px', border:'1px solid #e9ecef'}}>
              {aluno.goal || 'Nenhum objetivo definido ainda'}
            </p>
          </div>

          {/* Histórico de Peso */}
          {aluno.metrics?.weight && aluno.metrics.weight.length > 0 && (
            <div className="card" style={{gridColumn:'1 / -1'}}>
              <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>⚖️ Evolução do Peso</h3>
              <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                {aluno.metrics.weight.slice(-5).map((metric: any, index: number) => (
                  <div key={index} style={{
                    padding:'0.5rem 1rem', 
                    backgroundColor:'#e3f2fd', 
                    borderRadius:'20px', 
                    border:'1px solid #bbdefb',
                    fontSize:'0.85rem'
                  }}>
                    <span style={{fontWeight:'500'}}>{metric.value} kg</span>
                    <span className="small" style={{marginLeft:'0.5rem', color:'#666'}}>
                      {new Date(metric.date.seconds * 1000).toLocaleDateString('pt-PT')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Treinos */}
          {aluno.workouts && aluno.workouts.length > 0 && (
            <div className="card" style={{gridColumn:'1 / -1'}}>
              <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>💪 Treinos Atuais</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
                {aluno.workouts.map((workout: any, index: number) => (
                  <div key={index} style={{
                    padding:'1rem', 
                    backgroundColor:'#f1f8e9', 
                    borderRadius:'8px', 
                    border:'1px solid #c8e6c9'
                  }}>
                    <div style={{fontWeight:'500', marginBottom:'0.5rem'}}>{workout.name}</div>
                    <div className="small" style={{color:'#666', marginBottom:'0.5rem'}}>
                      {workout.exercises?.length || 0} exercícios
                    </div>
                    {workout.exercises?.map((exercise: any, exIndex: number) => (
                      <div key={exIndex} className="small" style={{color:'#555', marginBottom:'0.25rem'}}>
                        • {exercise.name} - {exercise.sets}x{exercise.reps} ({exercise.weight})
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="card" style={{textAlign:'center', padding:'2rem', marginBottom:'2rem'}}>
          <div style={{fontSize:'3rem', marginBottom:'1rem'}}>📋</div>
          <h3 style={{color:'#666', marginBottom:'0.5rem'}}>Sem ficha encontrada</h3>
          <p className="small" style={{color:'#999'}}>Este aluno ainda não possui dados cadastrados</p>
        </div>
      )}

      {/* Editor de Treino */}
      <div className="card">
        <h3 style={{fontSize:'1.1rem', marginBottom:'1rem', color:'#333'}}>✏️ Editor de Treino</h3>
        <WorkoutEditor alunoUid={alunoUid} existing={workouts} />
      </div>
    </main>
  );
}
