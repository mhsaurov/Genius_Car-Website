import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Servicescard = ({service}) => {
    const {name,img,price,title} = service;
    return (
        <div>
            <div>
            <div className="card card-compact w-96 h-96 borders ">
            <img className='p-5 C-rounded' src= {img} alt="services" />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            <div className='flex justify-between items-center'>
            <p className='text-left text-orange-500 font-bold'> Price: ${price}</p>
            <span> <FaArrowRight className='text-orange-500 hover:bg-orange-500 hover:text-white w-8 h-4 rounded-full cursor-pointer duration-500 '></FaArrowRight> </span>
            </div>
            </div>
            </div>
            </div>
          
        </div>
        
    );
};

export default Servicescard;