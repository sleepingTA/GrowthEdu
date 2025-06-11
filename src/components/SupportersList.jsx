import React from 'react';

const SupportersList = ({ supporters }) => {
  const totalAmount = supporters
    .reduce((sum, supporter) => sum + parseInt(supporter.amount.replace(/,/g, '')), 0)
    .toLocaleString('vi-VN');

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          paddingBottom: '0.8rem',
          borderBottom: '1px solid #fafafa',
        }}
      >
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#1d293d',
            margin: '0',
          }}
        >
          Danh sách ủng hộ
        </h3>
        <div
          style={{
            backgroundColor: '#01bbbf',
            color: '#ffffff',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: '600',
          }}
        >
          {supporters.length} người ủng hộ
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#f0fdfd',
          padding: '1.2rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'center',
          border: '1px solid #01bbbf',
        }}
      >
        <p
          style={{
            margin: '0 0 0.4rem',
            color: '#62748e',
            fontSize: '0.9rem',
          }}
        >
          Tổng số tiền đã quyên góp
        </p>
        <h4
          style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: '800',
            color: '#01bbbf',
          }}
        >
          {totalAmount} VNĐ
        </h4>
      </div>
      <div
        style={{
          maxHeight: '360px',
          overflowY: 'auto',
          paddingRight: '0.4rem',
        }}
      >
        {supporters.map((supporter) => (
          <div
            key={supporter.id}
            style={{
              backgroundColor: '#fafafa',
              padding: '1rem',
              borderRadius: '8px',
              marginBottom: '0.8rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.4rem',
              }}
            >
              <h5
                style={{
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#1d293d',
                }}
              >
                {supporter.name}
              </h5>
              <span
                style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#01bbbf',
                }}
              >
                {supporter.amount} VNĐ
              </span>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#62748e',
                fontStyle: 'italic',
              }}
            >
              "{supporter.content}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportersList;