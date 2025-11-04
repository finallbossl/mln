import React from 'react';
import { FaStar, FaCheck, FaBullseye, FaTrophy } from 'react-icons/fa';

const Section3 = () => {
  return (
    <section id="dac-thu" className="section" style={{ 
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.6) 100%)',
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
            Tính Đặc Thù và Tính Tất Yếu Của Con Đường Phát Triển KTTT-ĐHXHCN
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            KTTT-ĐHXHCN ở Việt Nam không rập khuôn mô hình tư bản chủ nghĩa, mà mang những đặc điểm riêng phù hợp với điều kiện đất nước
          </p>
        </div>

        <div className="grid grid-cols-2" style={{ gap: '3rem', marginBottom: '3rem' }}>
          {/* Tính đặc thù */}
          <div className="glass-card animate-slideInLeft" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))',
            border: '2px solid rgba(102, 126, 234, 0.2)',
            animationDelay: '0.2s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <FaStar size={32} style={{ color: '#667eea', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#667eea' }}>
                Tính Đặc Thù
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaCheck size={20} style={{ color: '#667eea', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#667eea' }}>Đa dạng thành phần kinh tế</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Kinh tế nhà nước giữ vai trò chủ đạo trong các lĩnh vực then chốt (điện lực, dầu khí, tài chính-ngân hàng...).</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaCheck size={20} style={{ color: '#667eea', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#667eea' }}>Kinh tế tư nhân được thừa nhận</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Là động lực quan trọng của nền kinh tế, tạo việc làm, đóng góp ngân sách, nhưng hoạt động trong khuôn khổ pháp luật XHCN.</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaCheck size={20} style={{ color: '#667eea', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#667eea' }}>Nhà nước pháp quyền XHCN</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Giữ vai trò định hướng, điều tiết và phân phối lại thông qua thuế, đầu tư công, an sinh xã hội.</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaCheck size={20} style={{ color: '#667eea', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#667eea' }}>Phát triển kinh tế gắn với mục tiêu xã hội</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Công bằng, đoàn kết, phúc lợi nhân dân - đây chính là đặc thù "kép": vừa phát triển thị trường, vừa đảm bảo định hướng XHCN.</p>
              </div>
            </div>
          </div>

          {/* Tính tất yếu */}
          <div className="glass-card animate-slideInRight" style={{
            padding: '2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05))',
            border: '2px solid rgba(139, 92, 246, 0.2)',
            animationDelay: '0.4s'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
              <FaBullseye size={32} style={{ color: '#8b5cf6', marginRight: '1rem' }} />
              <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#8b5cf6' }}>
                Tính Tất Yếu
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaTrophy size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#8b5cf6' }}>Yêu cầu phát triển lực lượng sản xuất</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Sau chiến tranh, nền kinh tế lạc hậu, nông nghiệp chiếm tỉ trọng cao. Chỉ có thị trường mới huy động được nguồn lực xã hội.</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaTrophy size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#8b5cf6' }}>Yêu cầu hội nhập quốc tế</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Khi Việt Nam gia nhập WTO năm 2007, cơ chế thị trường trở thành điều kiện bắt buộc để tham gia chuỗi cung ứng toàn cầu.</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaTrophy size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#8b5cf6' }}>Yêu cầu bảo đảm định hướng XHCN</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Phát triển kinh tế phải đi đôi với ổn định chính trị, công bằng xã hội, phúc lợi nhân dân - phân biệt với các nước theo con đường tư bản.</p>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <FaTrophy size={20} style={{ color: '#8b5cf6', marginRight: '0.5rem' }} />
                  <strong style={{ color: '#8b5cf6' }}>Kết luận về tính tất yếu</strong>
                </div>
                <p style={{ color: '#1a365d', margin: 0 }}>Lựa chọn phát triển KTTT định hướng XHCN không phải là tạm thời, mà là con đường duy nhất đúng đắn và phù hợp.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dẫn chứng lịch sử */}
        <div className="glass-card animate-fadeInUp" style={{
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '3rem',
          borderRadius: '20px',
          border: '2px solid rgba(102, 126, 234, 0.3)',
          animationDelay: '0.6s',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            marginBottom: '2rem',
            color: '#1a365d',
            textAlign: 'center'
          }}>
            Dẫn Chứng Lịch Sử Cụ Thể Về Quá Trình Hiện Thực Hóa
          </h3>
          
          <div style={{
            overflowX: 'auto',
            borderRadius: '12px',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white'
            }}>
              <thead>
                <tr style={{ backgroundColor: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: '#667eea',
                    borderBottom: '2px solid rgba(102, 126, 234, 0.3)'
                  }}>Thời kỳ</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: '#667eea',
                    borderBottom: '2px solid rgba(102, 126, 234, 0.3)'
                  }}>Sự kiện & Chính sách</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'white',
                    backgroundColor: '#667eea',
                    borderBottom: '2px solid rgba(102, 126, 234, 0.3)'
                  }}>Kết quả thực tế</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'rgba(102, 126, 234, 0.05)' }}>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>1986 – Đại hội VI</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Khởi xướng đường lối Đổi Mới: chuyển từ cơ chế tập trung bao cấp sang cơ chế thị trường có quản lý.</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Khai thông sản xuất, lưu thông hàng hóa, khuyến khích tư nhân, cải thiện đời sống nhân dân.</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>1989</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Thực hiện chính sách "giá – lương – tiền", tự do hóa thương mại, xoá bao cấp.</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Việt Nam xuất khẩu gạo, lạm phát giảm mạnh, tăng trưởng GDP phục hồi.</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(102, 126, 234, 0.05)' }}>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>1992 – Hiến pháp mới</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Thừa nhận kinh tế tư nhân, mở rộng quyền kinh doanh.</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Hình thành tầng lớp doanh nhân trong nước.</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>2000 – Luật Doanh nghiệp</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Cải cách thủ tục, khuyến khích khởi nghiệp.</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Số lượng doanh nghiệp tăng nhanh, đóng góp lớn vào GDP.</td>
                </tr>
                <tr style={{ backgroundColor: 'rgba(102, 126, 234, 0.05)' }}>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>2007 – Gia nhập WTO</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>Cam kết tự do hóa thương mại, đầu tư, mở cửa thị trường.</td>
                  <td style={{
                    padding: '1rem',
                    borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
                    color: '#1a365d'
                  }}>FDI tăng mạnh, xuất khẩu bùng nổ, Việt Nam hội nhập sâu rộng.</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '1rem',
                    fontWeight: '600',
                    color: '#667eea'
                  }}>2013 – Hiến pháp mới</td>
                  <td style={{
                    padding: '1rem',
                    color: '#1a365d'
                  }}>Khẳng định "Kinh tế thị trường định hướng XHCN là mô hình tổng quát của nền kinh tế Việt Nam trong thời kỳ quá độ lên CNXH."</td>
                  <td style={{
                    padding: '1rem',
                    color: '#1a365d'
                  }}>Xác lập chính thức mô hình phát triển kinh tế hiện nay.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quote từ Cương lĩnh */}
       
      </div>
    </section>
  );
};

export default Section3;