<<<<<<< HEAD
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
=======
import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from '../../containers/search-bar/search_bar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showProfile } from '../../actions/index';


const NavigationBar = ({ profile, onClick }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>Piece-Meal</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <SearchBar />
      <Navbar.Text pullRight>
          <Link to='/create_profile' onClick={onClick} href="#">{profile}</Link>
          {/* <a onClick={()=> onCreateProfile()} href="#">{profile}</a> */}
      </Navbar.Text>
    </Navbar>
  )
>>>>>>> e3f7c5ede997b71b75c550c33a62d5da275afe3f
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(showProfile());
    }
  }
<<<<<<< HEAD
  // return bindActionCreators({ showProfile: showProfile }, dispatch);
=======
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
>>>>>>> e3f7c5ede997b71b75c550c33a62d5da275afe3f
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
