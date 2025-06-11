import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import MissionDetail from '../components/GreenMission/MissionDetail';
import MissionCard from '../components/GreenMission/MissionCard';
import MissionFilter from '../components/GreenMission/MissionFilter';
import MissionStats from '../components/GreenMission/MissionStats';
import CallToAction from '../components/GreenMission/CallToAction';

const GreenMission = () => {
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [missions] = useState([
    {
      id: 1,
      type: "Trồng cây xanh",
      title: "Trồng cây tại Công viên Tao Đàn",
      location: "Công viên Tao Đàn, Quận 1, TP.HCM",
      date: "15/06/2025",
      time: "07:00 - 11:00",
      volunteers: "0/20",
      contact: {
        name: "Nguyễn Văn Minh",
        phone: "0123 456 789",
        email: "minh.nguyen@greenvn.org"
      },
      description: "Tham gia trồng 50 cây xanh tại khu vực công viên, góp phần tạo không gian xanh cho thành phố.",
      requirements: "Mang theo chai nước, khăn lau và tinh thần nhiệt huyết"
    },
    {
      id: 2,
      type: "Tái chế rác thải",
      title: "Phân loại rác thải tại Trường THPT Nguyễn Du",
      location: "Trường THPT Nguyễn Du, Quận 3, TP.HCM",
      date: "18/06/2025",
      time: "14:00 - 17:00",
      volunteers: "5/15",
      contact: {
        name: "Trần Thị Hoa",
        phone: "0987 654 321",
        email: "hoa.tran@school.edu.vn"
      },
      description: "Hướng dẫn học sinh phân loại rác thải đúng cách và tái chế các vật liệu có thể tái sử dụng.",
      requirements: "Có kinh nghiệm về phân loại rác thải hoặc tham gia khóa đào tạo trực tuyến"
    },
    {
      id: 3,
      type: "Vệ sinh trường học",
      title: "Dọn dẹp khuôn viên Trường Tiểu học Trần Hưng Đạo",
      location: "Trường TH Trần Hưng Đạo, Quận 5, TP.HCM",
      date: "20/06/2025",
      time: "08:00 - 12:00",
      volunteers: "12/30",
      contact: {
        name: "Lê Đức Nam",
        phone: "0369 147 258",
        email: "nam.le@thd-school.edu.vn"
      },
      description: "Tổng vệ sinh khuôn viên trường, làm sạch sân chơi và trồng thêm cây xanh trong khuôn viên.",
      requirements: "Mang theo găng tay, khẩu trang và dụng cụ vệ sinh cá nhân"
    },
    {
      id: 4,
      type: "Giáo dục môi trường",
      title: "Talkshow về bảo vệ môi trường tại Đại học Khoa học Tự nhiên",
      location: "ĐH Khoa học Tự nhiên, Quận Thủ Đức, TP.HCM",
      date: "22/06/2025",
      time: "19:00 - 21:00",
      volunteers: "3/10",
      contact: {
        name: "Phạm Thị Lan",
        phone: "0456 789 123",
        email: "lan.pham@hcmus.edu.vn"
      },
      description: "Diễn thuyết và trao đổi với sinh viên về các vấn đề môi trường và giải pháp bền vững.",
      requirements: "Có kiến thức về môi trường hoặc kinh nghiệm thuyết trình trước đám đông"
    },
    {
      id: 5,
      type: "Trồng cây xanh",
      title: "Trồng rừng tại Khu du lịch Cần Giờ",
      location: "Khu du lịch sinh thái Cần Giờ, TP.HCM",
      date: "25/06/2025",
      time: "06:00 - 16:00",
      volunteers: "8/25",
      contact: {
        name: "Hoàng Văn Đức",
        phone: "0741 852 963",
        email: "duc.hoang@cangio-tourism.vn"
      },
      description: "Tham gia trồng rừng ngập mặn, bảo vệ hệ sinh thái ven biển và chống xói mòn.",
      requirements: "Sức khỏe tốt, có thể di chuyển bằng thuyền và làm việc ngoài trời cả ngày"
    },
    {
      id: 6,
      type: "Tái chế rác thải",
      title: "Workshop tái chế đồ thủ công tại Nhà Văn hóa Quận 7",
      location: "Nhà Văn hóa Quận 7, TP.HCM",
      date: "28/06/2025",
      time: "09:00 - 15:00",
      volunteers: "15/20",
      contact: {
        name: "Ngô Thị Mai",
        phone: "0852 963 741",
        email: "mai.ngo@q7culture.gov.vn"
      },
      description: "Hướng dẫn người dân tái chế rác thải thành các sản phẩm thủ công hữu ích.",
      requirements: "Có kỹ năng thủ công hoặc kinh nghiệm làm đồ tái chế"
    }
  ]);

  const missionTypes = ["Tất cả", "Trồng cây xanh", "Tái chế rác thải", "Vệ sinh trường học", "Giáo dục môi trường"];
  const [selectedType, setSelectedType] = useState("Tất cả");

  const getTypeColor = (type) => {
    const colors = {
      "Trồng cây xanh": "#4CAF50",
      "Tái chế rác thải": "#2196F3",
      "Vệ sinh trường học": "#FF9800",
      "Giáo dục môi trường": "#9C27B0"
    };
    return colors[type] || "#01bbbf";
  };

  const getVolunteerStatus = (volunteers) => {
    const [current, total] = volunteers.split('/').map(Number);
    const percentage = (current / total) * 100;
    if (percentage >= 80) return { status: "Sắp đầy", color: "#FF5722" };
    if (percentage >= 50) return { status: "Đang tuyển", color: "#FF9800" };
    return { status: "Cần nhiều người", color: "#4CAF50" };
  };

  const selectedMission = id ? missions.find(m => m.id === Number(id)) : null;
  const filteredMissions = selectedType === "Tất cả" ? missions : missions.filter(mission => mission.type === selectedType);
  const totalVolunteers = missions.reduce((total, mission) => {
    const [current] = mission.volunteers.split('/');
    return total + parseInt(current);
  }, 0);

  return (
    <div style={{
      fontFamily: '"Roboto", serif',
      '--primary-color': '#01bbbf',
      '--text-dark': '#1d293d',
      '--text-light': '#62748e',
      '--extra-light': '#fafafa',
      '--white': '#ffffff',
      '--max-width': '1400px'
    }}>
      <section style={{
        maxWidth: 'var(--max-width)',
        margin: 'auto',
        padding: '6rem 2rem'
      }}>
        {selectedMission ? (
          <MissionDetail mission={selectedMission} getTypeColor={getTypeColor} getVolunteerStatus={getVolunteerStatus} />
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{
                marginBottom: '1rem',
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--primary-color)'
              }}>
                Nhiệm vụ xanh
              </h3>
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem'
              }}>
                Hãy cùng thực hiện những "nhiệm vụ" vì môi trường
              </h2>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: '500',
                color: 'var(--text-light)',
                lineHeight: '2rem',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Tham gia các hoạt động tình nguyện bảo vệ môi trường tại các địa điểm trong thành phố.
                Mỗi đóng góp nhỏ của bạn sẽ tạo nên sự thay đổi lớn cho cộng đồng.
              </p>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '3rem',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <MissionStats totalVolunteers={totalVolunteers} />
              <MissionFilter missionTypes={missionTypes} selectedType={selectedType} setSelectedType={setSelectedType} />
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {filteredMissions.map((mission) => (
                <MissionCard
                  key={mission.id}
                  mission={mission}
                  getTypeColor={getTypeColor}
                  getVolunteerStatus={getVolunteerStatus}
                />
              ))}
            </div>
            <CallToAction />
          </>
        )}
      </section>
    </div>
  );
};

export default GreenMission;