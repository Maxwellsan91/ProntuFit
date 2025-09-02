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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Hide navbar when scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Ocultar navbar na página de login
  if (pathname === '/login') {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/recursos', label: 'Our Services' },
    { href: '/sobre', label: 'About Us' },
    { href: '/contato', label: 'Contact Us' },
    { href: '/faq', label: 'FAQ' },
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
      <nav className="navbar navbar-main" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#1a1a1a',
        backdropFilter: 'blur(20px)',
        padding: '0.75rem 2rem',
        transition: 'all 0.3s ease',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        borderRadius: '0 0 20px 20px',
        margin: '0 20px'
      }}>
        <div className="container navbar-container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <div className="navbar-logo" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.5rem'
          }}>
            <Link href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: '#ffffff'
            }}>
              {/* Logo Image - Adicione sua imagem aqui */}
              <img 
                src="/images/image.png" 
                alt="Logo" 
                style={{
                  height: '28px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
              <div style={{
                fontSize: '2rem',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                display: 'none'
              }}>💪</div>
            </Link>
            

          </div>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: pathname === link.href ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '400',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                   (e.target as HTMLElement).style.color = '#ffffff';
                 }}
                 onMouseLeave={(e) => {
                   if (pathname !== link.href) {
                     (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)';
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
                  color: pathname === '/area' ? '#60a5fa' : '#d1d5db',
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
                    (e.target as HTMLElement).style.color = '#60a5fa';
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(96, 165, 250, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== '/area') {
                    (e.target as HTMLElement).style.color = '#d1d5db';
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
                  color: '#d1d5db',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease'
                }}
                className="hidden md:block"
                 onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#60a5fa'}
                 onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#d1d5db'}
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

            {/* Sign Up Button */}
            {user ? (
              <button
                onClick={handleLogout}
                style={{
                  background: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                   (e.target as HTMLElement).style.backgroundColor = '#e55a2b';
                 }}
                 onMouseLeave={(e) => {
                   (e.target as HTMLElement).style.backgroundColor = '#ff6b35';
                 }}
              >
                Sign out
              </button>
            ) : (
              !loading && (
                <Link
                  href="/login"
                  style={{
                    background: '#ff6b35',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={(e) => {
                     (e.target as HTMLElement).style.backgroundColor = '#e55a2b';
                   }}
                   onMouseLeave={(e) => {
                     (e.target as HTMLElement).style.backgroundColor = '#ff6b35';
                   }}
                  className="hidden md:inline-block"
                >
                  Sign up
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
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
               onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            >
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></span>
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                opacity: isMobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                display: 'block',
                width: '20px',
                height: '2px',
                backgroundColor: '#ffffff',
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
          backgroundColor: 'rgba(31, 41, 55, 0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 1000,
          transition: 'right 0.3s ease',
          padding: '2rem 1.5rem',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
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
                color: pathname === link.href ? '#60a5fa' : '#d1d5db',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
                color: pathname === '/area' ? '#60a5fa' : '#d1d5db',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
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
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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