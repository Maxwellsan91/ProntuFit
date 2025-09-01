'use client';
import { useState } from 'react';
import { auth } from '@/lib/firebase/client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await cred.user.getIdToken();
      await fetch('/api/session', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ idToken })
      });
      router.push('/area');
    } catch (err: any) {
      setError(err?.message || 'Erro de autenticação');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container" style={{paddingTop:'2rem'}}>
      <h1 style={{fontSize:'1.5rem',marginBottom:'1rem'}}>Entrar</h1>
      <form onSubmit={onSubmit} className="card">
        <div>
          <label>Email</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </div>
        {error && <p className="small" style={{color:'#b00'}}>{error}</p>}
        <button className="btn" disabled={loading} type="submit">{loading?'A entrar...':'Entrar'}</button>
      </form>
    </main>
  );
}
