import React from 'react';
import { BookOpen, History, ArrowRight } from 'lucide-react';

const Section1 = () => {
  return (
    <section id="co-so" className="section" style={{ 
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '100px 0'
    }}>
      <div className="container">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '1rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Cơ Sở Lý Luận Về KTTT-ĐHXHCN
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Khái niệm, bản chất và cơ sở hình thành của mô hình KTTT-ĐHXHCN ở Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
          <div className="glass-card animate-slideInLeft" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            animationDelay: '0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <BookOpen size={32} style={{ color: '#667eea', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#667eea' }}>
                Khái Niệm và Bản Chất
              </h3>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Khái niệm:</strong> Nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, nhưng dưới sự quản lý của Nhà nước pháp quyền XHCN.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Bản chất:</strong> Không phải là kinh tế thị trường tư bản chủ nghĩa, vì dựa trên nhiều hình thức sở hữu, trong đó sở hữu công cộng giữ vai trò chủ đạo.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Mục tiêu:</strong> Hướng tới "dân giàu, nước mạnh, dân chủ, công bằng, văn minh" - hoạt động được định hướng phục vụ lợi ích xã hội.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <ArrowRight size={20} style={{ color: '#667eea', marginRight: '0.5rem' }} />
                <strong style={{ color: '#1a365d' }}>Kết luận quan trọng:</strong>
              </div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.6', color: '#1a365d' }}>
                <strong>Theo Giáo trình Kinh tế chính trị Mác-Lênin (2021):</strong> KTTT-ĐHXHCN là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của kinh tế thị trường, do Đảng Cộng sản Việt Nam lãnh đạo.
              </p>
            </div>
          </div>

          <div className="glass-card animate-slideInRight" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            animationDelay: '0.4s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <History size={32} style={{ color: '#764ba2', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#764ba2' }}>
                Cơ Sở Hình Thành
              </h3>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Chủ nghĩa Mác-Lênin:</strong> Khẳng định rằng trong thời kỳ quá độ lên CNXH, nền kinh tế còn tồn tại nhiều hình thức sở hữu, nhiều thành phần kinh tế.
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Tư tưởng Hồ Chí Minh:</strong> "Phát triển kinh tế nhiều thành phần là một tất yếu khách quan trong thời kỳ quá độ", đồng thời phải "đặt lợi ích của nhân dân lên hàng đầu".
              </p>
              <p style={{ marginBottom: '1rem', lineHeight: '1.7', color: '#1a365d' }}>
                <strong>Thực tiễn lịch sử Việt Nam:</strong> Sau 1975, mô hình kinh tế kế hoạch hóa tập trung bộc lộ nhiều hạn chế — trì trệ, khan hiếm hàng hóa, năng suất thấp.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(102, 126, 234, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <ArrowRight size={20} style={{ color: '#764ba2', marginRight: '0.5rem' }} />
                <strong style={{ color: '#1a365d' }}>Thành tựu 35+ năm:</strong>
              </div>
              <p style={{ fontStyle: 'italic', lineHeight: '1.6', color: '#1a365d' }}>
                Từ thực tế đó, Đảng đã khởi xướng Đổi Mới năm 1986, chuyển sang cơ chế thị trường có quản lý, mở đầu cho mô hình KTTT định hướng XHCN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;