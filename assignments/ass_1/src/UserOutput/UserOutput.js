import React from 'react';
import './UserOutput.css';

export const userOutput = ({uName}) => {
    return (
        <div className='UserOutput'>
         <p>Welcome: {uName}</p>
         <p>Random texts amplified!</p>
        </div>
    );
}