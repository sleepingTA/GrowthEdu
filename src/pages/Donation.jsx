import React, { useState } from 'react';

const DonatePage = () => {
  // Danh sách người ủng hộ mẫu
  const [supporters] = useState([
    {
      id: 1,
      name: "Nguyễn Văn Minh",
      content: "Ủng hộ trồng cây xanh",
      amount: "500,000"
    },
    {
      id: 2,
      name: "Trần Thị Hoa",
      content: "Bảo vệ môi trường",
      amount: "200,000"
    },
    {
      id: 3,
      name: "Lê Đức Nam",
      content: "Chung tay vì tương lai xanh",
      amount: "1,000,000"
    },
    {
      id: 4,
      name: "Phạm Thị Lan",
      content: "Hỗ trợ cộng đồng",
      amount: "300,000"
    },
    {
      id: 5,
      name: "Hoàng Văn Đức",
      content: "Vì một hành tinh xanh",
      amount: "750,000"
    },
    {
      id: 6,
      name: "Ngô Thị Mai",
      content: "Ủng hộ dự án môi trường",
      amount: "150,000"
    }
  ]);

  const totalAmount = supporters.reduce((sum, supporter) => 
    sum + parseInt(supporter.amount.replace(/,/g, '')), 0
  ).toLocaleString();

  const bankInfo = {
    bankName: "Ngân hàng Vietcombank",
    accountNumber: "1234567890",
    accountName: "NGUYEN VAN A",
    qrImage: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmZmZmZiIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1 BIFFSPUQ8L3RleHQ+CiAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4="
  };

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
            Quyên góp
          </h3>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            color: 'var(--text-dark)',
            marginBottom: '1.5rem'
          }}>
            Hãy cùng chung tay góp sức cho môi trường
          </h2>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--text-light)',
            lineHeight: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Mỗi đóng góp của bạn đều có ý nghĩa quan trọng trong việc bảo vệ môi trường và xây dựng một tương lai xanh cho thế hệ mai sau.
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Bank Information */}
          <div style={{
            backgroundColor: 'var(--white)',
            padding: '2rem',
            borderRadius: '1rem',
            boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '2rem'
            }}>
              Thông tin chuyển khoản
            </h3>
            
            {/* QR Code */}
            <div style={{
              marginBottom: '2rem'
            }}>
              <img 
                src={bankInfo.qrImage}
                alt="QR Code"
                style={{
                  width: '200px',
                  height: '200px',
                  margin: '0 auto',
                  display: 'block',
                  border: '2px solid var(--extra-light)',
                  borderRadius: '0.5rem'
                }}
              />
            </div>

            {/* Bank Details */}
            <div style={{
              textAlign: 'left',
              backgroundColor: 'var(--extra-light)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Ngân hàng:</strong>
                <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>{bankInfo.bankName}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-dark)' }}>Số tài khoản:</strong>
                <p style={{ 
                  margin: '0.5rem 0', 
                  color: 'var(--primary-color)', 
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>{bankInfo.accountNumber}</p>
              </div>
              <div>
                <strong style={{ color: 'var(--text-dark)' }}>Chủ tài khoản:</strong>
                <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>{bankInfo.accountName}</p>
              </div>
            </div>

            <div style={{
              padding: '1rem',
              backgroundColor: '#e8f8f8',
              borderRadius: '0.5rem',
              border: '1px solid var(--primary-color)'
            }}>
              <p style={{
                margin: 0,
                fontSize: '0.9rem',
                color: 'var(--text-dark)',
                fontStyle: 'italic'
              }}>
                💡 Vui lòng ghi rõ họ tên và nội dung ủng hộ khi chuyển khoản
              </p>
            </div>
          </div>

          {/* Supporters List */}
          <div>
            <div style={{
              backgroundColor: 'var(--white)',
              padding: '2rem',
              borderRadius: '1rem',
              boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                paddingBottom: '1rem',
                borderBottom: '2px solid var(--extra-light)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'var(--text-dark)',
                  margin: 0
                }}>
                  Danh sách ủng hộ
                </h3>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'var(--white)',
                  padding: '0.5rem 1rem',
                  borderRadius: '2rem',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  {supporters.length} người ủng hộ
                </div>
              </div>

              {/* Total Amount */}
              <div style={{
                backgroundColor: '#f0fdfd',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                marginBottom: '2rem',
                textAlign: 'center',
                border: '2px solid var(--primary-color)'
              }}>
                <p style={{
                  margin: '0 0 0.5rem 0',
                  color: 'var(--text-light)',
                  fontSize: '1rem'
                }}>
                  Tổng số tiền đã quyên góp
                </p>
                <h4 style={{
                  margin: 0,
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'var(--primary-color)'
                }}>
                  {totalAmount} VNĐ
                </h4>
              </div>

              {/* Supporters Cards */}
              <div style={{
                maxHeight: '400px',
                overflowY: 'auto',
                paddingRight: '0.5rem'
              }}>
                {supporters.map((supporter) => (
                  <div
                    key={supporter.id}
                    style={{
                      backgroundColor: 'var(--extra-light)',
                      padding: '1.5rem',
                      borderRadius: '0.75rem',
                      marginBottom: '1rem',
                      transition: '0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = 'none';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <h5 style={{
                        margin: 0,
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--text-dark)'
                      }}>
                        {supporter.name}
                      </h5>
                      <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: 'var(--primary-color)'
                      }}>
                        {supporter.amount.toLocaleString()} đ
                      </span>
                    </div>
                    <p style={{
                      margin: 0,
                      fontSize: '0.95rem',
                      color: 'var(--text-light)',
                      fontStyle: 'italic'
                    }}>
                      "{supporter.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div style={{
              textAlign: 'center',
              marginTop: '2rem'
            }}>
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
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0px 6px 25px rgba(0, 0, 0, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
                e.target.style.transform = 'translateY(0)';
              }}
              >
                <span>❤️</span>
                Quyên góp ngay
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'var(--extra-light)',
          borderRadius: '1rem'
        }}>
          <h4 style={{
            marginBottom: '1rem',
            fontSize: '1.3rem',
            fontWeight: '600',
            color: 'var(--text-dark)'
          }}>
            Cảm ơn sự đóng góp của bạn! 🙏
          </h4>
          <p style={{
            margin: 0,
            fontSize: '1rem',
            color: 'var(--text-light)',
            lineHeight: '1.6'
          }}>
            Mỗi khoản đóng góp của bạn sẽ được sử dụng một cách minh bạch và hiệu quả nhất 
            để bảo vệ môi trường và tạo ra những thay đổi tích cực cho cộng đồng.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;