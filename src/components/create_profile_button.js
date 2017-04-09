import React from 'react';
import { Navbar } from 'react-bootstrap';
// import { Text } from 'react-bootstrap';

const CreateProfileButton = ({ profile, onCreateProfile }) => {
  return (
    <Navbar.Text pullRight>
        <a onClick={()=> onCreateProfile()} href="#">{profile}</a>
    </Navbar.Text>
  )
};

export default CreateProfileButton;
