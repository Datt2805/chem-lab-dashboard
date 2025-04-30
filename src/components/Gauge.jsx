import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Gauge = ({ value, max }) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <CircularProgressbar
      value={percentage}
      text={`${Math.round(percentage)}%`}
      styles={buildStyles({
        pathColor: percentage > 75 ? 'red' : 'green',
        textColor: '#000',
      })}
    />
  );
};

export default Gauge;