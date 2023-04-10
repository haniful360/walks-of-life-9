import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';
import './Features.css'

const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div>
            <div className='features-container'>
                {
                    features.map(feature => <Feature
                    key={feature.id}
                    feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;