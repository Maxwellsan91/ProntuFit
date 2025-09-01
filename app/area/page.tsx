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
    <main className="container" style={{paddingTop:'1rem'}}>
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
      <div className="card">
        <h3>Ficha resumida</h3>
        <pre className="small" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(data ?? {info:'Sem dados ainda'}, null, 2)}</pre>
      </div>
    </main>
  );
}
