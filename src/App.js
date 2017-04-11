import React, { Component } from 'react';
import './style/App.css';

import NavigationBar from './containers/navigation-bar/navigation_bar';
import CreateProfileForm from './containers/create-profile-form/create_profile_form';
import RecipeList from './containers/recipe-list/recipe_list';
import RecipeDetail from './containers/recipe-detail/recipe_detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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


  // const homePage = ({path, text}) => {
  //   return (
  //     <li><Link to='/{path}'>{text}</Link></li>
  //   )
  // }
  //
  // const mapStateToProps = (state) => {
  //   return {
  //     path: state.path
  //   }
  // }

  // const statefulHomePage = connect(mapStateToProps)(homePage) ;

  render() {

    return (
      <Router>
        <div>
          <Route exact path='/' component={NavigationBar} />
          <Route exact path='/' component={RecipeList} />
          <Route exact path='/create_profile' component={NavigationBar} />
          <Route exact path='/create_profile' component={NavigationBar, CreateProfileForm} />

        </div>
      </Router>

      // <Router>
      //   <div className="App">
      //     <NavigationBar profile={this.state.profile} onCreateProfile={this.onCreateProfile}/>
      //     <div className="container">
      //       <CreateProfileForm />
      //     </div>
      //     <div className="container">
      //       <RecipeList />
      //       <RecipeDetail />
      //     </div>
      //   </div>
      // </Router>
    );
  }
}

export default App;
