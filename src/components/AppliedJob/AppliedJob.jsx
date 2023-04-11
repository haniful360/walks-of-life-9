import React, { useState } from 'react';
import './AppliedJob.css'
import { useLoaderData } from 'react-router-dom';
import JobReview from '../JobReview/JobReview';

const AppliedJob = () => {
    const featureData = useLoaderData();
    // console.log(featureData);
    const [appliedJob, setAppliedJob] = useState(featureData);


    const handleBtn = (e) => {
        let word = e.target.value;
        if(word === "Remote"){
            const filtered = featureData.filter(item => item.jobType.A ==="Remote")
            setAppliedJob(filtered);

        }
        else if(word === "Onsite"){
            const filtered = featureData.filter(item => item.jobType.A ==="Onsite")
            setAppliedJob(filtered);
        }
    }
    return (
        <div className='lg:w-[1280px] mx-auto'>

            <h3 className='applied-job-title'>Applied Jobs:{featureData.length}</h3>
            <div className='flex items-center justify-end gap-2'>
                <button value="Remote" onClick={handleBtn} className='remote' >Remote</button>
                <button value="Onsite" onClick={handleBtn} className='onsite'>Onsite</button>
            </div>
            <div className='px-2 lg:px-0'>
                {
                    appliedJob.map(feature => <JobReview
                        key={feature.id}
                        feature={feature}
                    >
                    </JobReview>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;