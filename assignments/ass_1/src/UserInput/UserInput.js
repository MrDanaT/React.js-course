import React from 'react';

export const userInput = (props) => {
    const styling = {
        border: '2px solid black',
        backgroundColor: 'orange',
        width: 'auto'
    }
    return (
        <div style={styling}>
            <input
                type="text"
                onChange={props.changed}
                value={props.cName} />
        </div>
    );
}