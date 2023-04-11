import React from 'react';
import './AppliedJob.css'
import { useLoaderData } from 'react-router-dom';
import JobReview from '../JobReview/JobReview';

const AppliedJob = () => {
    const featureData = useLoaderData()
    // console.log(feature);
    return (
        <div>
        <h3 className='applied-job-title'>Applied Jobs:{featureData.length}</h3>
            <div className='px-2 lg:px-0'>
                {
                    featureData.map(feature => <JobReview
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