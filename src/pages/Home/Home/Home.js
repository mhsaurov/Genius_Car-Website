import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../ContactInfo/Contact';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Contact></Contact>
          <Products></Products>
        </div>
    );
};

export default Home;