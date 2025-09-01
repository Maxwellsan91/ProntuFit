import { NextRequest, NextResponse } from 'next/server';
import { adminAuth, db } from '@/lib/firebase/admin';

async function getSession(req: NextRequest) {
  const name = process.env.SESSION_COOKIE_NAME || '__session';
  const cookie = req.cookies.get(name)?.value;
  if (!cookie) return null;
  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    return { uid: decoded.uid, role: (decoded as any).role ?? null };
  } catch {
    return null;
  }
}

async function isAllowed(session: any, alunoUid: string) {
  if (!session) return false;
  if (session.role === 'admin') return true;
  if (session.uid === alunoUid) return true; // leitura própria
  const asg = await db.collection('assignments').doc(alunoUid).get();
  const ad = asg.data();
  return !!ad && (ad.personalId === session.uid || ad.medicoId === session.uid);
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession(req);
  const alunoUid = params.id;
  if (!(await isAllowed(session, alunoUid))) return NextResponse.json({ error: 'forbidden' }, { status: 403 });

  const doc = await db.collection('students').doc(alunoUid).get();
  if (!doc.exists) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json({ id: doc.id, ...doc.data() });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const session = await getSession(req);
  const alunoUid = params.id;
  if (!session) return NextResponse.json({ error: 'unauthenticated' }, { status: 401 });
  // Apenas profissional/admin podem escrever
  if (!['admin','personal','medico'].includes(session.role || '')) return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  const asg = await db.collection('assignments').doc(alunoUid).get();
  const ad = asg.data();
  if (session.role !== 'admin' && !(ad && (ad.personalId === session.uid || ad.medicoId === session.uid)))
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });

  const body = await req.json();
  // exemplo simples: criar um workout
  if (body?.createWorkout) {
    const w = body.createWorkout;
    const ref = db.collection('students').doc(alunoUid).collection('workouts').doc();
    await ref.set({
      nome: String(w.nome || 'Treino'),
      data: String(w.data || new Date().toISOString().slice(0,10)),
      notas: String(w.notas || ''),
      createdAt: new Date(),
      createdBy: session.uid
    });
    return NextResponse.json({ ok: true, id: ref.id });
  }

  return NextResponse.json({ error: 'nothing to do' }, { status: 400 });
}
