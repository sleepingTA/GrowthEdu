import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const MissionDetail = ({ mission, getTypeColor, getVolunteerStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const volunteerInfo = getVolunteerStatus(mission.volunteers);

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 style={{
          marginBottom: '1rem',
          fontSize: '2rem',
          fontWeight: '700',
          color: 'var(--primary-color)'
        }}>
          {mission.type}
        </h3>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          color: 'var(--text-dark)',
          marginBottom: '1.5rem'
        }}>
          {mission.title}
        </h2>
        <p style={{
          fontSize: '1.1rem',
          fontWeight: '500',
          color: 'var(--text-light)',
          lineHeight: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {mission.description}
        </p>
      </div>
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        maxWidth: 600,
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{
            backgroundColor: getTypeColor(mission.type),
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '1.5rem',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {mission.type}
          </span>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Địa điểm:</strong> {mission.location}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>Thời gian:</strong> {mission.date} ({mission.time})
        </div>
        <div style={{
          marginBottom: '1rem',
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          borderRadius: '0.75rem'
        }}>
          <strong>Tình nguyện viên:</strong> {mission.volunteers}
          <span style={{
            marginLeft: 12,
            backgroundColor: volunteerInfo.color,
            color: 'white',
            padding: '0.3rem 1rem',
            borderRadius: '1.5rem',
            fontSize: '0.9rem',
            fontWeight: '600'
          }}>
            {volunteerInfo.status}
          </span>
        </div>
        <div style={{
          backgroundColor: '#fff3cd',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          border: '1px solid #ffeaa7'
        }}>
          <strong>💡 Yêu cầu:</strong> {mission.requirements}
        </div>
        <div style={{
          backgroundColor: 'var(--extra-light)',
          padding: '1.5rem',
          borderRadius: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <h5 style={{
            margin: '0 0 1rem 0',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'var(--text-dark)'
          }}>
            📞 Thông tin liên hệ
          </h5>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--text-dark)' }}>Người phụ trách:</strong>
            <span style={{ marginLeft: '0.5rem', color: 'var(--text-light)' }}>
              {mission.contact.name}
            </span>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--text-dark)' }}>Điện thoại:</strong>
            <span style={{
              marginLeft: '0.5rem',
              color: 'var(--primary-color)',
              fontWeight: '600'
            }}>
              {mission.contact.phone}
            </span>
          </div>
          <div>
            <strong style={{ color: 'var(--text-dark)' }}>Email:</strong>
            <span style={{
              marginLeft: '0.5rem',
              color: 'var(--primary-color)',
              fontWeight: '600'
            }}>
              {mission.contact.email}
            </span>
          </div>
        </div>
        <button style={{
          width: '100%',
          padding: '1rem',
          border: 'none',
          backgroundColor: 'var(--primary-color)',
          color: 'var(--white)',
          borderRadius: '0.75rem',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          transition: '0.3s',
          fontFamily: '"Roboto", serif'
        }}
        onClick={() => setShowModal(true)}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#019a9d';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'var(--primary-color)';
          e.target.style.transform = 'translateY(0)';
        }}
        >
          📝 Đăng ký tham gia
        </button>
      </div>
      {showModal && (
        <RegistrationForm missionTitle={mission.title} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default MissionDetail;