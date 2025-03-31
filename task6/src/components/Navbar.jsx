import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Constructor викликано",
    };
  }

  componentDidMount() {
    this.setState({ status: "componentDidMount викликано" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.status !== this.state.status;
  }

  componentDidUpdate() {
    this.setState({ status: "componentDidUpdate викликано" });
  }

  componentWillUnmount() {
    alert("Navbar буде видалено!");
  }

  render() {
    return (
      <div>
        <h2>Navbar</h2>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Navbar;

