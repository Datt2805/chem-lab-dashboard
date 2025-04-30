import React, { useEffect, useState } from 'react';
import { fetchChannelData } from '../services/thingSpeakService';
import { channels } from '../utils/channels';
import GasCard from "../components/GasCard"

const DashboardPage = () => {
    const [sensorData, setSensorData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const allData = {};

            for (const channel of channels) {
                const data = await fetchChannelData(channel.id);
                const feed = data.feeds[0];
                const fields = Object.values(feed).filter((_, i) => i >= 1 && i <= channel.gases.length);

                channel.gases.forEach((gas, idx) => {
                    allData[gas] = parseFloat(fields[idx]) || 0;
                });
            }

            setSensorData(allData);
        };

        fetchData();
        const interval = setInterval(fetchData, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(sensorData).map(([gas, value]) => (
                <GasCard key={gas} gasName={gas} value={value} />
            ))}
        </div>
    );
};

export default DashboardPage;