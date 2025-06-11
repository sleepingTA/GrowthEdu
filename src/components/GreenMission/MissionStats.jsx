import React from 'react';

const MissionStats = ({ totalVolunteers }) => {
  return (
    <div style={{
      backgroundColor: 'var(--white)',
      padding: '1.5rem 2rem',
      borderRadius: '1rem',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      minWidth: '200px'
    }}>
      <h4 style={{
        margin: '0 0 0.5rem 0',
        fontSize: '2rem',
        fontWeight: '800',
        color: 'var(--primary-color)'
      }}>
        {totalVolunteers}
      </h4>
      <p style={{
        margin: 0,
        color: 'var(--text-light)',
        fontSize: '1rem'
      }}>
        Tình nguyện viên đã đăng ký
      </p>
    </div>
  );
};

export default MissionStats;