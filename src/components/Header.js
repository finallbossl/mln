import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#1a365d'
        }}>
          KTTT ĐHXHCN VN
        </div>
        
        <nav style={{ display: window.innerWidth > 768 ? 'flex' : 'none', gap: '2rem' }}>
          <a href="#co-so" style={{ textDecoration: 'none', color: '#1a365d', fontWeight: '500', transition: 'color 0.3s' }}>Cơ sở lý luận</a>
          <a href="#moi-quan-he" style={{ textDecoration: 'none', color: '#1a365d', fontWeight: '500', transition: 'color 0.3s' }}>Mối quan hệ</a>
          <a href="#dac-thu" style={{ textDecoration: 'none', color: '#1a365d', fontWeight: '500', transition: 'color 0.3s' }}>Tính đặc thù</a>
          <a href="#ket-luan" style={{ textDecoration: 'none', color: '#1a365d', fontWeight: '500', transition: 'color 0.3s' }}>Kết luận</a>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;