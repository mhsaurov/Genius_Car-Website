import React from 'react';
import { FaRegClock,FaPhoneAlt,FaSearchLocation} from "react-icons/fa";

const Contact = () => {
    return (
        <div className='py-40' id='contact'>
           <div className='grid grid-cols-1 gap-3 p-7 md:grid-cols-2 lg:flex justify-evenly bg-black  py-20 rounded'>
           <div className='flex items-center mt-2 '>
            <FaRegClock className=' text-orange-200 text-3xl  rounded-full'></FaRegClock>
           <div className='ml-3 text-white '>
            <p>We are open monday-friday</p>
            <h2 className='font-bold'>7:00 am - 9:00 pm</h2>
           </div>
           </div>
           <div className='flex items-center mt-2 '>
            <FaPhoneAlt className=' text-orange-200 text-3xl  rounded-full'></FaPhoneAlt>
           <div className='ml-3 text-white '>
            <p>Have a question?</p>
            <h2 className='font-bold'>+2546 251 2658</h2>
           </div>
           </div>
           <div className='flex items-center mt-2 '>
            <FaSearchLocation className=' text-orange-200 text-3xl  rounded-full'></FaSearchLocation>
           <div className='ml-3 text-white '>
            <p>Need a repair? our address</p>
            <h2 className='font-bold'>Liza Street, New York</h2>
           </div>
           </div>
        

           </div>
        </div>
    );
};

export default Contact;