import React from 'react';
import './App.css';
import { userInput as UserInput } from './UserInput/UserInput';
import { userOutput as UserOutput } from './UserOutput/UserOutput';

export class App extends React.Component {
  state = {
    uName: 'Danalo'
  }

  inputChangedHandler = (event) => {
    this.setState ({
      uName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UserInput
            changed={this.inputChangedHandler}
            cName={this.state.uName} />
          <UserOutput
            uName={this.state.uName} />
          <UserOutput
            uName="Dana" />
          <UserOutput
            uName={this.state.uName} />
        </header>
      </div>
    );
  }
}
