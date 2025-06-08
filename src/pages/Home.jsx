import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/Story';
import Mission from '../components/Mission';
import Destination from '../components/About';
import Donate from '../components/Donate';
import Blog from '../components/Blog';
import BannerGallery from '../components/BannerGallery';
import Footer from '../components/Footer';

const Home = () => (
  <>
   
    <Header />
    <About />
    <Mission />
    <Destination />
    <Donate />
    <Blog />
    <BannerGallery />
    
  </>
);

export default Home;