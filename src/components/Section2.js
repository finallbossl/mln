import React from 'react';
import { FaBalanceScale, FaBolt, FaExclamationTriangle, FaCog } from 'react-icons/fa';

const Section2 = () => {
  return (
    <section id="moi-quan-he" className="section" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(241, 245, 249, 0.5) 100%)',
      backdropFilter: 'blur(20px)',
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
            Mối Quan Hệ Biện Chứng Giữa Phát Triển KTTT và Bảo Đảm Định Hướng XHCN
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Thống nhất biện chứng giữa hai mặt, vai trò điều tiết của Nhà nước XHCN và thực tiễn Việt Nam chứng minh
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
          {/* Tính thống nhất */}
          <div className="glass-card animate-fadeInUp" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(22, 163, 74, 0.05))',
            border: '2px solid rgba(34, 197, 94, 0.2)',
            animationDelay: '0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaBalanceScale size={32} style={{ color: '#16a34a', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#16a34a' }}>
                Thống Nhất Biện Chứng Giữa Hai Mặt
              </h3>
            </div>
            
            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#16a34a' }}>
                  Kinh Tế Thị Trường
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Kích thích cạnh tranh, đổi mới công nghệ, tăng năng suất</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Mở rộng sản xuất, tạo cơ sở vật chất cho CNXH</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Huy động nguồn lực xã hội, vốn, công nghệ</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#16a34a' }}>
                  Định Hướng XHCN
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Là mục tiêu, phương hướng của sự phát triển</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Bảo đảm công bằng, ổn định và phát triển bền vững</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FaBolt size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Bảo vệ các nhóm yếu thế, đảm bảo phúc lợi xã hội</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '1.5rem',
              borderRadius: '12px',
              marginTop: '1.5rem',
              textAlign: 'center',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              <strong style={{ color: '#16a34a', fontSize: '1.125rem' }}>
                ⚡ Phát triển kinh tế thị trường là <em>phương tiện</em>, định hướng xã hội chủ nghĩa là <em>mục tiêu</em> → Hai yếu tố vừa thống nhất, vừa đấu tranh trong một thể thống nhất biện chứng.
              </strong>
            </div>
          </div>

          {/* Tính mâu thuẫn */}
          <div className="glass-card animate-fadeInUp" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))',
            border: '2px solid rgba(239, 68, 68, 0.2)',
            animationDelay: '0.4s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaExclamationTriangle size={32} style={{ color: '#dc2626', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#dc2626' }}>
                Mâu Thuẫn và Cách Giải Quyết
              </h3>
            </div>
            
            <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#dc2626' }}>
                  Thách Thức Từ Thị Trường
                </h4>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem', color: '#1a365d' }}>
                  Nếu để thị trường tự do tuyệt đối, sẽ dẫn tới:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaExclamationTriangle size={16} style={{ color: '#dc2626', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Phân hóa giàu nghèo, bóc lột, và bất công</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaExclamationTriangle size={16} style={{ color: '#dc2626', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Tham nhũng, độc quyền, chênh lệch giàu nghèo</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FaExclamationTriangle size={16} style={{ color: '#dc2626', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Trái với bản chất của chủ nghĩa xã hội</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#16a34a' }}>
                  Yêu Cầu XHCN
                </h4>
                <p style={{ lineHeight: '1.7', marginBottom: '1rem', color: '#1a365d' }}>
                  Cần có Nhà nước XHCN điều tiết, định hướng:
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBalanceScale size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Bảo đảm công bằng, an sinh và phát triển bền vững</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <FaBalanceScale size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Hạn chế mặt trái của thị trường</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <FaBalanceScale size={16} style={{ color: '#16a34a', marginRight: '0.5rem', marginTop: '0.25rem' }} />
                    <span style={{ color: '#1a365d' }}>Bảo vệ các nhóm yếu thế, đảm bảo phúc lợi xã hội</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cách giải quyết */}
          <div className="glass-card animate-fadeInUp" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
            border: '2px solid rgba(102, 126, 234, 0.2)',
            animationDelay: '0.6s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <FaCog size={32} style={{ color: '#667eea', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#667eea' }}>
                Thực Tiễn Việt Nam Chứng Minh
              </h3>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.8)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Định hướng sản xuất</h4>
                <p style={{ color: '#1a365d', margin: 0 }}>Đầu tư theo chiến lược phát triển đất nước</p>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.8)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Hạn chế mặt trái</h4>
                <p style={{ color: '#1a365d', margin: 0 }}>Tham nhũng, độc quyền, chênh lệch giàu nghèo</p>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.8)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Bảo vệ nhóm yếu thế</h4>
                <p style={{ color: '#1a365d', margin: 0 }}>Đảm bảo phúc lợi xã hội, an ninh kinh tế</p>
              </div>
              
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.8)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Kết quả thực tiễn</h4>
                <p style={{ color: '#1a365d', margin: 0 }}>Tỷ lệ nghèo đa chiều giảm từ 70% (1990) xuống dưới 5% (2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;