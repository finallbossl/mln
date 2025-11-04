import React from 'react';
import { FaBook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#f2e6e0',
      color: 'white',
      padding: '3rem 0 1.5rem'
    }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ gap: '3rem', marginBottom: '2rem' }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem'
            }}>
              <FaBook size={32} style={{ color: '#fbbf24', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                Kinh Tế Thị Trường ĐHXHCN
              </h3>
            </div>
            
            <p style={{
              lineHeight: '1.7',
              opacity: 0.9,
              marginBottom: '1.5rem'
            }}>
             Nhóm: NewWind
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: '#2d5016',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem'
              }}>
                Kinh tế học
              </span>
              <span style={{
                backgroundColor: '#ea580c',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem'
              }}>
                Chính trị học
              </span>
              <span style={{
                backgroundColor: '#1e40af',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem'
              }}>
                Xã hội học
              </span>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#fbbf24'
            }}>
              Nội Dung Chính
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="#co-so" style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                transition: 'opacity 0.3s'
              }}>
                → Cơ sở lý luận Mác-Lênin và thực tiễn Đổi mới
              </a>
              <a href="#moi-quan-he" style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                transition: 'opacity 0.3s'
              }}>
                → Mối quan hệ biện chứng thị trường - XHCN
              </a>
              <a href="#dac-thu" style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                transition: 'opacity 0.3s'
              }}>
                → Tính đặc thù và tất yếu của mô hình VN
              </a>
              <a href="#ket-luan" style={{
                color: 'white',
                textDecoration: 'none',
                opacity: 0.9,
                transition: 'opacity 0.3s'
              }}>
                → Kết luận và thành tựu đạt được
              </a>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px'
            }}>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: '#fbbf24'
              }}>
                Tài liệu tham khảo
              </h5>
              <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                <div>• Cương lĩnh xây dựng đất nước (2011, bổ sung 2021)</div>
                <div>• Văn kiện Đại hội XIII của Đảng</div>
                <div>• Lý luận kinh tế chính trị Mác-Lênin</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;