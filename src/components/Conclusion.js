import React from 'react';
import { FaTrophy, FaArrowUp } from 'react-icons/fa';

const Conclusion = () => {
  return (
    <section id="ket-luan" className="section" style={{
      background: 'linear-gradient(135deg, rgba(234, 243, 152, 0.9) 0%, rgba(220, 176, 145, 0.8) 50%, rgba(220, 246, 92, 0.9) 100%)',
      backdropFilter: 'blur(20px)',
      color: 'white',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="text-center mb-12 animate-fadeInUp">
          <FaTrophy size={64} style={{ color: '#fbbf24', margin: '0 auto 1.5rem' }} />
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Kết Luận
          </h2>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Sự lựa chọn đúng đắn, sáng tạo và tất yếu của Việt Nam
          </p>
        </div>



        <div className="glass-card animate-fadeInUp" style={{
          background: 'rgba(251, 191, 36, 0.2)',
          padding: '2.5rem',
          borderRadius: '20px',
          textAlign: 'center',
          border: '2px solid rgba(251, 191, 36, 0.3)',
          backdropFilter: 'blur(15px)',
          animationDelay: '0.4s'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem'
          }}>
            <FaArrowUp size={24} style={{ color: '#fbbf24', marginRight: '0.5rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fbbf24' }}>
              Thành Tựu Đạt Được
            </h3>
          </div>
          
          <div style={{
            fontSize: '1.125rem',
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam</strong> là một sáng tạo lý luận và thực tiễn mang tính lịch sử.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Về lý luận</strong>, đó là sự vận dụng biện chứng giữa quy luật của thị trường và bản chất của chủ nghĩa xã hội.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Về thực tiễn</strong>, con đường này đã giúp Việt Nam thoát khỏi khủng hoảng, tăng trưởng ổn định, giảm nghèo bền vững, hội nhập quốc tế thành công.
            </p>
            <p>
              <strong>Về tính tất yếu</strong>, đây là con đường phù hợp nhất để Việt Nam đi lên chủ nghĩa xã hội trong điều kiện phát triển kinh tế hàng hóa, hội nhập toàn cầu, nhưng vẫn giữ vững bản chất nhân văn và công bằng xã hội của chế độ XHCN.
            </p>
          </div>
        </div>

        <div className="animate-fadeInUp" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
          animationDelay: '0.6s'
        }}>
          <div className="glass-card animate-float" style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animationDelay: '0s'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fbbf24' }}>35+</div>
            <div style={{ opacity: 0.9 }}>Năm Đổi Mới</div>
          </div>
          
          <div className="glass-card animate-float" style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animationDelay: '0.2s'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fbbf24' }}>GDP</div>
            <div style={{ opacity: 0.9 }}>Tăng Trưởng Mạnh</div>
          </div>
          
          <div className="glass-card animate-float" style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animationDelay: '0.4s'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fbbf24' }}>ASEAN</div>
            <div style={{ opacity: 0.9 }}>Hội Nhập Sâu Rộng</div>
          </div>
          
          <div className="glass-card animate-float" style={{ 
            textAlign: 'center', 
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animationDelay: '0.6s'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fbbf24' }}>XHCN</div>
            <div style={{ opacity: 0.9 }}>Định Hướng Vững Chắc</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;