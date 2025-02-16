import React from 'react';
const Footer = ({ data }) => (
  <footer>
    <p>{data?.text || 'Default Footer'}</p>
  </footer>
);
export default Footer;