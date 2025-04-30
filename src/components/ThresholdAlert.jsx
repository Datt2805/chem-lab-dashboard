import React from 'react';
import { thresholds } from '../utils/thresholds';

const ThresholdAlert = ({ gasName, value }) => {
  if (value <= thresholds[gasName]) return null;

  return <p className="text-sm text-red-600 font-bold">⚠ {gasName} level exceeded threshold!</p>;
};

export default ThresholdAlert;
