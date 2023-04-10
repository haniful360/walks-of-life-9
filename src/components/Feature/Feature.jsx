import React from 'react';
import { Link } from 'react-router-dom';
import './Feature.css'
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollarCircle } from 'react-icons/ai';

const Feature = ({ feature }) => {
    const { id, name, img, jobType, jobTitle, salary, contact } = feature;
    return (
        <div className='feature'>
            <img src={img} alt="" />
            <h5 className='job-title'>{jobTitle}</h5>
            <p className='company-name'>  {name}</p>
            <div className='flex gap-3'>
                <button className='job-type'>{jobType.A}</button>
                <button className='job-type'>{jobType.B}</button>
            </div>
            <div className='flex items-center gap-3 location-salary'>
                <div className='flex gap-1 items-center my-2'>
                <CiLocationOn></CiLocationOn>
                <span>{contact.address}</span>
                </div>
                <div className='flex gap-1 items-center'>
                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                <span>Salary: {salary}</span>
                </div>
            </div>
            <Link to={`/feature/${id}` }><button className="view-btn">view details</button></Link>
        </div>
    );
};

export default Feature;