import React, { useState } from 'react';
const Content = () => {
  const contentData = { title: 'React Practice', describe: 'Learning components, props, and state' };
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>{contentData.title}</h1>
      <p>{contentData.describe}</p>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
};
export default Content;