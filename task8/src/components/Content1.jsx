import React, {Component } from 'react';

class Content1 extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "Initial Text" };
        console.log("Content1: Constructor");
    }

    componentDidMount() {
        console.log("Content1: Component Mounted");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Content1: Should Component Update");
        return nextState.text !== this.state.text;
    }

    componentDidUpdate() {
        console.log("Content1: Component Updated");
    }

    componentWillUnmount() {
        console.log("Content1: Component Will Unmount");
    }

    render() {
        console.log("Content1: Render");
        return (
            <div>
                <h2>Content1</h2>
                <p>{this.state.text}</p>
                <button onClick={() => this.setState({ text: "Updated Text" })}>Change Text</button>
            </div>
        );
    }
}

export default Content1;