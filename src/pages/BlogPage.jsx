import React, { useState, useEffect } from 'react';
import BlogPost from '../components/Blog/BlogPost';
import BlogCard from '../components/Blog/BlogCard';
import ThankYouModal from '../components/ThankYouModal';
import CallToAction from '../components/GreenMission/CallToAction';

const BlogPage = () => {
  const [donations, setDonations] = useState({
    1: { amount: 15750000, goal: 50000000 },
    2: { amount: 8920000, goal: 30000000 }
  });

  const [animatedCounters, setAnimatedCounters] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [donatedSchool, setDonatedSchool] = useState(null);

  useEffect(() => {
    Object.keys(donations).forEach(id => {
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

        setAnimatedCounters(prev => ({
          ...prev,
          [id]: Math.floor(currentValue)
        }));
      }, duration / steps);
    });
  }, [donations]);

  const handleDonation = (schoolId) => {
    setDonations(prev => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        amount: prev[schoolId].amount + 50000
      }
    }));
    
    const school = blogPosts.find(post => post.id === schoolId);
    setDonatedSchool(school);
    setShowThankYou(true);
  };

  const closeThankYou = () => {
    setShowThankYou(false);
    setDonatedSchool(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

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
      ],
      hasDonation: true
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
      ],
      hasDonation: true
    },
    {
      id: 3,
      title: "Trường Tiểu học Cà Mau - Thách thức từ vùng đất mũi",
      location: "Cà Mau",
      students: 320,
      date: "08/03/2024",
      excerpt: "Ở vùng đất mũi Ca Mau, trường Tiểu học Cà Mau đang phải đối mặt với tình trạng sạt lở nghiêm trọng, đe dọa việc học tập của các em...",
      content: "Trường Tiểu học Cà Mau nằm ở vùng đất mũi, nơi chịu tác động mạnh mẽ của biến đổi khí hậu. Sạt lở đã 'nuốt' mất gần một nửa sân trường, khiến việc học tập của 320 em học sinh gặp nhiều khó khăn.\n\nCô Hương, giáo viên lớp 3 lo lắng: 'Mỗi lần thủy triều lên cao, chúng tôi đều phải di chuyển bàn ghế ra xa bờ. Có hôm nước tràn vào tận lớp học, các em phải đứng trên ghế để tiếp tục học bài.'\n\nĐây là ngôi trường duy nhất trong vùng, phục vụ học sinh từ 5 ấp xa. Nếu không có sự hỗ trợ kịp thời, ngôi trường có thể sẽ bị biển 'nuốt chửng' hoàn toàn trong vòng 2-3 năm tới.",
      beforeImage: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/5/6/z65117755532510b972cef493e22bc56861b2942cd874c-17465135641601190783981.jpg",
      afterImage: "https://cdn.giaoducthoidai.vn/images/2558b157b0dd2fa70dca3778b5c71b025a4fc666baf1cc51bb6c83b56c0c0051f411c57ea3903c02bc32036e690152ecbc63b4cc55323ef70a33248940d3c8c9/gdmn-ca-mau-3.jpg",
      updates: [
        { date: "05/03/2024", content: "Đánh giá tình hình sạt lở" },
        { date: "12/03/2024", content: "Lên kế hoạch gia cố bờ kè" },
        { date: "18/03/2024", content: "Đạt 58% mục tiêu quyên góp" }
      ],
      hasDonation: false
    },
    {
      id: 4,
      title: "Trường Tiểu học Hà Giang - Hành trình đến tri thức",
      location: "Hà Giang",
      students: 150,
      date: "20/04/2024",
      excerpt: "Nằm ở vùng núi cao Hà Giang, trường Tiểu học Hà Giang đang thiếu thốn nghiêm trọng về cơ sở vật chất và tài liệu học tập...",
      content: "Trường Tiểu học Hà Giang tọa lạc ở vùng núi cao hẻo lánh, nơi các em học sinh phải vượt qua những con đường mòn hiểm trở để đến trường. Nhiều em phải đi bộ hàng giờ qua núi rừng để học chữ.\n\nCô Mai, giáo viên chủ nhiệm chia sẻ: 'Chúng tôi thiếu sách giáo khoa, bảng đen thì cũ kỹ, nhiều khi phải viết bằng than lên tấm gỗ. Các em rất ham học, nhưng điều kiện quá khó khăn.'\n\nTrường phục vụ 150 học sinh từ các bản làng lân cận, chủ yếu là người dân tộc H'Mông. Một ngôi trường khang trang với đầy đủ sách vở là giấc mơ lớn của cả cô và trò nơi đây.",
      beforeImage: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwdach9sdfx70d@resize_ss576x330",
      afterImage: "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwdach9sdfx70d@resize_ss576x330",
      updates: [
        { date: "15/04/2024", content: "Khảo sát cơ sở vật chất trường" },
        { date: "25/04/2024", content: "Thu gom sách giáo khoa cũ" },
        { date: "30/04/2024", content: "Đạt 34% mục tiêu quyên góp" }
      ],
      hasDonation: false
    },
    {
      id: 5,
      title: "Trường THCS An Giang - Tương lai bên dòng sông Hậu",
      location: "An Giang",
      students: 200,
      date: "10/04/2024",
      excerpt: "Trường THCS An Giang nằm bên dòng sông Hậu, nơi các em học sinh đang học trong những phòng học thiếu ánh sáng và bàn ghế...",
      content: "Trường THCS An Giang nằm bên bờ sông Hậu, nơi nhịp sống phụ thuộc vào dòng sông. Tuy nhiên, cơ sở vật chất của trường đã xuống cấp nghiêm trọng, với những phòng học thiếu ánh sáng và bàn ghế cũ kỹ.\n\nThầy Hùng, giáo viên dạy Văn cho biết: 'Chúng tôi thường xuyên phải sửa chữa bàn ghế vì chúng đã quá cũ. Nhiều em học sinh phải chia sẻ sách giáo khoa vì không đủ.'\n\nTrường phục vụ 200 học sinh từ các xã lân cận. Các em mơ ước có một ngôi trường với phòng học sáng sủa và đầy đủ dụng cụ học tập để theo đuổi con chữ.",
      beforeImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1590402494587-6e0c8c780e5b?w=600&h=400&fit=crop",
      updates: [
        { date: "05/04/2024", content: "Hoàn tất đánh giá cơ sở vật chất" },
        { date: "12/04/2024", content: "Bắt đầu quyên góp sách giáo khoa" },
        { date: "18/04/2024", content: "Đạt 38% mục tiêu quyên góp" }
      ],
      hasDonation: false
    }
  ];

  return (
    <div style={{ 
      fontFamily: '"Roboto", serif',
      backgroundColor: 'var(--extra-light, #fafafa)',
      minHeight: '100vh'
    }}>
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

      <section style={{ backgroundColor: 'var(--extra-light, #fafafa)' }}>
        <div className="section__container">
          <div className="blog__grid" style={{ 
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '1fr',
            marginBlock: '2rem'
          }}>
            {blogPosts.map((post) => (
              post.hasDonation ? (
                <BlogPost
                  key={post.id}
                  post={post}
                  donations={donations}
                  animatedCounters={animatedCounters}
                  handleDonation={handleDonation}
                  formatCurrency={formatCurrency}
                  calculateProgress={calculateProgress}
                />
              ) : (
                <BlogCard
                  key={post.id}
                  post={post}
                />
              )
            ))}
          </div>

          <CallToAction />
        </div>
      </section>

      <ThankYouModal
        showThankYou={showThankYou}
        closeThankYou={closeThankYou}
        donatedSchool={donatedSchool}
      />

      <style jsx>{`
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
            transform: scale(1.05);
          }
        }

        .section__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section__subheader {
          font-size: 1rem;
          fontWeight: 600;
          color: var(--primary-color, #01bbbf);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .section__header {
          font-size: 3rem;
          fontWeight: 800;
          color: var(--text-dark, #1d293d);
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .section__description {
          font-size: 1.2rem;
          color: var(--text-light, #62748e);
          lineHeight: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          font-size: 1rem;
          fontWeight: 600;
          text-decoration: none;
          border-radius: 3rem;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .section__header {
            font-size: 2rem;
          }
          
          .section__description {
            font-size: 1rem;
          }
          
          .blog__content {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;