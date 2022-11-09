import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsItems from './ProductsItems';


const Products = () => {

    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        
        <div  >
            <div>
            <div className='text-center py-3' id='services'>
                <p className=" font-bold text-orange-600 py-4">Popular Products</p>
                <h1 className='text-3xl font-bold '>Browse Our Products</h1>
                <p className='text-gray-500 w-1/2 m-auto'>the majority have suffered alteration in some form, by injected humour,  or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4 mx-10'>
          {
                products.map(product => <ProductsItems 
                 key={product._id}
                 product={product}
                ></ProductsItems>)
            }
          </div>
          <div className='text-center my-6 '>
            <Link to= '/'><button className="bg-orange-500 py-2 px-3 rounded font-bold text-white">More products</button></Link>
           </div>
        </div>
    );
};

export default Products;