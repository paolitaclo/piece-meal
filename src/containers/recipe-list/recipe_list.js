import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';
// import { bindActionCreators } from 'redux';
// import { selectRecipe } from '../../actions/index';
import './recipe_list.css'

class RecipeList extends Component {

  render() {
    const { recipes } = this.props;
    return (
      <div className="container">
        <div className="row">
          {recipes.map( (recipe) => {
            return (
              <Recipe
                key={recipe.id}
                // onClick={() => selectRecipe(recipe)}
                {...recipe}
              />)}
            ) }
          </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  console.log('state from recipeList', state);
  return {
    recipes: state.search.results.recipes
  };
}
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectRecipe }, dispatch)
// }


export default connect(mapStateToProps)(RecipeList);
