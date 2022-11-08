import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorimg from '../../assets/images/error/Frame.png';
const Error = () => {
    const error = useRouteError()
    return (
        <div >
           
            <img className='m-auto my-8' src={errorimg} alt="" />
            <div className='text-center text-xl text-red-600'>
                <h5>Ops ! An Error Ocurred</h5>
                {error &&(
                    <div>
                    <p className=''>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    
                    </div>
                )}
            </div>
        </div>
    );
};

export default Error;