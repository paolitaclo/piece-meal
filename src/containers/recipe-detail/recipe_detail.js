import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeDetail extends Component {
  render() {
    if (!this.props.recipe) {
    return (<div>No recipes</div>);
  }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Recipe Title: {this.props.recipe.name}</div>
        <div>Image: <img src={this.props.recipe.imageUrl} alt="recipe image"/></div>
        <div>Ingredients: {this.props.recipe.ingredients}</div>
        <div>instructions: {this.props.recipe.instructions}</div>
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
