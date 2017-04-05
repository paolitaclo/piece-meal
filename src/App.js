import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './components/navigation_bar';
import CreateProfileForm from './components/create_profile_form';
// import FoodResults from './components/food_results';


class App extends Component {
  constructor(props) {
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
        <div className="container">
          <CreateProfileForm />
        </div>
      </div>
    );
  }
}

export default App;
