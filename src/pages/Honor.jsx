import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Honor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const [topDonors] = useState([
    {
      id: 1,
      name: "Lê Đức Nam",
      content: "Chung tay vì tương lai xanh",
      amount: "1,000,000",
      rank: 1,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      joinDate: "15/03/2025",
      totalDonations: 3
    },
    {
      id: 2,
      name: "Hoàng Văn Đức",
      content: "Vì một hành tinh xanh",
      amount: "750,000",
      rank: 2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      joinDate: "20/03/2025",
      totalDonations: 2
    },
    {
      id: 3,
      name: "Nguyễn Văn Minh",
      content: "Ủng hộ trồng cây xanh",
      amount: "500,000",
      rank: 3,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      joinDate: "10/03/2025",
      totalDonations: 4
    },
    {
      id: 4,
      name: "Phạm Thị Lan",
      content: "Hỗ trợ cộng đồng",
      amount: "300,000",
      rank: 4,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      joinDate: "25/03/2025",
      totalDonations: 1
    },
    {
      id: 5,
      name: "Trần Thị Hoa",
      content: "Bảo vệ môi trường",
      amount: "200,000",
      rank: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      joinDate: "12/03/2025",
      totalDonations: 2
    },
    {
      id: 6,
      name: "Ngô Thị Mai",
      content: "Ủng hộ dự án môi trường",
      amount: "150,000",
      rank: 6,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      joinDate: "30/03/2025",
      totalDonations: 1
    }
  ]);

  const navigate = useNavigate();

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return "🏆";
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return "#FFD700"; // Gold
      case 2: return "#C0C0C0"; // Silver
      case 3: return "#CD7F32"; // Bronze
      default: return "var(--primary-color)";
    }
  };

  const totalAmount = topDonors.reduce((sum, donor) =>
    sum + parseInt(donor.amount.replace(/,/g, '')), 0
  ).toLocaleString();

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
        padding: '6rem 2rem',
        backgroundColor: 'var(--extra-light)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{
            marginBottom: '1rem',
            fontSize: '2rem',
            fontWeight: '700',
            color: 'var(--primary-color)'
          }}>
            Bảng vinh danh
          </h3>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'var(--text-dark)',
            marginBottom: '1.5rem'
          }}>
            Những người đóng góp xuất sắc
          </h2>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--text-light)',
            lineHeight: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Chúng tôi xin chân thành cảm ơn những người đã có những đóng góp to lớn cho các dự án bảo vệ môi trường của chúng tôi.
          </p>
        </div>

        {/* Statistics Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <div style={{
            backgroundColor: 'var(--white)',
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            border: '3px solid #FFD700'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💰</div>
            <h4 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--primary-color)',
              margin: '0 0 0.5rem 0'
            }}>
              {totalAmount} VNĐ
            </h4>
            <p style={{
              margin: 0,
              color: 'var(--text-light)',
              fontSize: '1rem'
            }}>
              Tổng số tiền quyên góp
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--white)',
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            border: '3px solid #C0C0C0'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👥</div>
            <h4 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--primary-color)',
              margin: '0 0 0.5rem 0'
            }}>
              {topDonors.length}
            </h4>
            <p style={{
              margin: 0,
              color: 'var(--text-light)',
              fontSize: '1rem'
            }}>
              Nhà hảo tâm
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--white)',
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
            border: '3px solid #CD7F32'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌱</div>
            <h4 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--primary-color)',
              margin: '0 0 0.5rem 0'
            }}>
              {topDonors.reduce((sum, donor) => sum + donor.totalDonations, 0)}
            </h4>
            <p style={{
              margin: 0,
              color: 'var(--text-light)',
              fontSize: '1rem'
            }}>
              Lần đóng góp
            </p>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          gap: '2rem',
          marginBottom: '4rem',
          flexWrap: 'wrap'
        }}>
          {/* 2nd Place */}
          {topDonors[1] && (
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              border: '3px solid #C0C0C0',
              minWidth: '250px',
              transform: 'translateY(20px)'
            }}>
              <div style={{
                position: 'relative',
                marginBottom: '1rem'
              }}>
                <img
                  src={topDonors[1].avatar}
                  alt={topDonors[1].name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #C0C0C0'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: '#C0C0C0',
                  color: 'white',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: '800'
                }}>
                  2
                </div>
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                margin: '0 0 0.5rem 0'
              }}>
                {topDonors[1].name}
              </h4>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#C0C0C0',
                margin: '0 0 0.5rem 0'
              }}>
                {parseInt(topDonors[1].amount).toLocaleString()} đ
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-light)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{topDonors[1].content}"
              </p>
            </div>
          )}

          {/* 1st Place */}
          {topDonors[0] && (
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '2.5rem',
              borderRadius: '1rem',
              textAlign: 'center',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
              border: '4px solid #FFD700',
              minWidth: '280px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#FFD700',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: '700'
              }}>
                🏆
              </div>
              <div style={{
                position: 'relative',
                marginBottom: '1rem',
                marginTop: '1rem'
              }}>
                <img
                  src={topDonors[0].avatar}
                  alt={topDonors[0].name}
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '5px solid #FFD700'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: '#FFD700',
                  color: 'white',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '800'
                }}>
                  1
                </div>
              </div>
              <h4 style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: 'var(--text-dark)',
                margin: '0 0 0.5rem 0'
              }}>
                {topDonors[0].name}
              </h4>
              <p style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#FFD700',
                margin: '0 0 0.5rem 0'
              }}>
                {parseInt(topDonors[0].amount).toLocaleString()} đ
              </p>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text-light)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{topDonors[0].content}"
              </p>
            </div>
          )}

          {/* 3rd Place */}
          {topDonors[2] && (
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '2rem',
              borderRadius: '1rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              border: '3px solid #CD7F32',
              minWidth: '250px',
              transform: 'translateY(40px)'
            }}>
              <div style={{
                position: 'relative',
                marginBottom: '1rem'
              }}>
                <img
                  src={topDonors[2].avatar}
                  alt={topDonors[2].name}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #CD7F32'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '-10px',
                  backgroundColor: '#CD7F32',
                  color: 'white',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: '800'
                }}>
                  3
                </div>
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                margin: '0 0 0.5rem 0'
              }}>
                {topDonors[2].name}
              </h4>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                color: '#CD7F32',
                margin: '0 0 0.5rem 0'
              }}>
                {parseInt(topDonors[2].amount).toLocaleString()} đ
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-light)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                "{topDonors[2].content}"
              </p>
            </div>
          )}
        </div>

        {/* Complete Rankings Table */}
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              margin: 0
            }}>
              🏆 Bảng xếp hạng đầy đủ
            </h3>
          </div>

          <div style={{ padding: '2rem' }}>
            {topDonors.map((donor, index) => (
              <div
                key={donor.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '1.5rem',
                  marginBottom: index === topDonors.length - 1 ? 0 : '1rem',
                  backgroundColor: index < 3 ? '#f8fdfd' : 'var(--extra-light)',
                  borderRadius: '0.75rem',
                  border: index < 3 ? `2px solid ${getRankColor(donor.rank)}` : '2px solid transparent',
                  transition: '0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Rank */}
                <div style={{
                  minWidth: '60px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '0.25rem'
                  }}>
                    {getRankIcon(donor.rank)}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: getRankColor(donor.rank)
                  }}>
                    #{donor.rank}
                  </div>
                </div>

                {/* Avatar */}
                <div style={{ marginLeft: '1rem', marginRight: '1.5rem' }}>
                  <img
                    src={donor.avatar}
                    alt={donor.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: `3px solid ${getRankColor(donor.rank)}`
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    color: 'var(--text-dark)',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {donor.name}
                  </h4>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-light)',
                    margin: '0 0 0.25rem 0',
                    fontStyle: 'italic'
                  }}>
                    "{donor.content}"
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.85rem',
                    color: 'var(--text-light)'
                  }}>
                    <span>📅 {donor.joinDate}</span>
                    <span>🔢 {donor.totalDonations} lần đóng góp</span>
                  </div>
                </div>

                {/* Amount */}
                <div style={{
                  textAlign: 'right',
                  minWidth: '120px'
                }}>
                  <div style={{
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    color: getRankColor(donor.rank),
                    marginBottom: '0.25rem'
                  }}>
                    {parseInt(donor.amount.replace(/,/g, '')).toLocaleString()}
                  </div>
                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-light)'
                  }}>
                    VNĐ
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem',
          backgroundColor: 'var(--white)',
          borderRadius: '1rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--text-dark)',
            marginBottom: '1rem'
          }}>
            Bạn cũng có thể trở thành một phần của bảng vinh danh! 🌟
          </h4>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-light)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Hãy tham gia cùng chúng tôi để bảo vệ môi trường và xây dựng một tương lai xanh cho thế hệ mai sau.
          </p>
          <button style={{
            padding: '1rem 2rem',
            outline: 'none',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '1.1rem',
            fontFamily: '"Roboto", serif',
            color: 'var(--white)',
            backgroundColor: 'var(--primary-color)',
            borderRadius: '6rem',
            transition: '0.3s',
            cursor: 'pointer',
            fontWeight: '600'
          }}
          onClick={() => navigate('/donate')}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0px 8px 30px rgba(1, 187, 191, 0.4)';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            <span>💚</span>
            Quyên góp ngay
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Honor;