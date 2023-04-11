import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css'
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const [features, setFeatures] = useState([]);

    const [noOfElement, setnoOfElement] = useState(4);
    const sliceFeature = features.slice(0, noOfElement)
    // const navigate = useNavigate();
    const handleSeeAllJob = () => {
        setnoOfElement(noOfElement + noOfElement)
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className='mb-24'>
            <div className='mb-8'>
                <h2 className='features-title'>Featured Jobs</h2>
                <p className='features-des'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='features-container'>
                {
                    sliceFeature.map(feature => <Feature
                        key={feature.id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
            <button onClick={() => handleSeeAllJob()} className='see-all-btn'>See All Jobs</button>
        </div>
    );
};

export default Features;