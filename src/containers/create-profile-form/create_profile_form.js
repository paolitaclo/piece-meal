import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { createProfileForm } from '../../actions/index';

const mapStateToProps = (state) => {
  return {
    newUser: false
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ createProfileForm }, dispatch);
}

class createForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createProfileForm)}>
        <div>
          <label htmlFor="first_name">First Name</label>
        <Field name="first_name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
        <Field name="last_name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
        </div>
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Register'
})(createForm));
