import React, { Component } from 'react';
import Header from './Header'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <main>
        <Header currentUser={this.state.currentUser}/>
      </main>
    )
  }
}

export default App;
