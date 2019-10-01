import React, { Component } from 'react';
import { person as Person } from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age:28 },
      { name: 'Manu', age:29 },
      { name: 'Stephanie', age:26}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Paragraph!</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
