import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/authServer';
import { db } from '@/lib/firebase/admin';
import dynamic from 'next/dynamic';

const MetricsChart = dynamic(() => import('@/components/MetricsChart'), { ssr: false });

export default async function AreaAluno() {
  const session = await getSession();
  if (!session) redirect('/login');
  const uid = session.uid;

  // Assumimos que o doc do aluno tem id = uid
  const doc = await db.collection('students').doc(uid).get();
  const data = doc.exists ? doc.data() : null;

  const lastMetricsSnap = await db.collection('students').doc(uid).collection('metrics')
    .orderBy('data', 'desc').limit(10).get();
  const metrics = lastMetricsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

  return (
    <main className="container" style={{paddingTop:'2rem'}}>
      <h1 style={{fontSize:'1.5rem'}}>Olá!</h1>
      <div className="grid grid-2" style={{marginTop:'1rem'}}>
        <div className="card">
          <h3>Próximo treino</h3>
          <p className="small">Exemplo: Segunda-feira, 18:00</p>
          <Link className="btn" href="/area/treinos">Ver treinos</Link>
        </div>
        <div className="card">
          <h3>Últimos registos</h3>
          <div className="small">Mostrando os 10 últimos</div>
          <div style={{height:260}}>
            <MetricsChart data={metrics} />
          </div>
        </div>
      </div>
      <div style={{marginTop:'2rem'}}>
        <h2 style={{fontSize:'1.25rem', marginBottom:'1rem'}}>Ficha Resumida</h2>
        {data ? (
          <div className="grid grid-2" style={{gap:'1rem'}}>
            {/* Informações Pessoais */}
            <div className="card">
              <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>👤 Informações Pessoais</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>Nome:</span>
                  <span style={{fontWeight:'500'}}>{data.name || 'Não informado'}</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>Idade:</span>
                  <span style={{fontWeight:'500'}}>{data.age ? `${data.age} anos` : 'Não informado'}</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>Email:</span>
                  <span style={{fontWeight:'500', fontSize:'0.85rem'}}>{data.email || 'Não informado'}</span>
                </div>
              </div>
            </div>

            {/* Medidas Corporais */}
            <div className="card">
              <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>📏 Medidas Corporais</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>Peso:</span>
                  <span style={{fontWeight:'500'}}>{data.weight ? `${data.weight} kg` : 'Não informado'}</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>Altura:</span>
                  <span style={{fontWeight:'500'}}>{data.height ? `${data.height} cm` : 'Não informado'}</span>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span className="small" style={{color:'#666'}}>IMC:</span>
                  <span style={{fontWeight:'500'}}>
                    {data.weight && data.height 
                      ? `${(data.weight / Math.pow(data.height / 100, 2)).toFixed(1)}` 
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
                {data.goal || 'Nenhum objetivo definido ainda'}
              </p>
            </div>

            {/* Histórico de Peso */}
            {data.metrics?.weight && data.metrics.weight.length > 0 && (
              <div className="card" style={{gridColumn:'1 / -1'}}>
                <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>⚖️ Evolução do Peso</h3>
                <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                  {data.metrics.weight.slice(-3).map((metric: any, index: number) => (
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
            {data.workouts && data.workouts.length > 0 && (
              <div className="card" style={{gridColumn:'1 / -1'}}>
                <h3 style={{fontSize:'1rem', marginBottom:'0.75rem', color:'#333'}}>💪 Treinos Recentes</h3>
                <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
                  {data.workouts.slice(0, 2).map((workout: any, index: number) => (
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
                      {workout.exercises?.slice(0, 2).map((exercise: any, exIndex: number) => (
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
          <div className="card" style={{textAlign:'center', padding:'2rem'}}>
            <div style={{fontSize:'3rem', marginBottom:'1rem'}}>📋</div>
            <h3 style={{color:'#666', marginBottom:'0.5rem'}}>Sem dados ainda</h3>
            <p className="small" style={{color:'#999'}}>Sua ficha será preenchida pelo seu personal trainer ou médico</p>
          </div>
        )}
      </div>
    </main>
  );
}
