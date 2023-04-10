import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { name, job, img } = category;
    return (
        <div className='background py-8 px-12 category rounded-lg'>
            <div className='w-[70px] h-[70px] bg-img flex items-center justify-center'>
                <img src={img} />
            </div>
            <h5 className='name mt-8 mb-2'>{name}</h5>
            <p className='available-job'>{job}</p>
        </div>
    );
};

export default Category;