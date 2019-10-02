import React from 'react';

export const validation = ({inputLength}) => {
    let text = <p>Text too short!</p>;

    if (inputLength >= 5)
        text = <p>Text long enough!</p>;

    return (
        <div>
            {text}
        </div>
    );
}