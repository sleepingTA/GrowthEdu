import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Calendar } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Sân Trường Xanh Mãi - Trường THCS Nguyễn Trãi",
      location: "Quận 5, TP. Hồ Chí Minh",
      students: 300,
      date: "15/06/2025",
      excerpt: "Trường THCS Nguyễn Trãi từng đầy rác thải, nay trở thành không gian xanh sạch nhờ chiến dịch 'Sân Trường Xanh Mãi'...",
      content: "Trường THCS Nguyễn Trãi từng đối mặt với vấn đề rác thải bừa bãi ở sân trường. Chiến dịch 'Sân Trường Xanh Mãi' được phát động vào tháng 6/2025 để thay đổi hiện trạng. Ban đầu, chỉ một vài lớp tham gia dọn vệ sinh, nhưng khi thầy hiệu trưởng cùng học sinh lớp 8A trồng cây phượng đầu tiên, hơn 300 học sinh, giáo viên và phụ huynh đã cùng dọn rác, sơn lại thùng rác cũ, và trồng 40 cây xanh. Các em còn tổ chức cuộc thi làm đồ tái chế, biến chai nhựa thành chậu cây. Sau chiến dịch, sân trường sạch đẹp, bóng mát phủ khắp, học sinh tự giác bỏ rác đúng nơi. Ngôi trường giờ đây là niềm tự hào chung của cộng đồng.\n\nChiến dịch đã khơi dậy ý thức bảo vệ môi trường, tạo nền tảng cho một trường học xanh sạch.",
      beforeImage: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      updates: [
        { date: "01/06/2025", content: "Khởi động chiến dịch và khảo sát sân trường" },
        { date: "10/06/2025", content: "Bắt đầu dọn rác và sơn lại thùng rác" },
        { date: "15/06/2025", content: "Trồng 40 cây xanh và tổ chức thi làm đồ tái chế" }
      ],
      hasDonation: true
    },
    {
      id: 2,
      title: "Lớp Sạch, Trường Vui - Trường Tiểu học Lê Văn Tám",
      location: "TP. Đà Nẵng",
      students: 250,
      date: "01/07/2025",
      excerpt: "Trường Tiểu học Lê Văn Tám từng ngập giấy vụn, nay lột xác nhờ chiến dịch 'Lớp Sạch, Trường Vui'...",
      content: "Tại Trường Tiểu học Lê Văn Tám, lớp học thường ngập giấy vụn và đồ chơi bừa bãi. Chiến dịch 'Lớp Sạch, Trường Vui' khởi động vào mùa hè 2025 để cải thiện môi trường học tập. Mỗi lớp được giao nhiệm vụ trang trí góc học tập và giữ vệ sinh. Các cô giáo tổ chức trò chơi 'Ngôi sao sạch nhất', chấm điểm lớp gọn gàng mỗi tuần. Học sinh tham gia ngày hội đổi rác tái chế lấy sách. Lớp 3B, ban đầu lộn xộn nhất, đã trở thành lớp dẫn đầu nhờ ý tưởng làm 'hộp rác mini' cho mỗi bàn. Sau một tháng, cả trường như lột xác, trở thành nơi học tập vui vẻ và sạch sẽ.\n\nChiến dịch đã khuyến khích học sinh xây dựng thói quen giữ gìn vệ sinh, tạo nên một ngôi trường hạnh phúc.",
      beforeImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      updates: [
        { date: "15/06/2025", content: "Khởi động chiến dịch và phân công nhiệm vụ cho các lớp" },
        { date: "22/06/2025", content: "Tổ chức trò chơi 'Ngôi sao sạch nhất' và lắp hộp rác mini" },
        { date: "01/07/2025", content: "Tổ chức ngày hội đổi rác lấy sách và tổng kết chiến dịch" }
      ],
      hasDonation: true
    },
    {
      id: 3,
      title: "Nói Không Với Rác Nhựa - Trường THPT Trần Phú",
      location: "TP. Hà Nội",
      students: 500,
      date: "15/05/2025",
      excerpt: "Trường THPT Trần Phú giảm 80% rác nhựa nhờ chiến dịch 'Nói Không Với Rác Nhựa', tạo môi trường học đường xanh sạch...",
      content: "Trường THPT Trần Phú từng sử dụng hàng trăm chai nhựa mỗi ngày. Chiến dịch 'Nói Không Với Rác Nhựa' được phát động vào tháng 5/2025 để thay đổi thói quen này. Chiến dịch bắt đầu bằng buổi nói chuyện về tác hại của rác nhựa, thu hút hơn 500 học sinh. Nhà trường khuyến khích dùng bình nước inox và tổ chức hội chợ tái chế, nơi học sinh biến túi nhựa thành giỏ đựng đồ. Dù ban đầu gặp khó khăn vì thói quen dùng chai nhựa, sau thử thách '7 ngày không nhựa', hơn 400 học sinh đã chuyển sang dùng bình cá nhân. Kết quả, lượng rác nhựa ở trường giảm 80%, tạo nên một môi trường học đường xanh hơn.\n\nChiến dịch đã nâng cao ý thức bảo vệ môi trường, truyền cảm hứng cho học sinh sống xanh.",
      beforeImage: "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/5/6/z65117755532510b972cef493e22bc56861b2942cd874c-17465135641601190783981.jpg",
      afterImage: "https://cdn.giaoducthoidai.vn/images/2558b157b0dd2fa70dca3778b5c71b025a4fc666baf1cc51bb6c83b56c0c0051f411c57ea3903c02bc32036e690152ecbc63b4cc55323ef70a33248940d3c8c9/gdmn-ca-mau-3.jpg",
      updates: [
        { date: "01/05/2025", content: "Tổ chức buổi nói chuyện về tác hại của rác nhựa" },
        { date: "08/05/2025", content: "Phát động thử thách '7 ngày không nhựa'" },
        { date: "15/05/2025", content: "Tổ chức hội chợ tái chế và tổng kết chiến dịch" }
      ],
      hasDonation: false
    },
    {
      id: 4,
      title: "Trường Xanh Giữa Núi Rừng - Trường Tiểu học Hà Giang",
      location: "Hà Giang",
      students: 150,
      date: "20/04/2024",
      excerpt: "Trường Tiểu học Hà Giang từng ngập rác giấy, nay trở nên sạch đẹp nhờ chiến dịch 'Trường Xanh Giữa Núi Rừng'...",
      content: "Trường Tiểu học Hà Giang, nơi 150 học sinh dân tộc H’Mông học tập, từng ngập rác giấy và đồ dùng cũ do thiếu thùng rác và ý thức phân loại. Chiến dịch 'Trường Xanh Giữa Núi Rừng' được khởi động vào tháng 4/2024 để tạo môi trường học tập sạch sẽ. Sau khi khảo sát hiện trạng, nhà trường lắp đặt thùng rác phân loại và tổ chức hội thảo về tái chế. Học sinh tham gia dọn dẹp sân trường, làm đồ tái chế từ giấy cũ, và vẽ tranh tuyên truyền về giữ gìn vệ sinh. Sau chiến dịch, sân trường sạch sẽ, lớp học gọn gàng, và các em tự hào khi thấy ngôi trường giữa núi rừng trở nên xanh sạch hơn.\n\nChiến dịch đã khơi dậy ý thức giữ gìn vệ sinh, giúp học sinh hiểu giá trị của một môi trường học tập sạch đẹp.",
      beforeImage: "https://images.unsplash.com/photo-1502675137356-2c7b409fd2f1?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1590402494682-7b8a9e9c3740?w=600&h=400&fit=crop",
      updates: [
        { date: "15/04/2024", content: "Khảo sát hiện trạng rác thải tại trường" },
        { date: "25/04/2024", content: "Lắp thùng rác phân loại và tổ chức hội thảo tái chế" },
        { date: "30/04/2024", content: "Học sinh dọn sân trường, vẽ tranh tuyên truyền" }
      ],
      hasDonation: false
    },
    {
      id: 5,
      title: "Sạch Sáng Bên Sông Hậu - Trường THCS An Giang",
      location: "An Giang",
      students: 200,
      date: "10/04/2024",
      excerpt: "Trường THCS An Giang từng ngập rác quanh sân, nay sáng sủa nhờ chiến dịch 'Sạch Sáng Bên Sông Hậu'...",
      content: "Trường THCS An Giang, bên dòng sông Hậu, từng đối mặt với rác thải tràn lan quanh sân trường do thiếu thùng rác và ý thức vệ sinh. Chiến dịch 'Sạch Sáng Bên Sông Hậu' được phát động vào tháng 4/2024 để cải thiện môi trường học tập. Sau khi đánh giá hiện trạng, nhà trường lắp thùng rác phân loại và tổ chức ngày hội 'Đổi rác lấy cây'. Học sinh tham gia dọn rác dọc bờ sông, sơn lại hành lang, và làm đồ tái chế như hộp bút từ chai nhựa. Sau chiến dịch, ngôi trường trở nên sáng sủa, sạch sẽ, truyền cảm hứng cho 200 học sinh giữ gìn môi trường học đường.\n\nChiến dịch đã khuyến khích học sinh xây dựng thói quen bảo vệ môi trường, tạo nên một ngôi trường sạch đẹp.",
      beforeImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1590402494587-6e0c8c780e5b?w=600&h=400&fit=crop",
      updates: [
        { date: "05/04/2024", content: "Đánh giá hiện trạng rác thải tại trường" },
        { date: "12/04/2024", content: "Lắp thùng rác phân loại và tổ chức ngày hội 'Đổi rác lấy cây'" },
        { date: "18/04/2024", content: "Học sinh dọn rác bờ sông và làm đồ tái chế" }
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