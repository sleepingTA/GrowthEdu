import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Users, Calendar, Target, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // State cho việc quản lý donations
  const [donations, setDonations] = useState({
    1: { amount: 15750000, goal: 50000000 },
    2: { amount: 8920000, goal: 30000000 },
    3: { amount: 23450000, goal: 40000000 }
  });

  // State cho animation counter
  const [animatedCounters, setAnimatedCounters] = useState({});

  // Animation counter effect
  useEffect(() => {
    Object.keys(donations).forEach(id => {
      const targetAmount = donations[id].amount;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = targetAmount / steps;
      let currentValue = 0;
      let step = 0;

      const timer = setInterval(() => {
        currentValue += stepValue;
        step++;
        
        if (step >= steps) {
          currentValue = targetAmount;
          clearInterval(timer);
        }

        setAnimatedCounters(prev => ({
          ...prev,
          [id]: Math.floor(currentValue)
        }));
      }, duration / steps);
    });
  }, [donations]);

  // Xử lý donation
  const handleDonation = (schoolId) => {
    setDonations(prev => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        amount: prev[schoolId].amount + 50000
      }
    }));
  };

  // Format tiền tệ
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  // Tính phần trăm hoàn thành
  const calculateProgress = (amount, goal) => {
    return Math.min((amount / goal) * 100, 100);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Trường Tiểu học Tân Hưng - Nơi ước mơ cần được thắp sáng",
      location: "Tân Hưng, Long An",
      students: 245,
      date: "15/03/2024",
      excerpt: "Ngôi trường nhỏ nằm sâu trong vùng đồng bằng sông Cửu Long, nơi những em học sinh phải ngồi trên ghế gỗ mục nát, học dưới mái tôn thủng lỗ chỗ...",
      content: "Khi bước chân vào trường Tiểu học Tân Hưng, điều đầu tiên khiến tôi xúc động là ánh mắt khát khao học hỏi của các em nhỏ. Dù ngồi trên những chiếc ghế gỗ đã mục nát, dù phải che ô khi trời mưa vì mái tôn thủng lỗ chỗ, các em vẫn chăm chú nghe giảng.\n\nCô Lan, hiệu trưởng nhà trường chia sẻ: 'Chúng tôi đã cố gắng hết sức để duy trì việc dạy học, nhưng cơ sở vật chất quá xuống cấp. Mỗi lần mưa to, chúng tôi phải cho học sinh nghỉ học vì nước tràn vào lớp.'\n\nTrường hiện có 245 học sinh từ 12 xã vùng sâu, vùng xa. Nhiều em phải đi bộ hơn 5km mới đến trường. Ước mơ của các em rất đơn giản: có một ngôi trường khang trang, có đủ bàn ghế để học tập.",
      beforeImage: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      updates: [
        { date: "10/03/2024", content: "Đã hoàn thành khảo sát hiện trạng trường học" },
        { date: "20/03/2024", content: "Bắt đầu thu gom vật liệu xây dựng" },
        { date: "25/03/2024", content: "Hoàn thành 15% mục tiêu quyên góp" }
      ]
    },
    {
      id: 2,
      title: "Trường THCS Núi Thành - Vượt qua khó khăn vùng cao",
      location: "Núi Thành, Quảng Nam",
      students: 180,
      date: "12/03/2024",
      excerpt: "Nằm trên sườn núi cao 800m so với mặt nước biển, trường THCS Núi Thành đang đối mặt với nhiều khó khăn về cơ sở vật chất...",
      content: "Đường lên trường THCS Núi Thành quanh co, dốc đứng, đầy khó khăn. Nhưng khó khăn nhất chính là cảnh tượng những em học sinh người dân tộc thiểu số phải học trong những lớp học tạm bợ.\n\nThầy Minh, giáo viên dạy Toán kể: 'Mỗi khi gió mùa về, chúng tôi phải dùng dây thừng buộc chặt các tấm tôn để tránh bị thổi bay. Học sinh phải mặc áo ấm ngay cả khi ngồi trong lớp.'\n\nTrường có 180 học sinh đến từ 8 bản làng khác nhau. Đa số các em là con em đồng bào dân tộc Cơ Tu, sống chủ yếu bằng nghề nông. Ước mơ của các em là có một ngôi trường kiên cố để không phải lo lắng về mưa bão.",
      beforeImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      updates: [
        { date: "08/03/2024", content: "Đoàn khảo sát đã lên thăm trường" },
        { date: "15/03/2024", content: "Đã liên hệ với nhà thầu địa phương" },
        { date: "22/03/2024", content: "Đạt 30% mục tiêu quyên góp" }
      ]
    },
    {
      id: 3,
      title: "Trường Tiểu học Cà Mau - Thách thức từ vùng đất mũi",
      location: "Cà Mau",
      students: 320,
      date: "08/03/2024",
      excerpt: "Ở vùng đất mũi Ca Mau, trường Tiểu học Cà Mau đang phải đối mặt với tình trạng sạt lở nghiêm trọng, đe dọa việc học tập của các em...",
      content: "Trường Tiểu học Cà Mau nằm ở vùng đất mũi, nơi chịu tác động mạnh mẽ của biến đổi khí hậu. Sạt lở đã 'nuốt' mất gần một nửa sân trường, khiến việc học tập của 320 em học sinh gặp nhiều khó khăn.\n\nCô Hương, giáo viên lớp 3 lo lắng: 'Mỗi lần thủy triều lên cao, chúng tôi đều phải di chuyển bàn ghế ra xa bờ. Có hôm nước tràn vào tận lớp học, các em phải đứng trên ghế để tiếp tục học bài.'\n\nĐây là ngôi trường duy nhất trong vùng, phục vụ học sinh từ 5 ấp xa. Nếu không có sự hỗ trợ kịp thời, ngôi trường có thể sẽ bị biển 'nuốt chửng' hoàn toàn trong vòng 2-3 năm tới.",
      beforeImage: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      updates: [
        { date: "05/03/2024", content: "Đánh giá tình hình sạt lở" },
        { date: "12/03/2024", content: "Lên kế hoạch gia cố bờ kè" },
        { date: "18/03/2024", content: "Đạt 58% mục tiêu quyên góp" }
      ]
    }
  ];

  return (
    <div style={{ 
      fontFamily: '"Roboto", serif',
      backgroundColor: 'var(--extra-light, #fafafa)',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--white, #ffffff)' }}>
        <div className="section__container" style={{ paddingBlock: '4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div className="section__subheader">Câu chuyện cảm động</div>
            <h1 className="section__header" style={{ marginBottom: '1rem' }}>
              Hành trình thắp sáng ước mơ
            </h1>
            <p className="section__description">
              Những câu chuyện thật về các em học sinh vùng khó khăn và hành trình đồng hành của chúng ta
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section style={{ backgroundColor: 'var(--extra-light, #fafafa)' }}>
        <div className="section__container">
          <div className="blog__grid" style={{ 
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '1fr',
            marginBlock: '2rem'
          }}>
            {blogPosts.map((post) => (
              <article key={post.id} className="blog__card" style={{
                backgroundColor: 'var(--white, #ffffff)',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                {/* Post Header */}
                <div className="blog__content" style={{ padding: '2rem' }}>
                  {/* Meta Information */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '1rem', 
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-light, #62748e)'
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={16} />
                      {post.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Users size={16} />
                      {post.students} học sinh
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Calendar size={16} />
                      {post.date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 style={{ 
                    marginBottom: '1.5rem',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    color: 'var(--text-dark, #1d293d)',
                    lineHeight: '1.4'
                  }}>
                    {post.title}
                  </h4>
                  
                  {/* Excerpt */}
                  <p style={{ 
                    color: 'var(--text-light, #62748e)',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    marginBottom: '2rem'
                  }}>
                    {post.excerpt}
                  </p>

                  {/* Before/After Images */}
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                  }}>
                    <div>
                      <h5 style={{ 
                        fontWeight: '600',
                        color: 'var(--text-dark, #1d293d)',
                        marginBottom: '0.5rem',
                        fontSize: '1rem'
                      }}>
                        Hiện tại
                      </h5>
                      <img 
                        src={post.beforeImage} 
                        alt="Trước khi hỗ trợ"
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                    </div>
                    <div>
                      <h5 style={{ 
                        fontWeight: '600',
                        color: 'var(--text-dark, #1d293d)',
                        marginBottom: '0.5rem',
                        fontSize: '1rem'
                      }}>
                        Mục tiêu
                      </h5>
                      <img 
                        src={post.afterImage} 
                        alt="Sau khi hỗ trợ"
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                          opacity: '0.8'
                        }}
                      />
                    </div>
                  </div>

                  {/* Story Content */}
                  <div style={{ marginBottom: '2rem' }}>
                    {post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} style={{ 
                        color: 'var(--text-light, #62748e)',
                        lineHeight: '1.8',
                        marginBottom: '1rem',
                        fontSize: '1rem'
                      }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Progress Section */}
                  <div style={{
                    background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    marginBottom: '2rem',
                    border: '1px solid #e0e7ff'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '1.5rem'
                    }}>
                      <h3 style={{ 
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: 'var(--text-dark, #1d293d)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Target size={20} style={{ color: 'var(--primary-color, #01bbbf)' }} />
                        Tiến độ quyên góp
                      </h3>
                      <span style={{ 
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: '#10b981'
                      }}>
                        {calculateProgress(donations[post.id].amount, donations[post.id].goal).toFixed(1)}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{
                        height: '12px',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '6px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          height: '100%',
                          background: 'linear-gradient(90deg, var(--primary-color, #01bbbf) 0%, #10b981 100%)',
                          borderRadius: '6px',
                          width: `${calculateProgress(donations[post.id].amount, donations[post.id].goal)}%`,
                          transition: 'width 1s ease-out'
                        }} />
                      </div>
                    </div>
                    
                    {/* Amount Counter */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '2rem'
                    }}>
                      <div>
                        <p style={{ 
                          fontSize: '0.9rem',
                          color: 'var(--text-light, #62748e)',
                          marginBottom: '0.25rem'
                        }}>
                          Đã quyên góp
                        </p>
                        <p style={{ 
                          fontSize: '1.5rem',
                          fontWeight: '800',
                          color: 'var(--primary-color, #01bbbf)'
                        }}>
                          {formatCurrency(animatedCounters[post.id] || 0)}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ 
                          fontSize: '0.9rem',
                          color: 'var(--text-light, #62748e)',
                          marginBottom: '0.25rem'
                        }}>
                          Mục tiêu
                        </p>
                        <p style={{ 
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: 'var(--text-dark, #1d293d)'
                        }}>
                          {formatCurrency(donations[post.id].goal)}
                        </p>
                      </div>
                    </div>

                    {/* Donation Button */}
                    <button
                      onClick={() => handleDonation(post.id)}
                      className="btn"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
                        border: 'none',
                        borderRadius: '3rem',
                        padding: '1rem 2rem',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: 'var(--white, #ffffff)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
                      }}
                    >
                      <Heart size={20} />
                      Góp 50,000đ cho trường này
                    </button>
                  </div>

                  {/* Updates Timeline */}
                  <div>
                    <h3 style={{ 
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: 'var(--text-dark, #1d293d)',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <TrendingUp size={20} style={{ color: '#10b981' }} />
                      Cập nhật tiến độ
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {post.updates.map((update, index) => (
                        <div key={index} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '1rem',
                          padding: '1rem',
                          backgroundColor: 'var(--extra-light, #fafafa)',
                          borderRadius: '0.5rem',
                          border: '1px solid #e5e7eb'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#10b981',
                            borderRadius: '50%',
                            marginTop: '0.5rem',
                            flexShrink: 0
                          }}></div>
                          <div>
                            <p style={{ 
                              fontWeight: '600',
                              color: 'var(--text-dark, #1d293d)',
                              marginBottom: '0.25rem'
                            }}>
                              {update.content}
                            </p>
                            <p style={{ 
                              fontSize: '0.9rem',
                              color: 'var(--text-light, #62748e)'
                            }}>
                              {update.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            background: 'linear-gradient(135deg, var(--primary-color, #01bbbf) 0%, #3b82f6 100%)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            textAlign: 'center',
            color: 'var(--white, #ffffff)',
            marginTop: '3rem'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: '800',
              marginBottom: '1rem',
              color: 'var(--white, #ffffff)'
            }}>
              Cùng thắp sáng ước mơ của các em
            </h2>
            <p style={{ 
              fontSize: '1.2rem',
              marginBottom: '2rem',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Mỗi đóng góp nhỏ của bạn sẽ tạo nên những thay đổi lớn trong cuộc sống của các em học sinh
            </p>
            <button className="btn" style={{
              backgroundColor: 'var(--white, #ffffff)',
              color: 'var(--primary-color, #01bbbf)',
              fontWeight: '700',
              fontSize: '1.1rem',
              padding: '1rem 2rem',
              borderRadius: '3rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Tìm hiểu thêm các dự án khác
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;