import React from 'react';
import { MdStar } from "react-icons/md";

const ProductsItems = ({product}) => {
    const {title,price,img} = product
    return (
        <div>
            <div className="card w-96 h-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src= {img} alt="Shoes" className="rounded-xl" />
            </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
   <div className='flex text-yellow-500'>
   <p> <MdStar></MdStar> </p>
    <p> <MdStar></MdStar> </p>
    <p> <MdStar></MdStar> </p>
    <p> <MdStar></MdStar> </p>
    <p> <MdStar></MdStar> </p>
   </div>
    <p className='text-left text-orange-500 font-bold'> Price: ${price}</p>
 
  </div>
</div>
        </div>
    );
};

export default ProductsItems;