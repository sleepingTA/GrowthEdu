import React from 'react';
import { Heart, MapPin, Users, Calendar, Target } from 'lucide-react';
import BankInfo from './BankInfo';

const SchoolCard = ({ post, donation, animatedCounter, formatCurrency, calculateProgress, handleDonation }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      {/* School Info */}
      <h4
        style={{
          fontSize: '1.4rem',
          fontWeight: '800',
          color: '#1d293d',
          marginBottom: '1rem',
        }}
      >
        {post.title}
      </h4>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1rem',
          fontSize: '0.9rem',
          color: '#62748e',
        }}
      >
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
      <p
        style={{
          color: '#62748e',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
        }}
      >
        {post.excerpt}
      </p>

      {/* Bank Information for School */}
      <BankInfo bankInfo={post.bankInfo} isSchool={true} schoolTitle={post.title} />

      {/* Progress Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 100%)',
          borderRadius: '8px',
          padding: '1.2rem',
          marginBottom: '1.5rem',
          border: '1px solid #e0e7ff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <h3
            style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#1d293d',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Target size={16} style={{ color: '#01bbbf' }} />
            Tiến độ quyên góp
          </h3>
          <span
            style={{
              fontSize: '1.2rem',
              fontWeight: '800',
              color: '#10b981',
            }}
          >
            {calculateProgress(donation.amount, donation.goal).toFixed(1)}%
          </span>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <div
            style={{
              height: '8px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #01bbbf 0%, #10b981 100%)',
                borderRadius: '4px',
                width: `${calculateProgress(donation.amount, donation.goal)}%`,
                transition: 'width 0.5s ease',
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#62748e',
                marginBottom: '0.2rem',
              }}
            >
              Đã quyên góp
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: '#01bbbf',
              }}
            >
              {formatCurrency(animatedCounter || 0)}
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#62748e',
                marginBottom: '0.2rem',
              }}
            >
              Mục tiêu
            </p>
            <p
              style={{
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#1d293d',
              }}
            >
              {formatCurrency(donation.goal)}
            </p>
          </div>
        </div>
      </div>

      {/* Donation Button */}
      <button
        onClick={() => handleDonation('school', post.id)}
        style={{
          width: '100%',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
          border: 'none',
          borderRadius: '20px',
          padding: '0.8rem 1.5rem',
          fontSize: '0.95rem',
          fontWeight: '600',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
        }}
      >
        <Heart size={16} style={{ color: '#ffffff' }} />
        Góp 50,000đ cho trường này
      </button>
    </div>
  );
};

export default SchoolCard;