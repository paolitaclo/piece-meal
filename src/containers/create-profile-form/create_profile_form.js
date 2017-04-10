import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Grid,
  Row,
  Col } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
const CreateProfileForm = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="First Name"
              placeholder="Enter First Name"
            />
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Last Name"
              placeholder="Enter Last Name"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter email"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <Button type="submit">
            Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Grid>

  );
};

export default CreateProfileForm;
