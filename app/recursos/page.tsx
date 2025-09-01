export default function RecursosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 0 6rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✨</div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Recursos Incríveis</h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Descubra todas as funcionalidades que tornam o ProntuFit único
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{padding: '4rem 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {/* Feature 1 */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Treinos Personalizados</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Receba treinos sob medida criados por personal trainers qualificados, adaptados aos seus objetivos e limitações.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📊</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Acompanhamento Médico</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Monitore sua saúde com avaliações médicas regulares e relatórios detalhados sobre sua evolução física.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📈</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Evolução Visual</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Visualize seu progresso através de gráficos interativos e métricas detalhadas de performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section style={{padding: '4rem 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a202c'}}>Experiência Interativa</h2>
            <p style={{fontSize: '1.1rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto'}}>
              Explore nossa interface intuitiva e moderna
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Demo Card 1 */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💪</div>
              <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Dashboard do Aluno</h4>
              <p style={{fontSize: '0.9rem', opacity: '0.9'}}>Acompanhe seus treinos e evolução</p>
            </div>

            {/* Demo Card 2 */}
            <div style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>👨‍⚕️</div>
              <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Área Médica</h4>
              <p style={{fontSize: '0.9rem', opacity: '0.9'}}>Avaliações e relatórios médicos</p>
            </div>

            {/* Demo Card 3 */}
            <div style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏋️‍♂️</div>
              <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>Personal Trainer</h4>
              <p style={{fontSize: '0.9rem', opacity: '0.9'}}>Crie e gerencie treinos</p>
            </div>

            {/* Demo Card 4 */}
            <div style={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              borderRadius: '12px',
              padding: '1.5rem',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📱</div>
              <h4 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem'}}>App Mobile</h4>
              <p style={{fontSize: '0.9rem', opacity: '0.9'}}>Acesse de qualquer lugar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{padding: '4rem 0', background: '#1a202c', color: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>Números que Impressionam</h2>
            <p style={{fontSize: '1.1rem', opacity: '0.8'}}>
              Resultados reais de uma plataforma que funciona
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem'}}>1000+</div>
              <p style={{fontSize: '1.1rem', opacity: '0.9'}}>Usuários Ativos</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem'}}>50+</div>
              <p style={{fontSize: '1.1rem', opacity: '0.9'}}>Personal Trainers</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem'}}>25+</div>
              <p style={{fontSize: '1.1rem', opacity: '0.9'}}>Médicos Especialistas</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem'}}>98%</div>
              <p style={{fontSize: '1.1rem', opacity: '0.9'}}>Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🚀</div>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>Pronto para Começar?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9'}}>
            Junte-se a milhares de pessoas que já transformaram suas vidas
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a
              href="/login"
              style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'transform 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
              Começar Agora
            </a>
            <a
              href="/"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              Saber Mais
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}