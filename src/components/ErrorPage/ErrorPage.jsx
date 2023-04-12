import React from 'react';
import notFound from '../../images/404.png'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center flex-col'>
            <img className='w-[500px] h-[400px] block' src={notFound} alt="" />
            <button onClick={()=>navigate('/')} className='go-back-btn text-white rounded text-[20px]'>Go Back</button>
        </div>
    );
};

export default ErrorPage;