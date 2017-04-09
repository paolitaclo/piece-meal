import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './components/navigation_bar';
import CreateProfileForm from './components/create_profile_form';
import RecipeList from './components/recipe_list';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'Create Profile',//this will change to userName 'Paola'
      recipes: [
        {
          id: 1,
          name: 'Fried Chicken Sandwich',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: '1.Preheat oven to 450F.2.In a small bowl, combine brown rice flour, water, garlic powder and salt. Mix thoroughly with a whisk.',
          imageUrl: 'http://www.inspiredtaste.net/wp-content/uploads/2013/01/Lasagna-Recipe-1-1200.jpg'
        },
        {
          id:2,
          name: 'Lasagna',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf',
          imageUrl: 'http://www.inspiredtaste.net/wp-content/uploads/2013/01/Lasagna-Recipe-1-1200.jpg'
        },
        {
          id:3,
          name: 'Turkey Meatloof',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf',
          imageUrl: 'http://www.inspiredtaste.net/wp-content/uploads/2013/01/Lasagna-Recipe-1-1200.jpg'
        },
        {
          id:4,
          name: 'Pad Thai',
          ingredients: ['chicken', 'bread', 'flour', 'eggs'],
          instructions: 'odshfofiwerwsdcsdgwefdssdfsefewrfc sfdsdf',
          imageUrl: 'http://www.inspiredtaste.net/wp-content/uploads/2013/01/Lasagna-Recipe-1-1200.jpg'
        }
      ],
      recipeSelected: {},
      indexSelected: null,
      onHide: false
    };
  }
  onClickRecipe=(recipe, recipeIndex) => {
    this.setState({indexSelected: recipeIndex});
  }

  onCreateProfile=()=> {
    this.setState({
      profile: 'Paola'
    })
  }
  // API Call for ingredientSearch
  // ingredientSearch(term) {
  //
  // }

  render() {
    return (
      <div className="App">
        <NavigationBar profile={this.state.profile} onCreateProfile={this.onCreateProfile}/>
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
