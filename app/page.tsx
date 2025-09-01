import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{paddingTop:'4rem',paddingBottom:'4rem'}}>
        <h1 style={{fontSize:'2rem',margin:'0 0 1rem'}}>Fitness & Saúde Online</h1>
        <p className="small">Acompanhe os seus treinos e evolução com o seu Personal e Médico.</p>
        <div style={{marginTop:'1.5rem'}}>
          <Link className="btn" href="/login">Aceder</Link>
        </div>
      </section>
      <section className="container grid grid-2">
        <div className="card">
          <h3>Treinos</h3>
          <p>Planos por semanas e exercícios com séries/reps/carga.</p>
        </div>
        <div className="card">
          <h3>Evolução</h3>
          <p>Registos de peso, % de gordura e perímetros com gráficos.</p>
        </div>
      </section>
    </main>
  );
}
