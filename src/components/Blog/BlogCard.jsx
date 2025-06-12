import { MapPin, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
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
        
        {/* Image */}
        <img 
          src={post.beforeImage} 
          alt={post.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '0.5rem',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '1.5rem'
          }}
        />

        {/* Excerpt */}
        <p style={{ 
          color: 'var(--text-light, #62748e)',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          {post.excerpt}
        </p>

        {/* Read More Button */}
        <Link to={`/blog/${post.id}`}>
          <button
            className="btn"
            style={{
              width: '100%',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--primary-color, #01bbbf) 0%, #3b82f6 100%)',
              border: 'none',
              borderRadius: '3rem',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'var(--white, #ffffff)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
            }}
          >
            Đọc thêm
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;