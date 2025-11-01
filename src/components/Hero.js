import React from 'react';
import { FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="section academic-paper" style={{
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="vietnam-map-bg"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h1 className="animate-fadeInUp" style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(139, 69, 19, 0.1)'
        }}>
          <span style={{ color: '#3e2723' }}>Cơ Sở Lý Luận Về Kinh Tế Thị Trường</span><br />
          <span style={{ color: '#b71c1c' }}>Định Hướng Xã Hội Chủ Nghĩa Ở Việt Nam</span>
        </h1>
        
        <p className="animate-fadeInUp" style={{
          fontSize: '1.25rem',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          color: '#5d4037',
          opacity: 0.9,
          animationDelay: '0.2s'
        }}>
          Hiểu rõ mô hình kinh tế độc đáo của Việt Nam: Sự kết hợp biện chứng giữa hiệu quả thị trường và công bằng xã hội
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <div className="glass-card animate-float" style={{
            padding: '2rem',
            borderRadius: '20px',
            animationDelay: '0s'
          }}>
            <FaChartLine size={48} style={{ color: '#b71c1c', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#3e2723' }}>Hiệu Quả Kinh Tế</h3>
            <p style={{ color: '#5d4037', opacity: 0.9 }}>Phát triển lực lượng sản xuất và tăng trưởng bền vững</p>
          </div>
          
          <div className="glass-card animate-float" style={{
            padding: '2rem',
            borderRadius: '20px',
            animationDelay: '0.2s'
          }}>
            <FaUsers size={48} style={{ color: '#ffd700', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#3e2723' }}>Công Bằng Xã Hội</h3>
            <p style={{ color: '#5d4037', opacity: 0.9 }}>Đảm bảo phúc lợi và an sinh cho mọi người dân</p>
          </div>
          
          <div className="glass-card animate-float" style={{
            padding: '2rem',
            borderRadius: '20px',
            animationDelay: '0.4s'
          }}>
            <FaGlobe size={48} style={{ color: '#8d6e63', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#3e2723' }}>Hội Nhập Quốc Tế</h3>
            <p style={{ color: '#5d4037', opacity: 0.9 }}>Mở cửa và tham gia chuỗi giá trị toàn cầu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;