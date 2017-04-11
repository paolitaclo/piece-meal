import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe_detail.css'

class RecipeDetail extends Component {

  render() {
    if (! this.props.recipe) {
      return (<div>No Recipe</div>)
    }
    const { name, imageUrl, ingredients, instructions } = this.props.recipe;
    return (
      <div className="row m-t-4">
        <div className="col-md-12">
          <img className="img-responsive center-block" src={this.recipeRetrieval} alt="recipe"/>
          <h2>{name}</h2>
          <div>Ingredients: {ingredients}</div>
          <div>instructions: {instructions}</div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    recipe: state.activeRecipe
  }
}

export default connect(mapStateToProps)(RecipeDetail);
