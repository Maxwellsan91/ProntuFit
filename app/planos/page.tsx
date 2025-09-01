'use client';

import { useState } from 'react';

export default function PlanosPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = {
    monthly: {
      basic: { price: 29, originalPrice: null },
      pro: { price: 79, originalPrice: null },
      premium: { price: 149, originalPrice: null }
    },
    yearly: {
      basic: { price: 290, originalPrice: 348 },
      pro: { price: 790, originalPrice: 948 },
      premium: { price: 1490, originalPrice: 1788 }
    }
  };

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
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💎</div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Escolha Seu Plano</h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Planos flexíveis para todas as necessidades. Comece grátis e evolua conforme cresce.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section style={{padding: '2rem 0 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <div style={{
              display: 'inline-flex',
              background: 'white',
              borderRadius: '50px',
              padding: '4px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <button
                onClick={() => setBillingCycle('monthly')}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: billingCycle === 'monthly' ? '#667eea' : 'transparent',
                  color: billingCycle === 'monthly' ? 'white' : '#4a5568'
                }}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: billingCycle === 'yearly' ? '#667eea' : 'transparent',
                  color: billingCycle === 'yearly' ? 'white' : '#4a5568',
                  position: 'relative'
                }}
              >
                Anual
                <span style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  background: '#10b981',
                  color: 'white',
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  fontWeight: '700'
                }}>-20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section style={{padding: '0 0 4rem', background: '#f8fafc'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Plano Básico */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🌱</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a202c'}}>Básico</h3>
                <p style={{color: '#4a5568', marginBottom: '1rem'}}>Ideal para começar</p>
                <div style={{marginBottom: '1rem'}}>
                  <span style={{fontSize: '3rem', fontWeight: '700', color: '#1a202c'}}>R${plans[billingCycle].basic.price}</span>
                  <span style={{color: '#4a5568', fontSize: '1rem'}}>/{billingCycle === 'monthly' ? 'mês' : 'ano'}</span>
                </div>
                {billingCycle === 'yearly' && plans[billingCycle].basic.originalPrice && (
                  <p style={{color: '#9ca3af', fontSize: '0.9rem', textDecoration: 'line-through'}}>
                    De R${plans[billingCycle].basic.originalPrice}/ano
                  </p>
                )}
              </div>

              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Até 3 alunos
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Treinos básicos
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Acompanhamento simples
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Suporte por email
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#9ca3af'}}>
                  <span style={{color: '#ef4444', marginRight: '0.5rem', fontSize: '1.2rem'}}>✗</span>
                  Relatórios avançados
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#9ca3af'}}>
                  <span style={{color: '#ef4444', marginRight: '0.5rem', fontSize: '1.2rem'}}>✗</span>
                  Integração médica
                </li>
              </ul>

              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                Começar Grátis
              </button>
            </div>

            {/* Plano Pro */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 25px rgba(102, 126, 234, 0.15)',
              border: '2px solid #667eea',
              position: 'relative',
              transform: 'scale(1.05)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700'
              }}>
                MAIS POPULAR
              </div>

              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🚀</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a202c'}}>Pro</h3>
                <p style={{color: '#4a5568', marginBottom: '1rem'}}>Para profissionais</p>
                <div style={{marginBottom: '1rem'}}>
                  <span style={{fontSize: '3rem', fontWeight: '700', color: '#1a202c'}}>R${plans[billingCycle].pro.price}</span>
                  <span style={{color: '#4a5568', fontSize: '1rem'}}>/{billingCycle === 'monthly' ? 'mês' : 'ano'}</span>
                </div>
                {billingCycle === 'yearly' && plans[billingCycle].pro.originalPrice && (
                  <p style={{color: '#9ca3af', fontSize: '0.9rem', textDecoration: 'line-through'}}>
                    De R${plans[billingCycle].pro.originalPrice}/ano
                  </p>
                )}
              </div>

              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Até 50 alunos
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Treinos personalizados
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Relatórios avançados
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Suporte prioritário
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  App mobile
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#9ca3af'}}>
                  <span style={{color: '#ef4444', marginRight: '0.5rem', fontSize: '1.2rem'}}>✗</span>
                  Integração médica completa
                </li>
              </ul>

              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                Começar Teste Grátis
              </button>
            </div>

            {/* Plano Premium */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              position: 'relative'
            }}>
              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>👑</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1a202c'}}>Premium</h3>
                <p style={{color: '#4a5568', marginBottom: '1rem'}}>Solução completa</p>
                <div style={{marginBottom: '1rem'}}>
                  <span style={{fontSize: '3rem', fontWeight: '700', color: '#1a202c'}}>R${plans[billingCycle].premium.price}</span>
                  <span style={{color: '#4a5568', fontSize: '1rem'}}>/{billingCycle === 'monthly' ? 'mês' : 'ano'}</span>
                </div>
                {billingCycle === 'yearly' && plans[billingCycle].premium.originalPrice && (
                  <p style={{color: '#9ca3af', fontSize: '0.9rem', textDecoration: 'line-through'}}>
                    De R${plans[billingCycle].premium.originalPrice}/ano
                  </p>
                )}
              </div>

              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Alunos ilimitados
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Todos os recursos Pro
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Integração médica completa
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  API personalizada
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Suporte 24/7
                </li>
                <li style={{display: 'flex', alignItems: 'center', marginBottom: '0.75rem', color: '#4a5568'}}>
                  <span style={{color: '#10b981', marginRight: '0.5rem', fontSize: '1.2rem'}}>✓</span>
                  Treinamento personalizado
                </li>
              </ul>

              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}>
                Falar com Vendas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{padding: '4rem 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1a202c'}}>Perguntas Frequentes</h2>
            <p style={{fontSize: '1.1rem', color: '#4a5568'}}>
              Tire suas dúvidas sobre nossos planos
            </p>
          </div>

          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'grid',
            gap: '1.5rem'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Posso mudar de plano a qualquer momento?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações são aplicadas imediatamente e o valor é ajustado proporcionalmente.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Existe período de teste gratuito?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Sim! Oferecemos 14 dias de teste gratuito para todos os planos. Você pode cancelar a qualquer momento durante o período de teste sem cobrança.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Como funciona o pagamento anual?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>No plano anual, você paga uma vez por ano e economiza 20% comparado ao pagamento mensal. O valor é cobrado integralmente no início do período.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Posso cancelar minha assinatura?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Claro! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento e continuará tendo acesso até o final do período pago.</p>
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
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem'}}>Pronto para Começar?</h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Junte-se a milhares de profissionais que já transformaram seu negócio com o ProntuFit
          </p>
          <button style={{
            background: 'white',
            color: '#667eea',
            padding: '1rem 2rem',
            borderRadius: '50px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.3s ease'
          }}>
            Começar Teste Grátis de 14 Dias
          </button>
        </div>
      </section>
    </main>
  );
}