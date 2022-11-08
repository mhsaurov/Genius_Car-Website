import React from 'react';
import '../../../Utilisecss/Utilis.css'
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
   <div className='img-gradient '>
     <img src= {img1} className="w-full " />
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
     <h1 className='text-6xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
    </div>
    <div className="absolute flex justify-end lg:-mt-36 transform -translate-y-1/2 w-2/5 left-24 top-1/2">
     <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>
    <div className="absolute flex justify-start lg:-mt-96 transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className=" bg-orange-500 mr-4 p-2 font-sm-bold text-white rounded ">Discover More</button>
    <button className=" bg-orange-500  p-2 font-sm-bold text-white rounded ">Latest Project</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-4  "> ❮ </a> 
      <a href="#slide2" className="btn btn-circle"> ❯ </a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative height">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide3" className="btn btn-circle ">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative height">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative height">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative height">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative height">
    <img src={img6} className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;