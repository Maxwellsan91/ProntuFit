import Link from 'next/link';
import ImageGrid from '@/components/ImageGrid';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-80px',
        paddingTop: '80px'
      }} className="hero-section">
        {/* Background Image - covers from navbar to end */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/hero/hero0.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }} />
        
        {/* Subtle overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%)',
          zIndex: 2
        }} />
        
        {/* Bottom gradient for smooth transition */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.8) 5%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0.98) 40%, rgba(0, 0, 0, 0.95) 50%, rgba(0, 0, 0, 0.9) 60%, rgba(0, 0, 0, 0.85) 70%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 4
        }} />
        
        {/* Hero1 Image - larger and more integrated */}
        <div style={{
          position: 'absolute',
          right: '3%',
          top: '0',
          width: '50%',
          maxWidth: '700px',
          height: '100%',
          backgroundImage: 'url(/images/hero/hero1.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          borderRadius: '0',
          zIndex: 3,
          opacity: '0.9'
        }} className="hero-image" />
        
        {/* Content */}
        <div className="container hero-content" style={{
          position: 'relative',
          zIndex: 4,
          color: 'white',
          textAlign: 'left',
          maxWidth: '600px',
          marginLeft: '2rem',
          marginRight: 'auto'
        }}>
          <h1 className="hero-title" style={{
            fontSize: '3.2rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            lineHeight: '1.2'
          }}>
            <span style={{color: '#ff6b35'}}>Your</span> Fitness Journey<br/>
            Starts <span style={{color: '#ff6b35'}}>Here</span>
          </h1>
          <p className="hero-description" style={{
            fontSize: '1.3rem',
            marginBottom: '2.5rem',
            opacity: '0.95',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            lineHeight: '1.6'
          }}>
            Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet.
          </p>
          <div className="hero-buttons" style={{display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap'}}>
            <Link 
              className="btn" 
              href="/login"
              style={{
                backgroundColor: '#ff6b35',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                transition: 'transform 0.2s ease',
                textDecoration: 'none'
              }}
            >
              Get Start
            </Link>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}>
                <span style={{fontSize: '1.2rem'}}>▶</span>
              </div>
              <span style={{fontSize: '1.1rem', fontWeight: '500'}}>Watch Now</span>
            </div>
          </div>
          
          {/* Reviews Section */}
          <div style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* User Avatars */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '1rem'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#ff6b35',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginRight: '-10px',
                border: '3px solid white',
                zIndex: 3
              }}>M</div>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#4a90e2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginRight: '-10px',
                border: '3px solid white',
                zIndex: 2
              }}>J</div>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#7b68ee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '600',
                marginRight: '10px',
                border: '3px solid white',
                zIndex: 1
              }}>A</div>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                backgroundColor: '#ff6b35',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: '600',
                border: '2px solid white'
              }}>4+</div>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
              <div style={{
                display: 'flex',
                gap: '0.2rem'
              }}>
                {[1,2,3,4,5].map(star => (
                  <span key={star} style={{color: '#ffd700', fontSize: '1.2rem'}}>★</span>
                ))}
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{fontSize: '1rem', fontWeight: '600'}}>350k+</span>
                <span style={{fontSize: '0.9rem', opacity: '0.8'}}>Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section style={{
        backgroundColor: '#000000',
        color: 'white',
        padding: '6rem 0'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'left',
            marginBottom: '3rem'
          }}>
            <div style={{
              fontSize: '1rem',
              fontWeight: '400',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}>OUR SERVICE</div>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '2rem',
              color: '#ff6b35',
              lineHeight: '1.1'
            }}>Unlock Your Best Self with Our Full Range of Fitness Services</h2>
            <p style={{
              fontSize: '1.1rem',
              opacity: '0.8',
              maxWidth: '800px',
              lineHeight: '1.6'
            }}>
              Lorem ipsum dolor sit amet consectetur. Habitasse locus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel diam ut eu arcu scelerisque erat. A lorem curabitur consectetur in
            </p>
          </div>
          
          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '2rem',
            height: '600px'
          }}>
            {/* Left Grid - 6 small cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              gap: '1rem'
            }}>
              {/* Transform */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23333\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3ETransform%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Transform</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>

              {/* Elevate */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23444\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3EElevate%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Elevate</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>

              {/* Achieve */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23555\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3EAchieve%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Achieve</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>

              {/* Perform */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23666\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3EPerform%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Perform</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>

              {/* Push */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23777\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3EPush%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Push</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>

              {/* Train */}
              <div style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect fill=\'%23888\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'200\' y=\'150\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3ETrain%3C/text%3E%3C/svg%3E")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>Train</span>
                  <span style={{
                    fontSize: '1rem',
                    color: 'white'
                  }}>↗</span>
                </div>
              </div>
            </div>

            {/* Right Card - Unleash */}
            <div style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 600\'%3E%3Crect fill=\'%23222\' width=\'400\' height=\'600\'/%3E%3Ctext x=\'200\' y=\'300\' text-anchor=\'middle\' fill=\'white\' font-size=\'24\'%3EGym Interior%3C/text%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '2rem',
              position: 'relative',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              <div className="why-train-content">
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>Unleash</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id="sobre-mim" className="container" style={{padding: '5rem 0', backgroundColor: '#000000'}}>
        <div className="about-section" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Conteúdo - Agora à esquerda */}
          <div className="about-content">
            <h2 style={{
               fontSize: '2.5rem',
               fontWeight: '700',
               color: '#ffffff',
               marginBottom: '1.5rem',
               lineHeight: '1.2'
             }}>Sobre Mim</h2>
            
            <p style={{
               fontSize: '1.1rem',
               color: '#cccccc',
               lineHeight: '1.8',
               marginBottom: '1.5rem'
             }}>
              Olá! Sou <strong style={{color: '#ff6b35'}}>Wallace Gonçalves</strong>, Personal Trainer & Online Coach 
              baseado na cidade luz, <strong style={{color: '#ff6b35'}}>Paris</strong>. Com uma paixão genuína por 
              transformação e bem-estar, dedico minha carreira a ajudar pessoas a descobrirem 
              seu melhor potencial através do movimento e do cuidado com o corpo.
            </p>
            
            <p style={{
               fontSize: '1.1rem',
               color: '#cccccc',
               lineHeight: '1.8',
               marginBottom: '2rem'
             }}>
               Minha abordagem é fundamentada em três pilares essenciais: <strong style={{color: '#ff6b35'}}>Saúde • Performance • Estética</strong>. 
               Seja através de sessões presenciais em Paris ou acompanhamento online personalizado, 
               desenvolvo programas únicos que respeitam sua individualidade e maximizam seus resultados. 
               Porque cada jornada é única, e você merece um treinamento que seja verdadeiramente seu.
             </p>
            
            <div className="about-badges" style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                backgroundColor: '#ff6b35',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Paris, França</div>
              
              <div style={{
                backgroundColor: '#ff6b35',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Presencial & Online</div>
              
              <div style={{
                backgroundColor: '#ff6b35',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Saúde • Performance • Estética</div>
            </div>
          </div>

          {/* Grid de Imagens - Agora à direita */}
          <ImageGrid 
            images={[
              { src: '/images/eu/eu-1.png', alt: 'Wallace Gonçalves 1' },
              { src: '/images/eu/IMG_8576.jpeg', alt: 'Wallace Gonçalves 2' },
              { src: '/images/eu/IMG_8577.jpeg', alt: 'Wallace Gonçalves 3' },
              { src: '/images/eu/IMG_8578.jpeg', alt: 'Wallace Gonçalves 4' }
            ]}
          />
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="container" style={{padding: '5rem 0', backgroundColor: '#000000'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>Funcionalidades</h2>
          <p style={{
            fontSize: '1.1rem',
            color: '#cccccc',
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
              color: '#ffffff',
              marginBottom: '1rem'
            }}>Treinos Personalizados</h3>
            <p style={{color: '#cccccc', lineHeight: '1.6'}}>
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
              color: '#ffffff',
              marginBottom: '1rem'
            }}>Acompanhamento Médico</h3>
            <p style={{color: '#cccccc', lineHeight: '1.6'}}>
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
              color: '#ffffff',
              marginBottom: '1rem'
            }}>Evolução Visual</h3>
            <p style={{color: '#cccccc', lineHeight: '1.6'}}>
              Gráficos e relatórios detalhados para visualizar o seu progresso ao longo do tempo
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{
        backgroundColor: '#000000',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div className="grid grid-2 why-train-section" style={{gap: '4rem', alignItems: 'center'}}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '2rem'
              }}>Por que treinar comigo?</h2>
              
              <div className="why-train-items" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
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
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem'}}>
                      Acompanhamento Profissional
                    </h4>
                    <p style={{color: '#cccccc', margin: 0}}>
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
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem'}}>
                      Resultados Comprovados
                    </h4>
                    <p style={{color: '#cccccc', margin: 0}}>
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
                    <h4 style={{fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '0.5rem'}}>
                      Flexibilidade Total
                    </h4>
                    <p style={{color: '#cccccc', margin: 0}}>
                      Acesse a plataforma a qualquer hora, em qualquer lugar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-train-cta" style={{
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


    </main>
  );
}
