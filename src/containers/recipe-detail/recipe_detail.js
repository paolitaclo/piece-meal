import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { Button } from 'react-bootstrap';

class RecipeDetail extends Component {
  render() {

    return (
      <div>
        <h3>Details for:</h3>
        <div>Recipe Title: {this.props.recipe.name}</div>
        <div>Image: <img src='{this.props.recipe.imageUrl}' alt="recipe image"/></div>
        <div>Ingredients: {this.props.recipe.ingredients}</div>
        <div>instructions: {this.props.recipe.instructions}</div>
      </div>
    );



    // let close = () => this.setState({ show: false});

    // return (
    //   <div className="modal-container" style={{height: 200}}>
    //     <Button
    //       bsStyle="primary"
    //       bsSize="large"
    //       onClick={() => this.setState({ show: true})}
    //     >
    //       Launch contained modal
    //     </Button>
    //
    //     <Modal
    //       show={this.state.show}
    //       onHide={close}
    //       container={this}
    //       aria-labelledby="contained-modal-title"
    //     >
    //       <Modal.Header closeButton>
    //         <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
    //       </Modal.Header>
    //       <Modal.Body>
    //         Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
    //       </Modal.Body>
    //       <Modal.Footer>
    //         <Button onClick={close}>Close</Button>
    //       </Modal.Footer>
    //     </Modal>
    //   </div>
    // );

  }
};

function mapStateToProps(state) {
  return {
    recipe: state.activeRecipe
  }
}

export default connect(mapStateToProps)(RecipeDetail);
