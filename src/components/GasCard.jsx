import React from 'react';
import { thresholds } from '../utils/thresholds';
import Gauge from './Gauge';
import ThresholdAlert from './ThresholdAlert';

const GasCard = ({ gasName, value }) => {
    const isDanger = value > thresholds[gasName];

    return (
        <div className={`p-4 rounded-xl shadow-md ${isDanger ? 'bg-red-100' : 'bg-green-100'}`}>
            <h3 className="text-m font-semibold mb-2">{gasName}</h3>
            <Gauge value={value} max={thresholds[gasName] * 2} />
            <p className="text-m mt-2">{value}</p>
            <ThresholdAlert gasName={gasName} value={value} />
        </div>
    );
};

export default GasCard;