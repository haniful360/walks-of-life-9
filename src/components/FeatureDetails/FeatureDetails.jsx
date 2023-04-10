import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FeatureDetails = () => {
    const params = useParams();
    let data = useLoaderData();
    // console.log(data);
    const [feature, setFeature] = useState({});

    console.log(data);

    return (
        <div>
            <h2>{params.featureId}</h2>
            {feature.name}
        </div>
    );
};

export default FeatureDetails;