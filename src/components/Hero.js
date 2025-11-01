import React from 'react';
import { FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa';

const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
      backdropFilter: 'blur(20px)',
      color: '#1a365d',
      padding: '120px 0 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <h1 className="animate-fadeInUp" style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          marginBottom: '1.5rem',
          lineHeight: '1.2',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}>
          Cơ Sở Lý Luận Về Kinh Tế Thị Trường<br />
          <span style={{ 
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Định Hướng Xã Hội Chủ Nghĩa Ở Việt Nam</span>
        </h1>
        
        <p className="animate-fadeInUp" style={{
          fontSize: '1.25rem',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          opacity: 0.8,
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
            <FaChartLine size={48} style={{ color: '#667eea', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Hiệu Quả Kinh Tế</h3>
            <p style={{ opacity: 0.8 }}>Phát triển lực lượng sản xuất và tăng trưởng bền vững</p>
          </div>
          
          <div className="glass-card animate-float" style={{
            padding: '2rem',
            borderRadius: '20px',
            animationDelay: '0.2s'
          }}>
            <FaUsers size={48} style={{ color: '#764ba2', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Công Bằng Xã Hội</h3>
            <p style={{ opacity: 0.8 }}>Đảm bảo phúc lợi và an sinh cho mọi người dân</p>
          </div>
          
          <div className="glass-card animate-float" style={{
            padding: '2rem',
            borderRadius: '20px',
            animationDelay: '0.4s'
          }}>
            <FaGlobe size={48} style={{ color: '#8b5cf6', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Hội Nhập Quốc Tế</h3>
            <p style={{ opacity: 0.8 }}>Mở cửa và tham gia chuỗi giá trị toàn cầu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;