import React from 'react';
import Button from '../../widgets/button';
import Title from '../../widgets/typography/title';
import './header.css'

const Header = () => {
  return (
  <div className="header">
    <h1 className="main_title">SIMPLE CSS TEMPLATE</h1>
    <Title> WELCOME TO OUR CHURCH  </Title>
    <Button title="Join With Us" />
  </div>
  );
}

export default Header;