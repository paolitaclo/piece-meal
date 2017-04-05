import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './components/navigation_bar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      recipes: []
    }
  }

  // API Call for ingredientSearch
  // ingredientSearch(term) {
  //
  // }

  render() {
    return (
      <div className="App">
        <NavigationBar />


      </div>
    );
  }
}

export default App;
