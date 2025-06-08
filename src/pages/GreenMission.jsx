import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const GreenMission = () => {
  const { id } = useParams();

  const [missions] = useState([
    {
      id: 1,
      type: "Trồng cây xanh",
      title: "Trồng cây tại Công viên Tao Đàn",
      location: "Công viên Tao Đàn, Quận 1, TP.HCM",
      date: "15/06/2025",
      time: "07:00 - 11:00",
      volunteers: "0/20",
      contact: {
        name: "Nguyễn Văn Minh",
        phone: "0123 456 789",
        email: "minh.nguyen@greenvn.org"
      },
      description: "Tham gia trồng 50 cây xanh tại khu vực công viên, góp phần tạo không gian xanh cho thành phố.",
      requirements: "Mang theo chai nước, khăn lau và tinh thần nhiệt huyết"
    },
    {
      id: 2,
      type: "Tái chế rác thải",
      title: "Phân loại rác thải tại Trường THPT Nguyễn Du",
      location: "Trường THPT Nguyễn Du, Quận 3, TP.HCM",
      date: "18/06/2025",
      time: "14:00 - 17:00",
      volunteers: "5/15",
      contact: {
        name: "Trần Thị Hoa",
        phone: "0987 654 321",
        email: "hoa.tran@school.edu.vn"
      },
      description: "Hướng dẫn học sinh phân loại rác thải đúng cách và tái chế các vật liệu có thể tái sử dụng.",
      requirements: "Có kinh nghiệm về phân loại rác thải hoặc tham gia khóa đào tạo trực tuyến"
    },
    {
      id: 3,
      type: "Vệ sinh trường học",
      title: "Dọn dẹp khuôn viên Trường Tiểu học Trần Hưng Đạo",
      location: "Trường TH Trần Hưng Đạo, Quận 5, TP.HCM",
      date: "20/06/2025",
      time: "08:00 - 12:00",
      volunteers: "12/30",
      contact: {
        name: "Lê Đức Nam",
        phone: "0369 147 258",
        email: "nam.le@thd-school.edu.vn"
      },
      description: "Tổng vệ sinh khuôn viên trường, làm sạch sân chơi và trồng thêm cây xanh trong khuôn viên.",
      requirements: "Mang theo găng tay, khẩu trang và dụng cụ vệ sinh cá nhân"
    },
    {
      id: 4,
      type: "Giáo dục môi trường",
      title: "Talkshow về bảo vệ môi trường tại Đại học Khoa học Tự nhiên",
      location: "ĐH Khoa học Tự nhiên, Quận Thủ Đức, TP.HCM",
      date: "22/06/2025",
      time: "19:00 - 21:00",
      volunteers: "3/10",
      contact: {
        name: "Phạm Thị Lan",
        phone: "0456 789 123",
        email: "lan.pham@hcmus.edu.vn"
      },
      description: "Diễn thuyết và trao đổi với sinh viên về các vấn đề môi trường và giải pháp bền vững.",
      requirements: "Có kiến thức về môi trường hoặc kinh nghiệm thuyết trình trước đám đông"
    },
    {
      id: 5,
      type: "Trồng cây xanh",
      title: "Trồng rừng tại Khu du lịch Cần Giờ",
      location: "Khu du lịch sinh thái Cần Giờ, TP.HCM",
      date: "25/06/2025",
      time: "06:00 - 16:00",
      volunteers: "8/25",
      contact: {
        name: "Hoàng Văn Đức",
        phone: "0741 852 963",
        email: "duc.hoang@cangio-tourism.vn"
      },
      description: "Tham gia trồng rừng ngập mặn, bảo vệ hệ sinh thái ven biển và chống xói mòn.",
      requirements: "Sức khỏe tốt, có thể di chuyển bằng thuyền và làm việc ngoài trời cả ngày"
    },
    {
      id: 6,
      type: "Tái chế rác thải",
      title: "Workshop tái chế đồ thủ công tại Nhà Văn hóa Quận 7",
      location: "Nhà Văn hóa Quận 7, TP.HCM",
      date: "28/06/2025",
      time: "09:00 - 15:00",
      volunteers: "15/20",
      contact: {
        name: "Ngô Thị Mai",
        phone: "0852 963 741",
        email: "mai.ngo@q7culture.gov.vn"
      },
      description: "Hướng dẫn người dân tái chế rác thải thành các sản phẩm thủ công hữu ích.",
      requirements: "Có kỹ năng thủ công hoặc kinh nghiệm làm đồ tái chế"
    }
  ]);

  const missionTypes = ["Tất cả", "Trồng cây xanh", "Tái chế rác thải", "Vệ sinh trường học", "Giáo dục môi trường"];
  const [selectedType, setSelectedType] = useState("Tất cả");

  const getTypeColor = (type) => {
    const colors = {
      "Trồng cây xanh": "#4CAF50",
      "Tái chế rác thải": "#2196F3", 
      "Vệ sinh trường học": "#FF9800",
      "Giáo dục môi trường": "#9C27B0"
    };
    return colors[type] || "#01bbbf";
  };

  const getVolunteerStatus = (volunteers) => {
    const [current, total] = volunteers.split('/').map(Number);
    const percentage = (current / total) * 100;
    if (percentage >= 80) return { status: "Sắp đầy", color: "#FF5722" };
    if (percentage >= 50) return { status: "Đang tuyển", color: "#FF9800" };
    return { status: "Cần nhiều người", color: "#4CAF50" };
  };

  // Nếu có id trên URL, chỉ lấy mission đó
  const selectedMission = id ? missions.find(m => m.id === Number(id)) : null;

  // Nếu không có id, lọc theo loại như cũ
  const filteredMissions = selectedType === "Tất cả" 
    ? missions 
    : missions.filter(mission => mission.type === selectedType);

  // Tổng số tình nguyện viên
  const totalVolunteers = missions.reduce((total, mission) => {
    const [current] = mission.volunteers.split('/');
    return total + parseInt(current);
  }, 0);

  // Render chi tiết 1 mission nếu có id
  if (selectedMission) {
    const volunteerInfo = getVolunteerStatus(selectedMission.volunteers);
    return (
      <div style={{
        fontFamily: '"Roboto", serif',
        '--primary-color': '#01bbbf',
        '--text-dark': '#1d293d',
        '--text-light': '#62748e',
        '--extra-light': '#fafafa',
        '--white': '#ffffff',
        '--max-width': '1400px'
      }}>
        <section style={{
          maxWidth: 'var(--max-width)',
          margin: 'auto',
          padding: '6rem 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--primary-color)'
            }}>
              {selectedMission.type}
            </h3>
            <h2 style={{
              fontSize: '2.2rem',
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '1.5rem'
            }}>
              {selectedMission.title}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: '500',
              color: 'var(--text-light)',
              lineHeight: '2rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {selectedMission.description}
            </p>
          </div>
          <div style={{
            backgroundColor: 'var(--white)',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
            maxWidth: 600,
            margin: '0 auto'
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                backgroundColor: getTypeColor(selectedMission.type),
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {selectedMission.type}
              </span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Địa điểm:</strong> {selectedMission.location}
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong>Thời gian:</strong> {selectedMission.date} ({selectedMission.time})
            </div>
            <div style={{
              marginBottom: '1rem',
              backgroundColor: '#f8f9fa',
              padding: '1rem',
              borderRadius: '0.75rem'
            }}>
              <strong>Tình nguyện viên:</strong> {selectedMission.volunteers}
              <span style={{
                marginLeft: 12,
                backgroundColor: volunteerInfo.color,
                color: 'white',
                padding: '0.3rem 1rem',
                borderRadius: '1.5rem',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {volunteerInfo.status}
              </span>
            </div>
            <div style={{
              backgroundColor: '#fff3cd',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              border: '1px solid #ffeaa7'
            }}>
              <strong>💡 Yêu cầu:</strong> {selectedMission.requirements}
            </div>
            <div style={{
              backgroundColor: 'var(--extra-light)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <h5 style={{
                margin: '0 0 1rem 0',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--text-dark)'
              }}>
                📞 Thông tin liên hệ
              </h5>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Người phụ trách:</strong>
                <span style={{ marginLeft: '0.5rem', color: 'var(--text-light)' }}>
                  {selectedMission.contact.name}
                </span>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Điện thoại:</strong>
                <span style={{ 
                  marginLeft: '0.5rem', 
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  {selectedMission.contact.phone}
                </span>
              </div>
              <div>
                <strong style={{ color: 'var(--text-dark)' }}>Email:</strong>
                <span style={{ 
                  marginLeft: '0.5rem', 
                  color: 'var(--primary-color)',
                  fontWeight: '600'
                }}>
                  {selectedMission.contact.email}
                </span>
              </div>
            </div>
            <button style={{
              width: '100%',
              padding: '1rem',
              border: 'none',
              backgroundColor: 'var(--primary-color)',
              color: 'var(--white)',
              borderRadius: '0.75rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: '0.3s',
              fontFamily: '"Roboto", serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#019a9d';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--primary-color)';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              📝 Đăng ký tham gia
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Nếu không có id, render danh sách như cũ
  return (
    <div style={{
      fontFamily: '"Roboto", serif',
      '--primary-color': '#01bbbf',
      '--text-dark': '#1d293d',
      '--text-light': '#62748e',
      '--extra-light': '#fafafa',
      '--white': '#ffffff',
      '--max-width': '1400px'
    }}>
      {/* Header Section */}
      <section style={{
        maxWidth: 'var(--max-width)',
        margin: 'auto',
        padding: '6rem 2rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{
            marginBottom: '1rem',
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-color)'
          }}>
            Nhiệm vụ xanh
          </h3>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'var(--text-dark)',
            marginBottom: '1.5rem'
          }}>
            Hãy cùng thực hiện những "nhiệm vụ" vì môi trường
          </h2>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--text-light)',
            lineHeight: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Tham gia các hoạt động tình nguyện bảo vệ môi trường tại các địa điểm trong thành phố. 
            Mỗi đóng góp nhỏ của bạn sẽ tạo nên sự thay đổi lớn cho cộng đồng.
          </p>
        </div>

        {/* Statistics and Filter */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {/* Statistics */}
          <div style={{
            backgroundColor: 'var(--white)',
            padding: '1.5rem 2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <h4 style={{
              margin: '0 0 0.5rem 0',
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--primary-color)'
            }}>
              {totalVolunteers}
            </h4>
            <p style={{
              margin: 0,
              color: 'var(--text-light)',
              fontSize: '1rem'
            }}>
              Tình nguyện viên đã đăng ký
            </p>
          </div>

          {/* Filter */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            {missionTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: selectedType === type ? '2px solid var(--primary-color)' : '2px solid transparent',
                  backgroundColor: selectedType === type ? 'var(--primary-color)' : 'var(--white)',
                  color: selectedType === type ? 'var(--white)' : 'var(--text-dark)',
                  borderRadius: '2rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  transition: '0.3s',
                  fontFamily: '"Roboto", serif'
                }}
                onMouseEnter={(e) => {
                  if (selectedType !== type) {
                    e.target.style.backgroundColor = 'var(--extra-light)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedType !== type) {
                    e.target.style.backgroundColor = 'var(--white)';
                  }
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Missions Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {filteredMissions.map((mission) => {
            const volunteerInfo = getVolunteerStatus(mission.volunteers);
            
            return (
              <div
                key={mission.id}
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
                  transition: '0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Type Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: getTypeColor(mission.type),
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '1.5rem',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  {mission.type}
                </div>

                {/* Mission Header */}
                <div style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {mission.title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--text-light)',
                    fontSize: '0.95rem'
                  }}>
                    📍 {mission.location}
                  </p>
                </div>

                {/* Date and Time */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    backgroundColor: 'var(--extra-light)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-dark)'
                  }}>
                    📅 {mission.date}
                  </div>
                  <div style={{
                    backgroundColor: 'var(--extra-light)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-dark)'
                  }}>
                    ⏰ {mission.time}
                  </div>
                </div>

                {/* Volunteers Status */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '0.75rem'
                }}>
                  <div>
                    <p style={{
                      margin: '0 0 0.25rem 0',
                      fontSize: '0.9rem',
                      color: 'var(--text-light)'
                    }}>
                      Tình nguyện viên
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '1.2rem',
                      fontWeight: '700',
                      color: 'var(--text-dark)'
                    }}>
                      {mission.volunteers}
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: volunteerInfo.color,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '1.5rem',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {volunteerInfo.status}
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-light)',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {mission.description}
                </p>

                {/* Requirements */}
                <div style={{
                  backgroundColor: '#fff3cd',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem',
                  border: '1px solid #ffeaa7'
                }}>
                  <p style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#856404'
                  }}>
                    💡 Yêu cầu:
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '0.9rem',
                    color: '#856404'
                  }}>
                    {mission.requirements}
                  </p>
                </div>

                {/* Contact Info */}
                <div style={{
                  backgroundColor: 'var(--extra-light)',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <h5 style={{
                    margin: '0 0 1rem 0',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)'
                  }}>
                    📞 Thông tin liên hệ
                  </h5>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Người phụ trách:</strong>
                    <span style={{ marginLeft: '0.5rem', color: 'var(--text-light)' }}>
                      {mission.contact.name}
                    </span>
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Điện thoại:</strong>
                    <span style={{ 
                      marginLeft: '0.5rem', 
                      color: 'var(--primary-color)',
                      fontWeight: '600'
                    }}>
                      {mission.contact.phone}
                    </span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--text-dark)' }}>Email:</strong>
                    <span style={{ 
                      marginLeft: '0.5rem', 
                      color: 'var(--primary-color)',
                      fontWeight: '600'
                    }}>
                      {mission.contact.email}
                    </span>
                  </div>
                </div>

                {/* Register Button */}
                <button style={{
                  width: '100%',
                  padding: '1rem',
                  border: 'none',
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: '0.3s',
                  fontFamily: '"Roboto", serif'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#019a9d';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'var(--primary-color)';
                  e.target.style.transform = 'translateY(0)';
                }}
                >
                  📝 Đăng ký tham gia
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          backgroundColor: 'var(--extra-light)',
          borderRadius: '1rem'
        }}>
          <h4 style={{
            marginBottom: '1rem',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-dark)'
          }}>
            Không tìm thấy nhiệm vụ phù hợp? 🤔
          </h4>
          <p style={{
            marginBottom: '2rem',
            fontSize: '1rem',
            color: 'var(--text-light)',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Hãy liên hệ với chúng tôi để đề xuất hoạt động mới hoặc tạo nhóm tình nguyện riêng cho khu vực của bạn!
          </p>
          <button style={{
            padding: '1rem 2rem',
            border: '2px solid var(--primary-color)',
            backgroundColor: 'var(--white)',
            color: 'var(--primary-color)',
            borderRadius: '2rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: '0.3s',
            fontFamily: '"Roboto", serif'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--primary-color)';
            e.target.style.color = 'var(--white)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--white)';
            e.target.style.color = 'var(--primary-color)';
          }}
          >
            💬 Liên hệ đề xuất hoạt động
          </button>
        </div>
      </section>
    </div>
  );
};

export default GreenMission;