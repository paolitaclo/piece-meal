import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchBar from './search_bar';
import BrandLogo from './brand_logo';
import CreateProfile from './create_profile';

const NavigationBar = () => {
  return (
    <Navbar>
      <BrandLogo />
      <SearchBar/>
      <CreateProfile />
    </Navbar>
  )
}

export default NavigationBar;
