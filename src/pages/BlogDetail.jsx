import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Calendar } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

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
      beforeImage: "https://images.unsplash.com/photo-1502675137356-2c7b409fd2f1?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1590402494682-7b8a9e9c3740?w=600&h=400&fit=crop",
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

  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div style={{ 
        fontFamily: '"Roboto", serif',
        backgroundColor: 'var(--extra-light, #fafafa)',
        minHeight: '100vh',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2rem',
          fontWeight: '800',
          color: 'var(--text-dark, #1d293d)',
          marginBottom: '1rem'
        }}>
          Bài viết không tồn tại
        </h1>
        <Link to="/blog">
          <button
            className="btn"
            style={{
              background: 'linear-gradient(135deg, var(--primary-color, #01bbbf) 0%, #3b82f6 100%)',
              color: 'var(--white, #ffffff)',
              border: 'none',
              borderRadius: '3rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Quay lại trang Blog
          </button>
        </Link>
      </div>
    );
  }

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
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--extra-light, #fafafa)' }}>
        <div className="section__container">
          <article className="blog__card" style={{
            backgroundColor: 'var(--white, #ffffff)',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            marginBottom: '2rem'
          }}>
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
            </div>
          </article>

          {/* Back to Blog Button */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Link to="/blog">
              <button
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-color, #01bbbf) 0%, #3b82f6 100%)',
                  color: 'var(--white, #ffffff)',
                  border: 'none',
                  borderRadius: '3rem',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Quay lại trang Blog
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
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
          
          .blog__content {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;