import React from 'react';

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
            name: 'Ass-1',
            number: 60,
            id: 101,
            amt: 1400,
            cnt: 490,
        },
        {
            name: 'Ass-2',
            number: 60,
            id: 201,
            amt: 1506,
            cnt: 590,
        },
        {
            name: 'Ass-3',
            number:59,
            id: 301,
            amt: 989,
            cnt: 350,
        },
        {
            name: 'Ass-4',
            number: 60,
            id: 401,
            amt: 1228,
            cnt: 480,
        },
        {
            name: 'Ass-5',
            number: 58,
            id: 501,
            amt: 1100,
            cnt: 460,
        },
        {
            name: 'Ass-6',
            number: 60,
            id: 601,
            amt: 1700,
            cnt: 380,
        },
    ];
    return (
        <div>
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="id" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="number" stroke="#ff7300" />
                <Scatter dataKey="" fill="red" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;