import React from 'react';

const Category = ({ category }) => {
    const { name, job, img } = category;
    return (
        <div>
            <img src={img} />
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    );
};

export default Category;