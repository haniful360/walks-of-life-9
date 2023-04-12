import React, { useState } from 'react';
import './AppliedJob.css'
import { useLoaderData } from 'react-router-dom';
import JobReview from '../JobReview/JobReview';

const AppliedJob = () => {
    const featureData = useLoaderData();
    const [appliedJob, setAppliedJob] = useState(featureData);

    const handleBtn = (e) => {
        let word = e.target.value;
        if (word === "All") {
            setAppliedJob(featureData);
        }
        else if (word === "Remote") {
            const filtered = featureData.filter(item => item.jobType.A === "Remote")
            setAppliedJob(filtered);

        }
        else if (word === "Onsite") {
            const filtered = featureData.filter(item => item.jobType.A === "Onsite")
            setAppliedJob(filtered);
        }
    }
    return (
        <div className=''>
            <h3 className='applied-job-title applied-bg-img'>Applied Jobs</h3>
            <div className='lg:w-[1280px] mx-auto'>
                <div className='flex items-center justify-end gap-2'>
                    <select onChange={handleBtn} className='filter'>
                        <option defaultValue='selected' >Filter By</option>
                        <option value="All">All Job</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
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
        </div>
    );
};

export default AppliedJob;