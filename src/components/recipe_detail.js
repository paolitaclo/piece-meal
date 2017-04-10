import React from 'react';
import { Modal, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

const RecipeDetail = React.createClass({
  getInitialState() {
    return { show: false };
  },

  render({recipes}) {
    let close = () => this.setState({ show: false});
    return (
      <div>
        <Grid>
          <Row>
            {recipes.map((recipe, id)=>{
                return (
                  <Col xs={6} md={4} key={id}>
                    <Thumbnail onClick={() => this.setState({ show: true})} src="/assets/thumbnaildiv.png" alt="242x200">
                      <h3>{recipe.name}</h3>
                    </Thumbnail>
                    <Modal
                      show={this.state.show}
                      onHide={close}
                      container={this}
                      aria-labelledby="contained-modal-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={close}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                )
              })}
          </Row>
        </Grid>
      </div>

    );
  }
});
export default RecipeDetail;
/* <div className="modal-container" style={{height: 200}}>
  <Button
    bsStyle="primary"
    bsSize="large"
    onClick={() => this.setState({ show: true})}
  >
    Launch contained modal
  </Button>

  <Modal
    show={this.state.show}
    onHide={close}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close}>Close</Button>
    </Modal.Footer>
  </Modal>
</div> */
