import React from 'react';

const MissionFilter = ({ missionTypes, selectedType, setSelectedType }) => {
  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap'
    }}>
      {missionTypes.map((type) => (
        <button
          key={type}
          onClick={() => setSelectedType(type)}
          style={{
            padding: '0.75rem 1.5rem',
            border: selectedType === type ? '2px solid var(--primary-color)' : '2px solid transparent',
            backgroundColor: selectedType === type ? 'var(--primary-color)' : 'var(--white)',
            color: selectedType === type ? 'var(--white)' : 'var(--text-dark)',
            borderRadius: '2rem',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: '0.3s',
            fontFamily: '"Roboto", serif'
          }}
          onMouseEnter={(e) => {
            if (selectedType !== type) {
              e.target.style.backgroundColor = 'var(--extra-light)';
            }
          }}
          onMouseLeave={(e) => {
            if (selectedType !== type) {
              e.target.style.backgroundColor = 'var(--white)';
            }
          }}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default MissionFilter;