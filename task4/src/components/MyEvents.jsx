import React, { Component } from "react";

class MyEvents extends Component {
    handleEvent = (eventName) => {
      console.log(`Event triggered: ${eventName}`);
    };
  
    render() {
      return (
        <div
          onClick={() => this.handleEvent('onClick')}
          onMouseDown={() => this.handleEvent('onMouseDown')}
          onMouseUp={() => this.handleEvent('onMouseUp')}
          onMouseMove={() => this.handleEvent('onMouseMove')}
          onCut={() => this.handleEvent('onCut')}
          onCopy={() => this.handleEvent('onCopy')}
          onWheel={() => this.handleEvent('onMouseWheel')}
          style={{ border: '1px solid black', padding: '20px', margin: '20px' }}
        >
          Interact with this box to trigger events
        </div>
      );
    }
  }

  export default MyEvents;