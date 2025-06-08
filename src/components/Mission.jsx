import React from 'react';
import Button from './Button';
import plantImg from '../assets/plant.jpg';
import recycleImg from '../assets/recycle.jpg';
import schoolCleanImg from '../assets/schoolclean.jpg';
import eduImg from '../assets/edu.jpg';


const Mission = () => {
  return (
    <section class="section__container tour__container expanded-tour__container" id="mission">
      <h3 class="section__subheader">Nhiệm vụ xanh</h3>
      <h2 class="section__header">Hãy cùng thực hiện những "nhiệm vụ" vì môi trường</h2>
      <div class="tour__grid expanded-tour__grid">
        <div class="tour__card expanded-tour__card">
          <img src={plantImg} alt="mission" />
          <h4>Trồng cây xanh</h4>
          <p>15 Hoạt động+</p>
        </div>
        <div class="tour__card expanded-tour__card">
          <img src={recycleImg} alt="mission" />
          <h4>Tái chế rác thải</h4>
          <p>10 Hoạt động+</p>
        </div>
        <div class="tour__card expanded-tour__card">
          <img src={schoolCleanImg} alt="mission" />
          <h4>Vệ sinh trường học</h4>
          <p>18 Hoạt động+</p>
        </div>
        <div class="tour__card expanded-tour__card">
          <img src={eduImg} alt="mission" />
          <h4>Giáo dục môi trường</h4>
          <p>12 Hoạt động+</p>
        </div>
      </div>
      <div class="tour__btn expanded-tour__btn">
        <button class="btn">
          Xem tất cả
          <span><i class="ri-arrow-right-long-line"></i></span>
        </button>
      </div>
    </section>
  );
};

export default Mission;