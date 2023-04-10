import React from 'react';
import person1 from '../../images/person1.png';
import './Banner.css'
import CategoryList from '../CategoryList/CategoryList';

const Banner = () => {
    return (
        <div>
            <div className='background'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center w-[1280px] mx-auto py-32'>
                    <div>
                        <h1 className='banner-title'>One Step <br /> Closer To Your <span className='text-linear  text-transparent '>Dream Job</span></h1>
                        <p className='banner-describe'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="get-started-btn text-white font-bold  rounded capitalize text-[20px]">
                        <span className="">Get Started</span>
                    </button>
                    </div>
                    <div className='banner-img'>
                        <img  src={person1} alt="" />
                    </div>
                </div>

            </div>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Banner;