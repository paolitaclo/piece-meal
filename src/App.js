import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './containers/navigation-bar/navigation_bar';
import CreateProfileForm from './containers/create-profile-form/create_profile_form';
import RecipeList from './containers/recipe-list/recipe_list';
import RecipeDetail from './containers/recipe-detail/recipe_detail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'Create Profile',//this will change to userName 'Paola'
      indexSelected: null,
      onHide: false
    };
  }

  onClickRecipe=(recipe, recipeIndex) => {
    this.setState({indexSelected: recipeIndex});
  };

  onCreateProfile=()=> {
    this.setState({
      profile: 'Paola'
    });
  }
  // API Call for ingredientSearch
  // ingredientSearch(term) {
  //
  // }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        {/* <NavigationBar profile={this.state.profile} onCreateProfile={this.onCreateProfile}/> */}
        <div className="container">
          <CreateProfileForm />
        </div>
        <div>
          <RecipeList />
          <RecipeDetail />
        </div>
      </div>
    );
  }
}

export default App;
