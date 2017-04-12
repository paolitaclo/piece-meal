import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/App.css';

import NavigationBar from './containers/navigation-bar/navigation_bar';
import CreateForm from './containers/create-profile-form/create_profile_form';
import RecipeList from './containers/recipe-list/recipe_list';
import Recipe from './containers/recipe-list/recipe';
import RecipeDetail from './containers/recipe-detail/recipe_detail';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'Create Profile',
      indexSelected: null,
      onHide: false
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={NavigationBar} />
          <Route exact path='/' component={RecipeList} />
          <Route exact path='/' component={Recipe} />
          <Route exact path='/create_profile' component={NavigationBar} />
          <Route exact path='/create_profile' component={CreateForm} />
          <Route exact path='/recipe/:id' component={NavigationBar} />
          <Route exact path='/recipe/:id' component={RecipeDetail} />
        </div>
      </Router>

    );
  }
}

// export default App;
