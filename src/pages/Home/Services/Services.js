import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Servicescard from '../../Servicescard';

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(()  =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
       <div>
            <div className='text-center py-3' id='services'>
                <p className=" font-bold text-orange-600 py-4">Services</p>
                <h1 className='text-3xl font-bold '>Our Service Area</h1>
                <p className='text-gray-500 w-1/2 m-auto'>the majority have suffered alteration in some form, by injected humour,  or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 mx-10'>
               
                {
                    services.map(service => <Servicescard 
                     key={service._id}
                     service={service}
                    ></Servicescard>)
                }
            </div>
           <div className='text-center my-6 '>
            <Link to= '/'><button className="bg-orange-500 py-2 px-3 rounded font-bold text-white">More services</button></Link>
           </div>
       </div>
        
    );
};

export default Services;