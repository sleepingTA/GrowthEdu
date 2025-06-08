import React from 'react';
import aboutImage from '../assets/tnv.png';

const Story = () => {
  return (
    <section class="about" id="about">
      <div class="section__container about__container">
        <div class="about__image">
          <img src={aboutImage} alt="about" />
        </div>
        <div class="about__content">
          <h2 class="section__header">
            Cùng chung tay góp sức vì một <span>"Trường Xanh"</span>. Nơi chúng ta
            cùng nhau phát triển.
          </h2>
          <p class="section__description">
            Tại chủ đề Trường Xanh, chúng tôi tin rằng mỗi hành trình là một câu chuyện chờ được kể. Dù bạn đang tìm kiếm sự yên bình của thiên nhiên, vẻ đẹp của những ngôi trường xanh mát, hay niềm vui khám phá các giá trị giáo dục mới, chúng tôi ở đây để biến giấc mơ của bạn thành hiện thực. Vậy còn chờ đợi gì nữa? Chuẩn bị hành trang, bước ra khỏi vùng an toàn, và để Trường Xanh dẫn dắt bạn đến trải nghiệm tuyệt vời tiếp theo!
          </p>
          <div class="about__signature">Growth Edu</div>
        </div>
      </div>
    </section>
  );
};

export default Story;