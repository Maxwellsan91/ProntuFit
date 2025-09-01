import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getSession } from '@/lib/authServer';
import { db } from '@/lib/firebase/admin';

type AlunoRow = { uid: string; nome?: string|null };

export default async function ListaAlunos() {
  const session = await getSession();
  if (!session) redirect('/login');
  const role = session.role || 'aluno';
  if (!['admin','personal','medico'].includes(role)) redirect('/area');

  const uid = session.uid;

  // Buscar assignments do profissional
  const assPersonal = await db.collection('assignments').where('personalId','==', uid).get();
  const assMedico = await db.collection('assignments').where('medicoId','==', uid).get();

  const alunoUids = new Set<string>();
  assPersonal.docs.forEach(d => alunoUids.add(d.id));
  assMedico.docs.forEach(d => alunoUids.add(d.id));

  const alunos: AlunoRow[] = [];
  for (const alunoUid of alunoUids) {
    const userDoc = await db.collection('users').doc(alunoUid).get();
    const nome = userDoc.exists ? (userDoc.data()?.nome ?? null) : null;
    alunos.push({ uid: alunoUid, nome });
  }

  return (
    <main className="container" style={{paddingTop:'1rem'}}>
      <h1 style={{fontSize:'1.5rem'}}>Alunos</h1>
      <div className="card">
        {alunos.length === 0 && <p className="small">Nenhum aluno atribuído.</p>}
        {alunos.map(a => (
          <div key={a.uid} style={{display:'flex',justifyContent:'space-between',padding:'.5rem 0',borderBottom:'1px solid #eee'}}>
            <div>
              <div><strong>{a.nome || 'Sem nome'}</strong></div>
              <div className="small">{a.uid}</div>
            </div>
            <Link className="btn" href={`/profissional/alunos/${a.uid}`}>Abrir</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
