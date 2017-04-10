import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import { ListGroup } from 'react-bootstrap';

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch)
}

class RecipeList extends Component {
  renderlist() {
    return this.props.books.map((recipe) => {
      return (
        <ListGroupItem
          key={recipe.id}
          onClick={()=> this.props.selectRecipe(recipe)}>
          {recipe.title}
        </ListGroupItem>
      );
    }
  }

  render() {
    return (
      <ListGroup>
        {this.renderList()}
      </ListGroup>
    )
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
