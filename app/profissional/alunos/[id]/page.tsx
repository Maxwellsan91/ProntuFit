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
    <main className="container" style={{paddingTop:'1rem'}}>
      <h1 style={{fontSize:'1.5rem'}}>Ficha do Aluno</h1>
      <div className="card">
        <pre className="small" style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(aluno ?? {info:'Sem ficha'}, null, 2)}</pre>
      </div>
      <div className="card">
        <h3>Editor de Treino (exemplo)</h3>
        <WorkoutEditor alunoUid={alunoUid} existing={workouts} />
      </div>
    </main>
  );
}
