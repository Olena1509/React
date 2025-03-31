import React, { Component } from "react";

class Content1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from Content1",
      color: "black",
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        message: "Updated message",
        color: prevState.color === "black" ? "blue" : "black",
      }));
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.message !== this.state.message;
  }

  componentDidUpdate() {
    document.title = "Content1 оновлено!";
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    document.title = "Компонент видалено";
  }

  render() {
    return <p style={{ color: this.state.color }}>{this.state.message}</p>;
  }
}

export default Content1;
