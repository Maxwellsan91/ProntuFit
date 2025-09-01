'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase/client';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Ocultar navbar na página de login
  if (pathname === '/login') {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/recursos', label: 'Recursos' },
    { href: '/planos', label: 'Planos' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  const handleLogout = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);
      // Clear session cookie
      await fetch('/api/session', { method: 'DELETE' });
      // Redirect to login
      router.push('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {/* Logo */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: '#1f2937'
          }}>
            <div style={{
              fontSize: '2rem',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>💪</div>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              ProntuFit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? '#667eea' : '#6b7280',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                   if (pathname !== link.href) {
                     (e.target as HTMLElement).style.color = '#667eea';
                     (e.target as HTMLElement).style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (pathname !== link.href) {
                     (e.target as HTMLElement).style.color = '#6b7280';
                     (e.target as HTMLElement).style.backgroundColor = 'transparent';
                   }
                 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Login and Mobile Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* User Area Button - Only show when logged in */}
            {user && (
              <Link
                href="/area"
                style={{
                  color: pathname === '/area' ? '#667eea' : '#6b7280',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="hidden md:flex"
                onMouseEnter={(e) => {
                  if (pathname !== '/area') {
                    (e.target as HTMLElement).style.color = '#667eea';
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/area') {
                    (e.target as HTMLElement).style.color = '#6b7280';
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span>👤</span>
                Área do Usuário
              </Link>
            )}

            {/* Conditional Links for specific pages */}
            {pathname === '/area' && (
              <Link
                href="/profissional"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                className="hidden md:block"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6b7280'}
              >
                Profissional
              </Link>
            )}

            {pathname === '/profissional/alunos' && (
              <Link
                href="/area"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                className="hidden md:block"
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#667eea'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#6b7280'}
              >
                Minha Área
              </Link>
            )}

            {/* Login/Logout Button */}
            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  border: 'none',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(239, 68, 68, 0.3)'
                }}
                onMouseEnter={(e) => {
                   (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                   (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.4)';
                 }}
                 onMouseLeave={(e) => {
                   (e.target as HTMLElement).style.transform = 'translateY(0)';
                   (e.target as HTMLElement).style.boxShadow = '0 2px 10px rgba(239, 68, 68, 0.3)';
                 }}
              >
                Sair
              </button>
            ) : (
              !loading && (
                <Link
                  href="/login"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                     (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                     (e.target as HTMLElement).style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     (e.target as HTMLElement).style.transform = 'translateY(0)';
                     (e.target as HTMLElement).style.boxShadow = '0 2px 10px rgba(102, 126, 234, 0.3)';
                   }}
                  className="hidden md:inline-block"
                >
                  Entrar
                </Link>
              )
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '32px',
                height: '32px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                borderRadius: '6px',
                transition: 'background-color 0.2s ease'
              }}
              className="md:hidden"
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(102, 126, 234, 0.1)'}
               onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></span>
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#374151',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            backdropFilter: 'blur(4px)'
          }}
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileMenuOpen ? 0 : '-100%',
          width: '280px',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 1000,
          transition: 'right 0.3s ease',
          padding: '2rem 1.5rem',
          borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)'
        }}
        className="md:hidden"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginTop: '4rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              style={{
                color: pathname === link.href ? '#667eea' : '#374151',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile User Area Button - Only show when logged in */}
          {user && (
            <Link
              href="/area"
              onClick={closeMobileMenu}
              style={{
                color: pathname === '/area' ? '#667eea' : '#374151',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>👤</span>
              Área do Usuário
            </Link>
          )}

          <div style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            paddingTop: '1.5rem',
            marginTop: '1rem'
          }}>
            {/* Mobile Login/Logout Button */}
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(239, 68, 68, 0.3)'
                }}
              >
                Sair
              </button>
            ) : (
              !loading && (
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  style={{
                    display: 'block',
                    width: '100%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)'
                  }}
                >
                  Entrar
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '80px' }} />
    </>
  );
}