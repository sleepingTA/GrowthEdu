import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BlogDetail from './pages/BlogDetail';
import Donate from './pages/Donation';
import GreenMission from './pages/GreenMission';

function App() {
  useEffect(() => {
    // Khởi tạo ScrollReveal
    if (window.ScrollReveal) {
      ScrollReveal().reveal('.section__container', {
        duration: 1000,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        delay: 200
      });
      ScrollReveal().reveal('.header__image', { origin: 'left', distance: '100px' });
      ScrollReveal().reveal('.header__content', { origin: 'right', distance: '100px' });
      ScrollReveal().reveal('.about__image', { origin: 'left', distance: '100px' });
      ScrollReveal().reveal('.about__content', { origin: 'right', distance: '100px' });
      ScrollReveal().reveal('.tour__card', { interval: 200, origin: 'bottom' });
      ScrollReveal().reveal('.destination__card', { interval: 200, origin: 'bottom' });
      ScrollReveal().reveal('.review__card', { interval: 200, origin: 'bottom' });
      ScrollReveal().reveal('.blog__card', { interval: 200, origin: 'bottom' });
    }

    // Khởi tạo Swiper
    if (window.Swiper) {
      new window.Swiper('.swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
      });
    }



  }, []);

  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/mission" element={<GreenMission />} />
          <Route path="/mission/:id" element={<GreenMission />} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;