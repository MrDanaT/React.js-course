import React from 'react';

export const person = (props) => {
    return (
   <div>
        <p>I'm {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
   </div>
    );
}