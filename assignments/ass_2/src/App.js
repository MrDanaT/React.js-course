import React from 'react';
import './App.css';
import { validation as Validation } from './Validation/Validation';
import { char as Char } from './Char/Char';

export class App extends React.Component {
  state = {
    userInput: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
    console.log(this.state.userInput.length);
  }

  deleteCharHandler = (idx) => {
    const charList = this.state.userInput.split('');
    charList.splice(idx, 1);
    this.setState({userInput: charList.join('')});
  }

  render() {
    const charList = this.state.userInput.split('').map((ch, idx) => {
      return <Char
        character={ch}
        key={idx}
        clicked={this.deleteCharHandler.bind(this, idx)} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <input type="text"
            onChange={this.inputChangedHandler}
            value={this.state.userInput} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          <div>
            {charList}
          </div>
        </header>
      </div>
    );
  }
}
