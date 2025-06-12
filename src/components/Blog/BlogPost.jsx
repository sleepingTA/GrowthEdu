import { MapPin, Users, Calendar, TrendingUp } from 'lucide-react';
import ProgressSection from './ProgressSection';

const BlogPost = ({ post, donations, animatedCounters, handleDonation, formatCurrency, calculateProgress }) => {
  return (
    <article className="blog__card" style={{
      backgroundColor: 'var(--white, #ffffff)',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
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

        {/* Progress Section (only for donation-enabled posts) */}
        {post.hasDonation && (
          <ProgressSection 
            post={post}
            donations={donations}
            animatedCounters={animatedCounters}
            handleDonation={handleDonation}
            formatCurrency={formatCurrency}
            calculateProgress={calculateProgress}
          />
        )}

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
  );
};

export default BlogPost;