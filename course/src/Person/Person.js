import React from 'react';

// Stateless component, ook wel dumb component genoemd aangezien ze iets presenteren, iets outputten & geen interne logica hebben.
export const person = (props) => {
    return (
        <div onClick={props.click}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input
                type="text" onChange={props.changed}
                value={props.name} />
        </div>
    );
}