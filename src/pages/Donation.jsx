import React, { useState, useEffect } from 'react';
import DonationJar from '../components/DonationJar';
import BankInfo from '../components/BankInfo';
import SupportersList from '../components/SupportersList';
import SchoolCard from '../components/SchoolCard';
import ThankYouModal from '../components/ThankYouModal';
import qrImage from '../assets/qr.jpg';

const DonatePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for general fund
  const [supporters, setSupporters] = useState([
    { id: 1, name: 'Nguyễn Văn Minh', content: 'Ủng hộ trồng cây xanh', amount: '500,000' },
    { id: 2, name: 'Trần Thị Hoa', content: 'Bảo vệ môi trường', amount: '200,000' },
    { id: 3, name: 'Lê Đức Nam', content: 'Chung tay vì tương lai xanh', amount: '1,000,000' },
    { id: 4, name: 'Phạm Thị Lan', content: 'Hỗ trợ cộng đồng', amount: '300,000' },
    { id: 5, name: 'Hoàng Văn Đức', content: 'Vì một hành tinh xanh', amount: '750,000' },
    { id: 6, name: 'Ngô Thị Mai', content: 'Ủng hộ dự án môi trường', amount: '150,000' },
  ]);

  // State for school donations
  const [donations, setDonations] = useState({
    1: { amount: 15750000, goal: 50000000 },
    2: { amount: 8920000, goal: 30000000 },
    3: { amount: 23450000, goal: 40000000 },
  });

  // State for animated counters
  const [animatedCounters, setAnimatedCounters] = useState({});

  // State for thank you modal
  const [showThankYou, setShowThankYou] = useState(false);
  const [donatedSchool, setDonatedSchool] = useState(null);
  const [donationType, setDonationType] = useState(null);

  // State for jar animation
  const [isJarShaking, setIsJarShaking] = useState(false);
  const [coins, setCoins] = useState([]);

  // Animation for school donation counters
  useEffect(() => {
    Object.keys(donations).forEach((id) => {
      const targetAmount = donations[id].amount;
      const duration = 2000;
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
        setAnimatedCounters((prev) => ({
          ...prev,
          [id]: Math.floor(currentValue),
        }));
      }, duration / steps);
      return () => clearInterval(timer);
    });
  }, [donations]);

  // General fund bank information
  const bankInfo = {
    bankName: 'Ngân hàng Vietcombank',
    accountNumber: '1234567890',
    accountName: 'NGUYEN VAN A',
    qrImage: qrImage,
  };

  // School data with bank information
  const blogPosts = [
    {
      id: 1,
      title: 'Trường Tiểu học Tân Hưng - Nơi ước mơ cần được thắp sáng',
      location: 'Tân Hưng, Long An',
      students: 245,
      date: '15/03/2024',
      excerpt:
        'Ngôi trường nhỏ nằm sâu trong vùng đồng bằng sông Cửu Long, nơi những em học sinh phải ngồi trên ghế gỗ mục nát, học dưới mái tôn thủng lỗ chỗ...',
      beforeImage:
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      afterImage:
        'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop',
      bankInfo: {
        bankName: 'Ngân hàng BIDV',
        accountNumber: '9876543210',
        accountName: 'TRUONG TIEU HOC TAN HUNG',
        qrImage: qrImage,
      },
    },
    {
      id: 2,
      title: 'Trường THCS Núi Thành - Vượt qua khó khăn vùng cao',
      location: 'Núi Thành, Quảng Nam',
      students: 180,
      date: '12/03/2024',
      excerpt:
        'Nằm trên sườn núi cao 800m so với mặt nước biển, trường THCS Núi Thành đang đối mặt với nhiều khó khăn về cơ sở vật chất...',
      beforeImage:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      afterImage:
        'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop',
      bankInfo: {
        bankName: 'Ngân hàng Techcombank',
        accountNumber: '4567891230',
        accountName: 'TRUONG THCS NUI THANH',
        qrImage: qrImage,
      },
    },
    {
      id: 3,
      title: 'Trường Tiểu học Cà Mau - Thách thức từ vùng đất mũi',
      location: 'Cà Mau',
      students: 320,
      date: '08/03/2024',
      excerpt:
        'Ở vùng đất mũi Cà Mau, trường Tiểu học Cà Mau đang phải đối mặt với tình trạng sạt lở nghiêm trọng, đe dọa việc học tập của các em...',
      beforeImage:
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/5/6/z65117755532510b972cef493e22bc56861b2942cd874c-17465135641601190783981.jpg',
      afterImage:
        'https://cdn.giaoducthoidai.vn/images/2558b157b0dd2fa70c3ca377b5c71b025a4fc666baf1cc51bb6c83b56c0c0051f411c57ea3903c02bc32036e690152ecbc63b4cc55323ef70a33248940d3c8/gdmn-ca-mau-3.jpg',
      bankInfo: {
        bankName: 'Ngân hàng Agribank',
        accountNumber: '3216549870',
        accountName: 'TRUONG TIEU HOC CA MAU',
        qrImage: qrImage,
      },
    },
  ];

  // Handle jar shake animation
  const shakeJar = () => {
    setIsJarShaking(true);

    // Generate falling coins
    const newCoins = [];
    for (let i = 0; i < 8; i++) {
      newCoins.push({
        id: Date.now() + i,
        left: Math.random() * 200 + 50,
        delay: Math.random() * 0.5,
      });
    }
    setCoins(newCoins);

    // Reset animation after 2 seconds
    setTimeout(() => {
      setIsJarShaking(false);
      setCoins([]);
    }, 2000);
  };

  // Handle donation
  const handleDonation = (type, id = null) => {
    if (type === 'general') {
      // Trigger jar animation
      shakeJar();

      // Add donation after animation starts
      setTimeout(() => {
        const newSupporter = {
          id: supporters.length + 1,
          name: 'Người ẩn danh',
          content: 'Ủng hộ quỹ chung',
          amount: '50,000',
        };
        setSupporters((prev) => [...prev, newSupporter]);
        setDonationType('general');
        setShowThankYou(true);
      }, 1000);
    } else if (type === 'school') {
      setDonations((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          amount: prev[id].amount + 50000,
        },
      }));
      const school = blogPosts.find((post) => post.id === id);
      setDonatedSchool(school);
      setDonationType('school');
      setShowThankYou(true);
    }
  };

  // Close thank you modal
  const closeThankYou = () => {
    setShowThankYou(false);
    setDonatedSchool(null);
    setDonationType(null);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  // Calculate progress
  const calculateProgress = (amount, goal) => {
    return Math.min((amount / goal) * 100, 100);
  };

  return (
    <div
      style={{
        fontFamily: '"Roboto", sans-serif',
        '--primary-color': '#01bbbf',
        '--text-dark': '#1d293d',
        '--text-light': '#62748e',
        '--extra-light': '#fafafa',
        '--white': '#ffffff',
        '--max-width': '1400px',
      }}
    >
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0); opacity: 1; }
            100% { transform: translateY(300px); opacity: 0; }
          }
          @keyframes wave {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-5px); }
          }
          @keyframes coinShine {
            from { background-color: #ffd700; }
            to { background-color: #ffed4a; }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px) rotate(-2deg); }
            75% { transform: translateX(5px) rotate(2deg); }
          }
          @keyframes slideInUp {
            from {
              transform: translateY(100px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          @media (max-width: 768px) {
            .general-fund-grid {
              grid-template-columns: 1fr !important;
            }
            .school-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: 'auto',
          padding: '6rem 1rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3
            style={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
            }}
          >
            Quyên góp
          </h3>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-dark)',
              marginBottom: '1.5rem',
            }}
          >
            Chung tay vì giáo dục và môi trường
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-light)',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Mỗi đóng góp của bạn sẽ giúp xây dựng một tương lai tươi sáng cho các em học sinh và bảo vệ môi trường.
          </p>
        </div>

        {/* General Fund Donation */}
        <div
          className="general-fund-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Donation Jar */}
          <div
            style={{
              backgroundColor: 'var(--white)',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              border: '2px solid rgba(1,187,191,0.1)',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}
            >
              Hũ Quyên Góp Chung
            </h3>
            <DonationJar supporters={supporters} isJarShaking={isJarShaking} coins={coins} />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                onClick={() => handleDonation('general')}
                style={{
                  padding: '1rem 2rem',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1.1rem',
                  fontFamily: '"Roboto", sans-serif',
                  color: 'var(--white)',
                  background: 'linear-gradient(135deg, #01bbbf 0%, #019da1 100%)',
                  borderRadius: '25px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(1,187,191,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 8px 25px rgba(1,187,191,0.4)';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = '0 5px 20px rgba(1,187,191,0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '20px' }}>🪙</span>
                Thả tiền vào hũ
                <span style={{ marginLeft: '8px' }}>→</span>
              </button>
            </div>
          </div>

          {/* Bank Information */}
          <BankInfo bankInfo={bankInfo} />

          {/* Supporters List */}
          <SupportersList supporters={supporters} />
        </div>

        {/* School Donations Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: 'var(--text-dark)',
              textAlign: 'center',
              marginBottom: '2rem',
            }}
          >
            Hỗ trợ các điểm trường học
          </h2>
          <div
            className="school-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '2rem',
            }}
          >
            {blogPosts.map((post) => (
              <SchoolCard
                key={post.id}
                post={post}
                donation={donations[post.id]}
                animatedCounter={animatedCounters[post.id]}
                formatCurrency={formatCurrency}
                calculateProgress={calculateProgress}
                handleDonation={handleDonation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <ThankYouModal
        showThankYou={showThankYou}
        donationType={donationType}
        donatedSchool={donatedSchool}
        closeThankYou={closeThankYou}
      />
    </div>
  );
};

export default DonatePage;