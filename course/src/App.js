import React, { Component } from 'react';
import { person as Person } from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Paragraph!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My hobbies: Racing</Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
