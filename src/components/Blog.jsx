import React from 'react';
import Button from './Button';
import blog1 from '../assets/blog-1.png';
import blog2 from '../assets/blog-2.png';
import blog3 from '../assets/blog-3.png';

import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section class="blog" id="blog">
      <div class="section__container blog__container">
        <h3 class="section__subheader">Blogs</h3>
        <h2 class="section__header">Những tin tức và blog</h2>
        <div class="blog__grid">
          <div class="blog__card">
            <img src={blog1} alt="blog" />
            <div class="blog__content">
              <h4>Trường xanh và những "người hùng" mang trong mình chiếc áo học sinh</h4>
              <button class="btn">
                Đọc thêm
                <span><i class="ri-arrow-right-long-line"></i></span>
              </button>
            </div>
          </div>
          <div class="blog__card">
            <img src={blog2} alt="blog" />
            <div class="blog__content">
              <h4>Trường học xanh là gì ? Cùng tìm hiểu về trường xanh</h4>
              <button class="btn">
                Đọc thêm
                <span><i class="ri-arrow-right-long-line"></i></span>
              </button>
            </div>
          </div>
          <div class="blog__card">
            <img src={blog3} alt="blog" />
            <div class="blog__content">
              <h4>
                Trường xanh và những mục tiêu bền vững trong giáo dục
              </h4>
              <button class="btn">
                Đọc thêm
                <span><i class="ri-arrow-right-long-line"></i></span>
              </button>
            </div>
          </div>
        </div>
        <div class="blog__btn">
          <button class="btn" onClick={() => navigate('/blog')}>
            Xem tất cả
            <span><i class="ri-arrow-right-long-line"></i></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;