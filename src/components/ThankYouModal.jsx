import React from 'react';
import { MapPin, CheckCircle, X } from 'lucide-react';

const ThankYouModal = ({ showThankYou, donationType, donatedSchool, closeThankYou }) => {
  if (!showThankYou) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '2rem',
          maxWidth: '480px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          animation: 'slideInUp 0.5s ease-out',
        }}
      >
        <button
          onClick={closeThankYou}
          style={{
            position: 'absolute',
            top: '0.8rem',
            right: '0.8rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            color: '#6b7280',
          }}
        >
          <X size={20} />
        </button>
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#10b981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.2rem',
            animation: 'pulse 2s infinite',
          }}
        >
          <CheckCircle size={30} color="#ffffff" />
        </div>
        <h2
          style={{
            fontSize: '1.6rem',
            fontWeight: '800',
            color: '#1d293d',
            marginBottom: '1rem',
          }}
        >
          Cảm ơn bạn rất nhiều!
        </h2>
        <p
          style={{
            fontSize: '1rem',
            color: '#62748e',
            marginBottom: '1.2rem',
            lineHeight: '1.6',
          }}
        >
          Bạn vừa đóng góp <strong style={{ color: '#01bbbf' }}>50,000đ</strong> cho{' '}
          {donationType === 'general' ? 'quỹ chung của website' : donatedSchool?.title}
        </p>
        {donationType === 'school' && (
          <div
            style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1.2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '0.8rem',
              }}
            >
              <MapPin size={16} style={{ color: '#01bbbf' }} />
              <span style={{ color: '#01bbbf', fontWeight: '600' }}>
                {donatedSchool?.location}
              </span>
            </div>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#1d293d',
                fontWeight: '600',
              }}
            >
              {donatedSchool?.students} học sinh sẽ được hưởng lợi từ đóng góp
            </p>
          </div>
        )}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#62748e',
            marginBottom: '1.2rem',
            fontStyle: 'italic',
          }}
        >
          "Mỗi đóng góp của bạn là một bước tiến lớn cho cộng đồng"
        </p>
        <button
          onClick={closeThankYou}
          style={{
            background: 'linear-gradient(135deg, #01bbbf 0%, #3b82f6 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '0.8rem 1.5rem',
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Tiếp tục chia sẻ
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;