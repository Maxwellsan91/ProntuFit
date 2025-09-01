'use client';

export default function SobrePage() {
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
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏆</div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Sobre o ProntuFit</h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Revolucionando o acompanhamento fitness com tecnologia e cuidado humano
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{padding: '4rem 0', background: 'white'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1a202c'}}>Nossa Missão</h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568',
                marginBottom: '1.5rem'
              }}>
                Democratizar o acesso a um acompanhamento fitness de qualidade, conectando alunos, personal trainers e profissionais de saúde em uma plataforma integrada e intuitiva.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                Acreditamos que todos merecem ter acesso a orientação profissional para alcançar seus objetivos de saúde e bem-estar.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '3rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem'}}>Nosso Objetivo</h3>
              <p style={{fontSize: '1rem', opacity: '0.9', lineHeight: '1.6'}}>
                Ser a principal plataforma de acompanhamento fitness do Brasil, promovendo saúde e qualidade de vida através da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{padding: '4rem 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a202c'}}>Nossos Valores</h2>
            <p style={{fontSize: '1.1rem', color: '#4a5568'}}>
              Os princípios que guiam nossa jornada
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🤝</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Colaboração</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Facilitamos a conexão entre profissionais e alunos, criando uma rede de apoio mútuo para o sucesso de todos.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔒</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Segurança</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Protegemos seus dados pessoais e de saúde com os mais altos padrões de segurança e privacidade.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💡</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Inovação</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Utilizamos tecnologia de ponta para criar soluções simples e eficazes para o acompanhamento fitness.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Resultados</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Focamos em entregar resultados reais e mensuráveis para todos os usuários da nossa plataforma.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>❤️</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Cuidado</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Colocamos o bem-estar e a saúde dos nossos usuários no centro de tudo que fazemos.
              </p>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌟</div>
              <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: '#1a202c'}}>Excelência</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>
                Buscamos constantemente a melhoria contínua em todos os aspectos da nossa plataforma e serviços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{padding: '4rem 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a202c'}}>Nossa Equipe</h2>
            <p style={{fontSize: '1.1rem', color: '#4a5568'}}>
              Profissionais apaixonados por tecnologia e saúde
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white'
              }}>👨‍💻</div>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a202c'}}>Equipe de Desenvolvimento</h3>
              <p style={{color: '#667eea', fontSize: '0.9rem', marginBottom: '0.5rem'}}>Tecnologia</p>
              <p style={{color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Especialistas em desenvolvimento web e mobile, focados em criar a melhor experiência do usuário.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white'
              }}>🏋️‍♀️</div>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a202c'}}>Consultores Fitness</h3>
              <p style={{color: '#667eea', fontSize: '0.9rem', marginBottom: '0.5rem'}}>Educação Física</p>
              <p style={{color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Personal trainers e educadores físicos que garantem a qualidade do conteúdo e metodologias.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white'
              }}>👩‍⚕️</div>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a202c'}}>Consultores Médicos</h3>
              <p style={{color: '#667eea', fontSize: '0.9rem', marginBottom: '0.5rem'}}>Medicina Esportiva</p>
              <p style={{color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Médicos especialistas que validam nossos protocolos de saúde e acompanhamento médico.
              </p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white'
              }}>🎨</div>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1a202c'}}>Design & UX</h3>
              <p style={{color: '#667eea', fontSize: '0.9rem', marginBottom: '0.5rem'}}>Experiência do Usuário</p>
              <p style={{color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Designers focados em criar interfaces intuitivas e experiências memoráveis para nossos usuários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>Junte-se à Nossa Comunidade</h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Faça parte da revolução fitness e transforme sua jornada de saúde e bem-estar
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              Começar Agora
            </button>
            <button style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              border: '2px solid white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Saber Mais
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}