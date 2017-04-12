import React from 'react';
import { Link } from 'react-router-dom';
import './recipe_list.css'

class Recipe extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <div
        className="recipe-div col-xs-12 col-sm-6 col-md-4 p-y-15 ">
          <Link to={`/recipe/${id}`}>
            <img className="img-responsive recipe-img" src={this.props.imageUrl} alt={name} />
            <div className="peiceMeal Summary">
              <h1>{name}</h1>
            </div>
          </Link>
      </div>
    );
  }
}

export default Recipe;
