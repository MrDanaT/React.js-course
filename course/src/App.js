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

  buttonClickHandler = (newName) => {
    // console.log("I'm clicked!");
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  };

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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Paragraph!</p>

        <button
          onClick={this.togglePersonHandler}
          style={styling}>Switch Name</button>
        {this.state.showPersons ? <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.buttonClickHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div> : null}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  };
}

export default App;
