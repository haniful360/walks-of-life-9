import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const JobReview = ({ feature }) => {
    const { id, name, img, jobType, jobTitle, salary, contact } = feature;
    return (
        <div className='lg:flex justify-between items-center p-4 job-review lg:w-[1280px] mx-auto border rounded-md mt-6'>
            <div className='flex justify-center items-center gap-6'>
                <div className='bg-[#F4F4F4] p-2 rounded-md block'>
                    <img className='lg:w-[200px]' src={img} alt="" />
                </div>
                <div>
                    <h5 className='job-title'>{jobTitle}</h5>
                    <p className='company-name'>  {name}</p>
                    <div className='flex lg:gap-3 gap-1'>
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
                </div>
            </div>
            <Link to={`/feature/${id}`}><button className="view-btn block mx-auto mt-4">view details</button></Link>
        </div>
    );
};

export default JobReview;