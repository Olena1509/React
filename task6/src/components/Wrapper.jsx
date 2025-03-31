import React, { Component } from "react";
import Navbar from "./Navbar";
import Content1 from "./Content1";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showContent1: false,
    };
  }

  toggleComponent = (component) => {
    this.setState((prevState) => ({
      [component]: !prevState[component],
    }));
  };

  render() {
    return (
      <div>
        <h1>Wrapper Component</h1>
        <button onClick={() => this.toggleComponent("showNavbar")}>
          Toggle Navbar
        </button>
        <button onClick={() => this.toggleComponent("showContent1")}>
          Toggle Content1
        </button>

        {this.state.showNavbar && <Navbar />}
        {this.state.showContent1 && <Content1 />}
      </div>
    );
  }
}

export default Wrapper;
