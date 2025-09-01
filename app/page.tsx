import Link from 'next/link';

export default function HomePage() {
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
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>💪</div>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>ProntuFit</h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            A plataforma completa para acompanhar a sua evolução fitness com Personal Trainers e Médicos especializados
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link 
              className="btn" 
              href="/login"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease'
              }}
            >
              Começar Agora
            </Link>
            <Link 
              className="btn" 
              href="#funcionalidades"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: '2px solid white',
                borderRadius: '50px',
                transition: 'all 0.2s ease'
              }}
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="container" style={{padding: '5rem 0'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333',
            marginBottom: '1rem'
          }}>Funcionalidades</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            maxWidth: '500px',
            margin: '0 auto'
          }}>Tudo o que precisa para alcançar os seus objetivos fitness</p>
        </div>
        
        <div className="grid grid-3" style={{gap: '2rem'}}>
          <div className="card" style={{
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>🏋️‍♂️</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '1rem'
            }}>Treinos Personalizados</h3>
            <p style={{color: '#666', lineHeight: '1.6'}}>
              Planos de treino criados pelo seu Personal Trainer com exercícios, séries, repetições e cargas específicas
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>📊</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '1rem'
            }}>Acompanhamento Médico</h3>
            <p style={{color: '#666', lineHeight: '1.6'}}>
              Monitorização da sua evolução com registos de peso, percentagem de gordura e medidas corporais
            </p>
          </div>

          <div className="card" style={{
            textAlign: 'center',
            padding: '2.5rem 1.5rem',
            border: '1px solid #e9ecef',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}>
            <div style={{fontSize: '3rem', marginBottom: '1.5rem'}}>📈</div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: '600',
              color: '#333',
              marginBottom: '1rem'
            }}>Evolução Visual</h3>
            <p style={{color: '#666', lineHeight: '1.6'}}>
              Gráficos e relatórios detalhados para visualizar o seu progresso ao longo do tempo
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{
        backgroundColor: '#f8f9fa',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div className="grid grid-2" style={{gap: '4rem', alignItems: 'center'}}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#333',
                marginBottom: '2rem'
              }}>Porquê escolher o ProntuFit?</h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div style={{
                    backgroundColor: '#667eea',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>✓</div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#333', marginBottom: '0.5rem'}}>
                      Acompanhamento Profissional
                    </h4>
                    <p style={{color: '#666', margin: 0}}>
                      Personal Trainers e Médicos qualificados acompanham a sua jornada
                    </p>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div style={{
                    backgroundColor: '#667eea',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>✓</div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#333', marginBottom: '0.5rem'}}>
                      Resultados Comprovados
                    </h4>
                    <p style={{color: '#666', margin: 0}}>
                      Metodologia baseada em evidências científicas para resultados eficazes
                    </p>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div style={{
                    backgroundColor: '#667eea',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>✓</div>
                  <div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#333', marginBottom: '0.5rem'}}>
                      Flexibilidade Total
                    </h4>
                    <p style={{color: '#666', margin: 0}}>
                      Acesse a plataforma a qualquer hora, em qualquer lugar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🎯</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#333',
                marginBottom: '1rem'
              }}>Pronto para começar?</h3>
              <p style={{
                color: '#666',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Junte-se a centenas de pessoas que já transformaram as suas vidas com o ProntuFit
              </p>
              <Link 
                className="btn" 
                href="/login"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  transition: 'transform 0.2s ease'
                }}
              >
                Iniciar Jornada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{fontSize: '2rem', marginBottom: '1rem'}}>💪</div>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>ProntuFit</h3>
          <p style={{
            color: '#ccc',
            margin: 0
          }}>Transforme o seu corpo, transforme a sua vida</p>
        </div>
      </footer>
    </main>
  );
}
