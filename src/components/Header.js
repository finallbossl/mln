import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }} />
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(135deg, rgba(250, 248, 243, 0.95) 0%, rgba(245, 241, 234, 0.95) 100%)',
        backdropFilter: 'blur(15px)',
        borderBottom: '2px solid rgba(139, 69, 19, 0.1)',
        boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)',
        zIndex: 1000,
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            fontFamily: 'Merriweather, serif',
            background: 'linear-gradient(135deg, #b71c1c 0%, #ffd700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            KTTT ĐHXHCN Việt Nam
          </div>
          
          <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#co-so" style={{ 
              textDecoration: 'none', 
              color: '#3e2723', 
              fontWeight: '500', 
              fontFamily: 'Lora, serif',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              Cơ sở lý luận
            </a>
            <a href="#moi-quan-he" style={{ 
              textDecoration: 'none', 
              color: '#3e2723', 
              fontWeight: '500', 
              fontFamily: 'Lora, serif',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Mối quan hệ
            </a>
            <a href="#dac-thu" style={{ 
              textDecoration: 'none', 
              color: '#3e2723', 
              fontWeight: '500', 
              fontFamily: 'Lora, serif',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Tính đặc thù
            </a>
            <a href="#ket-luan" style={{ 
              textDecoration: 'none', 
              color: '#3e2723', 
              fontWeight: '500', 
              fontFamily: 'Lora, serif',
              fontSize: '1.1rem',
              transition: 'all 0.3s ease'
            }}>
              Kết luận
            </a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: window.innerWidth <= 768 ? 'block' : 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#3e2723'
            }}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;