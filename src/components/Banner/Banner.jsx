import React from 'react';
import person from '../../images/person.png';

const Banner = () => {
    return (
        <div className='bg-red-200'>
            <div className='md:flex justify-center items-center w-[1280px] mx-auto'>
                <div>
                    <h1>One Step Closer To Your Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button>Get Started</button>
                </div>
                <div className='w-3/4'>
                    <img src={person} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;