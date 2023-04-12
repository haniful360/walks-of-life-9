import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import './FeatureDetails.css'
import { AiOutlineDollarCircle, AiOutlineMail,AiFillProject } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { addToDb } from '../../utilities/fakedb';

const FeatureDetails = () => {
    const params = useParams();
    let loaderData = useLoaderData();
    const [details, setDetails] = useState({});



    useEffect(() => {
        if (loaderData) {
            const dataDetails = loaderData.find(data => data.id === params.featureId)
            setDetails(dataDetails);
        }
    }, [])

    const handleApplyNow = (id) => {
        addToDb(id)
    }

    return (
        <div>
            <h3 className='text-center job-details-title bg-img job-details-img'>Job Details</h3>
            <div className='w-[1280px] mx-auto mt-12'>
                <div className='job-details-container'>
                    <div className='job-info'>
                        <p><span className='font-bold'>Job Description</span>:{details.description}</p>
                        <p><span className='font-bold'>Job Responsibility</span>:{details.responsibility}</p>
                        <p><span className='font-bold'><p>Educational Requirements:</p> </span>{details.education}</p>
                        <p><span className='font-bold'> <p>Experience:</p> </span>{details.experiences}</p>
                    </div>
                    <div>
                        <div className='job-details '>
                            <h5 className='pb-2'>Job Details</h5>
                            <hr />
                            <div className='flex items-center gap-1'>
                                <AiOutlineDollarCircle></AiOutlineDollarCircle>
                                <p><span className='font-bold'>Salary</span>:{details.salary}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <AiFillProject></AiFillProject>
                                <p><span className='font-bold'> Job Title: </span>{details.jobTitle}</p>
                            </div>

                            <h5 className='my-2 pb-2'>Contact Information</h5>
                            <hr />
                            <div className='flex items-center gap-1'>
                                <BsTelephone></BsTelephone>
                                <p><span className='font-bold'> Phone: </span>{details.contact?.phone}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <AiOutlineMail></AiOutlineMail>
                                <p><span className='font-bold'> Email: </span>{details.contact?.email}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <CiLocationOn></CiLocationOn>
                                <p><span className='font-bold'> Address: </span>{details.contact?.address}</p>
                            </div>
                        </div>
                        {/* <Link to="/applied">
                        
                    </Link> */}
                        <button onClick={() => handleApplyNow(params.featureId)} className='apply-now-btn'>Apply Now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureDetails;