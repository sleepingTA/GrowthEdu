import React from 'react';

const DonationJar = ({ supporters, isJarShaking, coins }) => {
  return (
    <div style={{ position: 'relative', textAlign: 'center' }}>
      {/* Falling Coins */}
      {coins.map((coin) => (
        <div
          key={coin.id}
          style={{
            position: 'absolute',
            left: `${coin.left}px`,
            top: '0px',
            width: '20px',
            height: '20px',
            backgroundColor: '#ffd700',
            borderRadius: '50%',
            border: '2px solid #ffed4a',
            animation: `fall 1.5s ease-in ${coin.delay}s forwards`,
            zIndex: 10,
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '10px',
              color: '#b45309',
              fontWeight: 'bold',
            }}
          >
            ₫
          </div>
        </div>
      ))}
      
      {/* Donation Jar */}
      <div
        style={{
          position: 'relative',
          width: '250px',
          height: '300px',
          margin: '0 auto',
          animation: isJarShaking ? 'shake 0.5s ease-in-out infinite' : 'none',
        }}
      >
        {/* Jar Body */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '180px',
            height: '220px',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.8) 100%)',
            borderRadius: '0 0 40px 40px',
            border: '4px solid #01bbbf',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 2px 10px rgba(1,187,191,0.1)',
            overflow: 'hidden',
          }}
        >
          {/* Water Level Animation */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              right: '0',
              height: `${(supporters.length * 15) % 100 + 30}%`,
              background: 'linear-gradient(180deg, rgba(1,187,191,0.2) 0%, rgba(1,187,191,0.4))',
              borderRadius: '0 0 36px 36px',
              animation: 'wave 3s ease-in-out infinite',
            }}
          />
          
          {/* Coins in Jar */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              right: '10px',
              height: '60px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              gap: '3px',
            }}
          >
            {Array.from({ length: Math.min(supporters.length, 12) }, (_, i) => (
              <div
                key={i}
                style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#ffd700',
                  borderRadius: '50%',
                  border: '1px solid #ffed4a',
                  animation: `coinShine ${2 + i * 0.1}s ease-in-out infinite alternate`,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Jar Lid */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            height: '30px',
            background: 'linear-gradient(145deg, #01bbbf 0%, #019da1 100%)',
            borderRadius: '15px',
            border: '2px solid #016d70',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          {/* Coin Slot */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '6px',
              backgroundColor: '#014d50',
              borderRadius: '3px',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
            }}
          />
        </div>
        
        {/* Jar Label */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140px',
            height: '80px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '8px',
            border: '2px solid #01bbbf',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#01bbbf',
              marginBottom: '5px',
            }}
          >
            QUỸ CHUNG
          </div>
          <div
            style={{
              fontSize: '11px',
              color: '#62748e',
              textAlign: 'center',
              lineHeight: '1.2',
            }}
          >
            Vì giáo dục &<br />môi trường
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#01bbbf',
              marginTop: '5px',
            }}
          >
            {supporters.length} người ủng hộ
          </div>
        </div>
      </div>
      
      {/* Total Amount Display */}
      <div
        style={{
          backgroundColor: 'rgba(1,187,191,0.1)',
          border: '2px solid #01bbbf',
          borderRadius: '15px',
          padding: '15px',
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            color: '#62748e',
            marginBottom: '5px',
          }}
        >
          Tổng số tiền trong hũ
        </div>
        <div
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#01bbbf',
          }}
        >
          {supporters
            .reduce((sum, supporter) => sum + parseInt(supporter.amount.replace(/,/g, '')), 0)
            .toLocaleString('vi-VN')} VNĐ
        </div>
      </div>
    </div>
  );
};

export default DonationJar;