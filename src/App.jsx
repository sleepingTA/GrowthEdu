import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/Story';
import Mission from './components/Mission';
import Destination from './components/About';
import Review from './components/Review';
import Blog from './components/Blog';
import BannerGallery from './components/BannerGallery';
import Footer from './components/Footer';
import Donate from './components/Donate';

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
      <Header />
      <About />
      <Mission />
      <Destination />
      <Donate />
      <Blog />
      <BannerGallery />
      <Footer />
    </>
  );
}

export default App;