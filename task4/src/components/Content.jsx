
import React, { Component } from "react";
import MyEvents from "./MyEvents"; 

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <main>
        <h1>React Practice</h1>
        <p>Learning class components, state, and events</p>
        <div>
          <button onClick={this.decrement}>-</button>
          <span style={{ margin: '0 10px' }}>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <MyEvents />
      </main>
    );
  }
}
export default Content;