import React from 'react';
import { Link } from 'react-router-dom';
import './recipe_list.css'

class Recipe extends React.Component {
  render() {
    const { id, imageUrl, name } = this.props;
    return (
      <div className="recipe-div">
          <Link to={`/recipe/${id}`}>
            <img className="img-responsive recipe-img" src={imageUrl} alt={name} />
            <div className="peiceMeal Summary">
              <h1>{name}</h1>
            </div>
          </Link>
      </div>
    );
  }
}

export default Recipe;
