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
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch(showProfile());
    }
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
