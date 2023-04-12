import React from 'react';
import './Statistics.css'

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,

} from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: 101,
            name: 'Ass-1',
            mark: 60,
            minus: 0
        },
        {
            id: 201,
            name: 'Ass-2',
            mark: 60,
            minus: 0
        },
        {
            id: 301,
            name: 'Ass-3',
            mark: 59,
            minus: 1
        },
        {
            id: 401,
            name: 'Ass-4',
            mark: 60,
            minus: 0
        },
        {
            id: 501,
            name: 'Ass-5',
            mark: 58,
            minus: 2

        },
        {
            id: 601,
            name: 'Ass-6',
            mark: 60,
            minus: 0
        },
        {
            id: 701,
            name: 'Ass-7',
            mark: 60,
            minus: 0
        },
    ];
    return (
        <div className=''>
            <div className='chart-title composed-bg-img'>
                <h1>ComposedChart</h1>
            <h1>Assignment Mark</h1>
            </div>
            <div className='flex justify-center items-center'>
                <ComposedChart
                    width={600}
                    height={400}
                    data={data}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis dataKey="mark" />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="minus" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="mark" stroke="#ff7300" />
                    <Scatter fill="red" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;