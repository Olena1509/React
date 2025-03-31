import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        console.log("Navbar: Constructor");
    }

    componentDidMount() {
        console.log("Navbar: Component Mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Navbar: Should Component Update");
        return nextState.counter !== this.state.counter;
    }

    componentDidUpdate() {
        console.log("Navbar: Component Updated");
    }

    componentWillUnmount() {
        console.log("Navbar: Component Will Unmount");
    }

    render() {
        console.log("Navbar: Render");
        return (
            <nav>
                <h1>Navbar</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Increment</button>
            </nav>
        );
    }
}

export default Navbar;