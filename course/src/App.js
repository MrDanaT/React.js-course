import React, { Component } from 'react';
import './App.css';
import { person as Person } from './Person/Person';

// Stateful-, smart-, container component
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (inputIndex) => {
    const persons = this.state.persons;
    persons.splice(inputIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const styling = {
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)} />
          )}
        </div>
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Paragraph!</p>

        <button
          onClick={this.togglePersonHandler}
          style={styling}>Switch Name</button>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  };
}

export default App;
