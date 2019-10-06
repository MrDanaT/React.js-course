import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

// Stateful-, smart-, container component
class App extends Component {
  state = {
    persons: [
      { id: 'azertyuiop', name: 'Max', age: 28 },
      { id: 'qsdfghjklm', name: 'Manu', age: 29 },
      { id: 'wxcvbn', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonHandler = (param) => {
    // const persons = this.state.persons.slice(); // Copies array.
    const persons = [...this.state.persons];
    persons.splice(param, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.find(el => {
      return el.id === id
    });

    const person = { ...this.state.persons[personIdx] };
    // const person = Object.assign({}, this.state.persons[personIdx]);

    person.name = event.target.value;

    // const persons = [...this.state.persons];
    const persons = this.state.persons.slice();

    persons[personIdx] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  render() {
    const styling = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          )}
        </div>);

      styling.backgroundColor = 'red';
    };

    const assignedClasses = [];

    if (this.state.persons.length <= 2)
    assignedClasses.push(classes.red);  // classes = ['red']

    if (this.state.persons.length <= 1)
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>Paragraph!</p>

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
