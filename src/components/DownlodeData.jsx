import React, { useEffect, useState } from 'react';
import { fetchChannelData } from '../services/thingSpeakService';
import { channels } from '../utils/channels';

const DownlodeData = () => {
    const [sensorData, setSensorData] = useState({});
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleDownload = () => {
        if (!sensorData || Object.keys(sensorData).length === 0) return;

        const headers = Object.keys(sensorData).join(',');
        const values = Object.values(sensorData).join(',');
        const csvContent = `${headers}\n${values}`;

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'air_quality_data.csv';
        link.click();
    };

    if (loading) return null;

    return (
        <div className="flex justify-end mb-4">
            <div className="flex items-center gap-4 mr-9">
                <button
                    className="text-black bg-blue-500 rounded-2xl border-none px-8 py-3 font-semibold cursor-pointer transition delay-100 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
                    onClick={handleDownload}
                >
                    <i className="fa fa-download"></i> Download
                </button>
            </div>
        </div>
    );
};

export default DownlodeData;
