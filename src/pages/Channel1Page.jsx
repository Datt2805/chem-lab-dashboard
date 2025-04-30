import React, { useEffect, useState } from 'react';
import { fetchChannelData } from '../services/thingSpeakService';
import GasCard from '../components/GasCard';

const Channel1Page = () => {
    const gases = ['Methane (CH₄)', 'CO₂', 'NH₃', 'Hydrogen (H₂)'];
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const res = await fetchChannelData(2903902);
            const feed = res.feeds[0];
            const fields = Object.values(feed).filter((_, i) => i >= 1 && i <= gases.length);

            const result = {};
            gases.forEach((gas, idx) => {
                result[gas] = parseFloat(fields[idx]) || 0;
            });
            setData(result);
        };

        getData();
        const interval = setInterval(getData, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(data).map(([gas, value]) => (
                <GasCard key={gas} gasName={gas} value={value} />
            ))}
        </div>
    );
};

export default Channel1Page;