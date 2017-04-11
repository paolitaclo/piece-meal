import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectRecipe } from '../../actions/index'
import Recipe from './recipe';
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
                onClick={()=> this.props.selectRecipe(recipe)}
                {...recipe}
              />)}
            ) }
          </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRecipe: selectRecipe}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
