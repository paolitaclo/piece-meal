import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { createProfileForm } from '../../actions/index';
import './create_profile_form.css';
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form className="form-group" onSubmit={handleSubmit(this.props.createProfileForm)}>
              <div>
                <label htmlFor="first_name">First Name</label>
              <Field className="form-control" name="first_name" component="input" type="text" />
              </div>
              <div>
                <label htmlFor="last_name">Last Name</label>
              <Field className="form-control" name="last_name" component="input" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
              <Field className="form-control" name="email" component="input" type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
              <Field className="form-control" name="password" component="input" type="text" />
              </div>
                <button className="btn btn-primary btn-form" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'Register'
})(createForm));
