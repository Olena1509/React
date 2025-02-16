import React from 'react';
const Sidebar = ({ data }) => (
  <aside>
    <ul>
      {data?.menu?.length ? data.menu.map((item, index) => (
        <li key={index}>{item}</li>
      )) : <li>No Items</li>}
    </ul>
  </aside>
);
export default Sidebar;