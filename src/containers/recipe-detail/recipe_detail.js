import React, { Component } from 'react';
import { connect } from 'react-redux';
import './recipe_detail.css'

class RecipeDetail extends Component {

  render() {
    console.log(typeof this.props.match.params.id); // string
    const recipe = this.props.recipes.find(recipe => parseInt(this.props.match.params.id, 10)===recipe.id);
    console.log(recipe);

    if (!recipe) {
      return (<div>No Recipe</div>)
    }

    const { imageUrl, ingredients, name, instructions, recipeAuthor, recipeUrl, servingsNumber } = recipe;

    return (
      <div className="container">
        <div className="row m-t-4">

        <div className="detail container">
          <div className="col-md-8">
            <img className="img-responsive center-block" src={imageUrl} alt="recipe"/>
          </div>
          <div className="col-md-4 align-middle title">
            <h1>{name}</h1>
            <p>Recipe By: <a href={recipeUrl}>{recipeAuthor}</a> </p>
            <p>Serves: {servingsNumber} </p>
            {/* save */}
            {/* edit */}
          </div>

        </div>

          <div className="information container">
            <div className="col-md-12 info-sub">
              <h2>Ingredients</h2>
              <ul>
                {ingredients.map(ingr => ( <li>{ingr}</li>))}
              </ul>
            </div>
            <div className="col-md-12 info-sub">
              <h2>Instructions</h2>
              {instructions.map(instr => (<div><h3>{instr.heading}</h3><ol>{instr.steps.map(step => (<li>{step}</li>)
            )}</ol></div>))}
            </div>
          </div>
        </div>

      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeDetail);
