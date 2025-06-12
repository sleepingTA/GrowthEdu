import { Target, Heart } from 'lucide-react';

const ProgressSection = ({ post, donations, animatedCounters, handleDonation, formatCurrency, calculateProgress }) => {
  return (
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
          boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
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
  );
};

export default ProgressSection;