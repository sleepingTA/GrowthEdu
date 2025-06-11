import React from 'react';

const BankInfo = ({ bankInfo, isSchool = false, schoolTitle = '' }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: isSchool ? '1rem' : '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          fontSize: isSchool ? '1.1rem' : '1.5rem',
          fontWeight: '700',
          color: '#1d293d',
          marginBottom: '1.5rem',
        }}
      >
        Thông tin chuyển khoản
      </h3>
      <img
        src={bankInfo.qrImage}
        alt={`QR Code for ${isSchool ? schoolTitle : 'Quỹ chung'}`}
        style={{
          width: isSchool ? '150px' : '180px',
          height: isSchool ? '150px' : '180px',
          margin: '0 auto 1.5rem',
          display: 'block',
          border: isSchool ? '3px solid #ffffff' : '4px solid #fafafa',
          borderRadius: '8px',
        }}
      />
      <div
        style={{
          backgroundColor: '#fafafa',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          textAlign: 'left',
        }}
      >
        <div style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#1d293d' }}>Ngân hàng:</strong>
          <p style={{ margin: '0.4rem 0', color: '#62748e' }}>{bankInfo.bankName}</p>
        </div>
        <div style={{ marginBottom: '0.8rem' }}>
          <strong style={{ color: '#1d293d' }}>Số tài khoản:</strong>
          <p
            style={{
              margin: '0.4rem 0',
              color: '#01bbbf',
              fontSize: '1.1rem',
              fontWeight: '600',
            }}
          >
            {bankInfo.accountNumber}
          </p>
        </div>
        <div>
          <strong style={{ color: '#1d293d' }}>Chủ tài khoản:</strong>
          <p style={{ margin: '0.4rem 0', color: '#62748e' }}>{bankInfo.accountName}</p>
        </div>
      </div>
      <div
        style={{
          padding: '0.8rem',
          backgroundColor: '#e8f8f8',
          borderRadius: '8px',
          border: '1px solid #01bbbf',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '0.85rem',
            color: '#1d293d',
            fontStyle: 'italic',
          }}
        >
          💡 Vui lòng ghi rõ {isSchool ? `nội dung: Ủng hộ ${schoolTitle}` : 'họ tên và nội dung ủng hộ'} khi chuyển khoản
        </p>
      </div>
    </div>
  );
};

export default BankInfo;