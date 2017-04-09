import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './components/navigation_bar';
import CreateProfileForm from './components/create_profile_form';
import RecipeList from './components/recipe_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          name: 'Fried Chicken Sandwich',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf'
        },
        {
          name: 'Lasagna',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf'
        },
        {
          name: 'Turkey Meatloof',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf'
        },
        {
          name: 'Pad Thai',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf'
        }
      ],
      recipeSelected: {}
    };
  }
  onClickRecipe=(recipe) => {
    console.log(recipe);
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
        <div>
          <RecipeList recipes={this.state.recipes} onClickRecipe={this.onClickRecipe}/>
        </div>
      </div>
    );
  }
}

export default App;
