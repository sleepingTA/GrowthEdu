import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const MissionCard = ({ mission, getTypeColor, getVolunteerStatus }) => {
  const [showModal, setShowModal] = useState(false);
  const volunteerInfo = getVolunteerStatus(mission.volunteers);

  return (
    <div
      style={{
        backgroundColor: 'var(--white)',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
        transition: '0.3s',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: getTypeColor(mission.type),
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '1.5rem',
        fontSize: '0.8rem',
        fontWeight: '600'
      }}>
        {mission.type}
      </div>
      <div style={{ marginBottom: '1.5rem', paddingTop: '1rem' }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: 'var(--text-dark)',
          marginBottom: '0.5rem',
          lineHeight: '1.4'
        }}>
          {mission.title}
        </h3>
        <p style={{
          margin: 0,
          color: 'var(--text-light)',
          fontSize: '0.95rem'
        }}>
          📍 {mission.location}
        </p>
      </div>
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          backgroundColor: 'var(--extra-light)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-dark)'
        }}>
          📅 {mission.date}
        </div>
        <div style={{
          backgroundColor: 'var(--extra-light)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-dark)'
        }}>
          ⏰ {mission.time}
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '0.75rem'
      }}>
        <div>
          <p style={{
            margin: '0 0 0.25rem 0',
            fontSize: '0.9rem',
            color: 'var(--text-light)'
          }}>
            Tình nguyện viên
          </p>
          <p style={{
            margin: 0,
            fontSize: '1.2rem',
            fontWeight: '700',
            color: 'var(--text-dark)'
          }}>
            {mission.volunteers}
          </p>
        </div>
        <div style={{
          backgroundColor: volunteerInfo.color,
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '1.5rem',
          fontSize: '0.8rem',
          fontWeight: '600'
        }}>
          {volunteerInfo.status}
        </div>
      </div>
      <p style={{
        fontSize: '0.95rem',
        color: 'var(--text-light)',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>
        {mission.description}
      </p>
      <div style={{
        backgroundColor: '#fff3cd',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        border: '1px solid #ffeaa7'
      }}>
        <p style={{
          margin: '0 0 0.5rem 0',
          fontSize: '0.9rem',
          fontWeight: '600',
          color: '#856404'
        }}>
          💡 Yêu cầu:
        </p>
        <p style={{
          margin: 0,
          fontSize: '0.9rem',
          color: '#856404'
        }}>
          {mission.requirements}
        </p>
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
      {showModal && (
        <RegistrationForm missionTitle={mission.title} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default MissionCard;