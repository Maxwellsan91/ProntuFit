'use client';
import { useState } from 'react';

type Workout = { id?: string; data?: string; nome?: string; notas?: string; };

export default function WorkoutEditor({ alunoUid, existing }: { alunoUid: string; existing: Workout[] }) {
  const [nome, setNome] = useState('Treino A');
  const [data, setData] = useState<string>(new Date().toISOString().slice(0,10));
  const [notas, setNotas] = useState('');

  async function save() {
    const res = await fetch(`/api/students/${alunoUid}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ createWorkout: { nome, data, notas } })
    });
    if (!res.ok) {
      alert('Erro ao gravar');
      return;
    }
    location.reload();
  }

  return (
    <div>
      <div className="grid grid-2">
        <div>
          <label>Nome</label>
          <input className="input" value={nome} onChange={e=>setNome(e.target.value)} />
        </div>
        <div>
          <label>Data</label>
          <input className="input" type="date" value={data} onChange={e=>setData(e.target.value)} />
        </div>
      </div>
      <div>
        <label>Notas</label>
        <textarea className="input" rows={4} value={notas} onChange={e=>setNotas(e.target.value)} />
      </div>
      <button className="btn" onClick={save}>Guardar Treino</button>

      <h4 style={{marginTop:'1rem'}}>Últimos treinos</h4>
      {existing?.map(w => (
        <div key={w.id} style={{borderTop:'1px solid #eee',padding:'.5rem 0'}}>
          <div><strong>{w.nome}</strong> <span className="small">({w.data})</span></div>
          <div className="small">{w.notas}</div>
        </div>
      ))}
    </div>
  );
}
