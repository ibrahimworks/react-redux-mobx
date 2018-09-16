import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import singleton from './Mobxredux';
import { Provider } from 'mobx-react';
import  Message  from './Message';
import { observer } from 'mobx-react';


@observer
class App extends Component {

  constructor(props) {
   super(props);
      this.state = {nbrMessage:0};

    }

  render() {
    return (
  <Provider BirdStore={singleton}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nember of Message {singleton.messageCount}</h1>
        </header>
        <div className="App-intro">
           <Message />
        </div>
      </div>
  </Provider>
    );
  }
}

export default App;
