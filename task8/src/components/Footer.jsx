import React, { useState,useEffect } from 'react';

const Footer = () => {
    const [text, setText] = useState("Initial Footer Text");

    useEffect(() => {
        console.log("Footer: Text Changed", text);
    }, [text]);

    return (
        <footer>
            <h2>Footer</h2>
            <p>{text}</p>
            <button onClick={() => setText("Updated Footer Text")}>Update Text</button>
        </footer>
    );
};

export default Footer;