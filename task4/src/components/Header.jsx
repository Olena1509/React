import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.data?.title || 'Default Header'}</h1>
      </header>
    );
  }
}
export default Header;