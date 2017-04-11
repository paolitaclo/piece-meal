import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../search-bar/search_bar';
import { showProfile } from '../../actions/index';

// import CreateProfileButton from './create_profile_button';

const NavigationBar = ({ profile, onClick }) => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Piece-Meal</a>
          </Navbar.Brand>
        </Navbar.Header>
        <SearchBar />
        <Navbar.Text pullRight>
            <a onClick={onClick} href="#">{profile}</a>
        </Navbar.Text>
      </Navbar>
    )
};

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(showProfile());
    }
  }
  // return bindActionCreators({ showProfile: showProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
