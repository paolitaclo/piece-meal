import React, { Component } from 'react';
import { connect } from 'react-redux';
import Recipe from './recipe';
import StackGrid from "react-stack-grid";

import './recipe_list.css'

export class RecipeList extends Component {

  render() {
    const { recipes } = this.props;
    return (
      <div className="content">
        <StackGrid
          columnWidth={300}
          gutterWidth={5}
          gutterHeight={5}
          >
            {recipes.map( (recipe) => {
              return (
                <Recipe
                  key={recipe.id}
                  {...recipe}
                />)}
              ) }
        </StackGrid>
      </div>
      /* <div className="container">
        <div className="row">
          {recipes.map( (recipe) => {
            return (
              <Recipe
                key={recipe.id}
                {...recipe}
              />)}
            ) }
          </div>
      </div> */
    )
  }
};

function mapStateToProps(state) {
  console.log('state from recipeList', state);
  return {
    recipes: state.search.results.recipes
  };
}



export default connect(mapStateToProps)(RecipeList);
