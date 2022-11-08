import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <div  className="hero my-20 " id='about'>
  <div className="hero-content flex-col lg:flex-row">
   <div className=' relative w-1/2'>
     <img src= {person} className=" w-4/5 h-full rounded-lg shadow-2xl" />
     <img src= {parts} className=" absolute right-5 top-1/2 w-3/5 border-5 rounded-lg shadow-2xl" />
   </div>

    <div className='w-1/2 mx-7'>
        <p className='text-red-500 font-bold'>About Us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6 text-slate-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className='text-slate-500 py-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <Link to= '/moreabout'><button className=" bg-orange-600 py-2 px-4 text-white rounded-lg font-bold my-3">Get More Info</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;