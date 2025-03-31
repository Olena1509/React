import React , { Component } from 'react';
class Sidebar extends Component {
  render() {
    return (
      <aside>
        <ul>
          {this.props.data?.menu?.length ? (
            this.props.data.menu.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>No Items</li>
          )}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;