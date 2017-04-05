import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Header } from 'react-bootstrap';
import { Brand } from 'react-bootstrap';

const BrandLogo = () => {
  return (
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Piece-Meal</a>
      </Navbar.Brand>
    </Navbar.Header>
  )
}

export default BrandLogo;
