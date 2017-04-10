import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class RecipeList extends Component {
  // renderlist () {
  //   return
  //     );
  //   });
  // }

  render() {
    return (
      <ListGroup>
        {this.props.recipes.map((recipe) => {
          return (
            <ListGroupItem
              key={recipe.id}
              onClick={()=> this.props.selectRecipe(recipe)}>
              {recipe.name}
            </ListGroupItem>
          )
        })
        }
      </ListGroup>
    )
  }
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectRecipe: selectRecipe }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
