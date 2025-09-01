'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'geral',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', tipo: 'geral', mensagem: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📞</div>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            margin: '0 0 1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>Entre em Contato</h1>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            opacity: '0.95',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Estamos aqui para ajudar você a alcançar seus objetivos de saúde e fitness
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{padding: '4rem 0', background: '#f8fafc'}}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0'
            }}>
              <h2 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1a202c'}}>Envie sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151'}}>Nome Completo</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="input"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151'}}>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151'}}>Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="input"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151'}}>Tipo de Contato</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      background: 'white'
                    }}
                  >
                    <option value="geral">Informações Gerais</option>
                    <option value="aluno">Quero ser Aluno</option>
                    <option value="personal">Sou Personal Trainer</option>
                    <option value="medico">Sou Médico</option>
                    <option value="suporte">Suporte Técnico</option>
                  </select>
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151'}}>Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                    placeholder="Conte-nos como podemos ajudar você..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: '#1a202c'}}>Outras Formas de Contato</h2>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {/* WhatsApp */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{fontSize: '2rem'}}>💬</div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#1a202c'}}>WhatsApp</h3>
                    <p style={{color: '#4a5568', margin: 0}}>(11) 99999-9999</p>
                    <p style={{color: '#667eea', fontSize: '0.9rem', margin: 0}}>Atendimento 24/7</p>
                  </div>
                </div>

                {/* Email */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{fontSize: '2rem'}}>📧</div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#1a202c'}}>E-mail</h3>
                    <p style={{color: '#4a5568', margin: 0}}>contato@prontufit.com</p>
                    <p style={{color: '#667eea', fontSize: '0.9rem', margin: 0}}>Resposta em até 24h</p>
                  </div>
                </div>

                {/* Telefone */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{fontSize: '2rem'}}>📞</div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#1a202c'}}>Telefone</h3>
                    <p style={{color: '#4a5568', margin: 0}}>(11) 3333-4444</p>
                    <p style={{color: '#667eea', fontSize: '0.9rem', margin: 0}}>Seg-Sex: 8h às 18h</p>
                  </div>
                </div>

                {/* Endereço */}
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{fontSize: '2rem'}}>📍</div>
                  <div>
                    <h3 style={{fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#1a202c'}}>Endereço</h3>
                    <p style={{color: '#4a5568', margin: 0}}>Av. Paulista, 1000</p>
                    <p style={{color: '#4a5568', margin: 0}}>São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>
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
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Como funciona a plataforma?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>O ProntuFit conecta alunos, personal trainers e médicos em uma plataforma integrada para acompanhamento completo da evolução fitness.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Quanto custa?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Oferecemos planos flexíveis para diferentes necessidades. Entre em contato para conhecer nossas opções de preços.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>É seguro?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Sim! Utilizamos as melhores práticas de segurança e criptografia para proteger seus dados pessoais e de saúde.</p>
            </div>

            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1a202c'}}>Posso cancelar a qualquer momento?</h3>
              <p style={{color: '#4a5568', lineHeight: '1.6'}}>Claro! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}