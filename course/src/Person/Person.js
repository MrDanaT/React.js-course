import React from 'react';
import classes from './Person.css';

// Stateless component, ook wel dumb component genoemd aangezien ze iets presenteren, iets outputten & geen interne logica hebben.
const Person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name} />
        </div>
    );
}

export default Person;
