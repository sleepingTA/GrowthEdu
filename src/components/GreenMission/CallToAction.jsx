import React from 'react';

const CallToAction = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem 2rem',
      backgroundColor: 'var(--extra-light)',
      borderRadius: '1rem'
    }}>
      <h4 style={{
        marginBottom: '1rem',
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-dark)'
      }}>
        Không tìm thấy nhiệm vụ phù hợp? 🤔
      </h4>
      <p style={{
        marginBottom: '2rem',
        fontSize: '1rem',
        color: 'var(--text-light)',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 2rem auto'
      }}>
        Hãy liên hệ với chúng tôi để đề xuất hoạt động mới hoặc tạo nhóm tình nguyện riêng cho khu vực của bạn!
      </p>
      <button style={{
        padding: '1rem 2rem',
        border: '2px solid var(--primary-color)',
        backgroundColor: 'var(--white)',
        color: 'var(--primary-color)',
        borderRadius: '2rem',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: '0.3s',
        fontFamily: '"Roboto", serif'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'var(--primary-color)';
        e.target.style.color = 'var(--white)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'var(--white)';
        e.target.style.color = 'var(--primary-color)';
      }}
      >
        💬 Liên hệ đề xuất hoạt động
      </button>
    </div>
  );
};

export default CallToAction;