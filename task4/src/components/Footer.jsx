import React , { Component } from 'react';
class Footer extends Component {
  render() {
    return (
      <footer>
        <p>{this.props.data?.text || 'Default Footer'}</p>
      </footer>
    );
  }
}
export default Footer;