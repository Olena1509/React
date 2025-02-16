import React from 'react';
const Header = ({ data }) => ( <header>
    <h1>{data?.title || 'Default Header'}</h1>
  </header>)
export default Header;