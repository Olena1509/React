import React, { useState, useEffect } from 'react';

const Content2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Content2: Component Mounted");
        return () => console.log("Content2: Component Will Unmount");
    }, []);

    useEffect(() => {
        console.log("Content2: Count Changed", count);
    }, [count]);

    useEffect(() => {
        console.log("Content2: Every Render");
    });

    return (
        <div>
            <h2>Content2</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </div>
    );
};

export default Content2