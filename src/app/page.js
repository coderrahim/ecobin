import Services from '@/components/Services/Services';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Services></Services>
      <Footer></Footer>
    </div>
  )
}
export default HomePage;
