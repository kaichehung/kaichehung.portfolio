import React, { Component } from 'react';
import SnakeGame from './containers/SnakeGame';
import './App.css';

class App extends Component {
  render() {
    return (      
      <div className="subApp">
        <SnakeGame />
      </div>
    );
  }
}

export default App;
