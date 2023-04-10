import React from 'react';
import Headers from '../Headers/Headers';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;