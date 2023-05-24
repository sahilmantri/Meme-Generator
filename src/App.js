import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Meme from './Components/Meme'


class App extends Component {
  render() {
    return (
      <div className='comp'>
      <div className="App">
        <Header/>
        <Meme/>
      </div>
      </div>
    );
  }
}

export default App;
