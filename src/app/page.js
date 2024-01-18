import Services from '@/components/Services/Services';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Banner from '@/Components/Banner/Banner';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  )
}
export default HomePage;
