import React, { useState } from 'react';
import Navbar from './Navbar';
import Content1 from './Content1';
import Content2 from './Content2';
import Footer from './Footer';


const Wrapper = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showContent1, setShowContent1] = useState(false);
    const [showContent2, setShowContent2] = useState(false);
    const [showFooter, setShowFooter] = useState(false);

    return (
        <div>
            <button onClick={() => setShowNavbar(!showNavbar)}>Toggle Navbar</button>
            <button onClick={() => setShowContent1(!showContent1)}>Toggle Content1</button>
            <button onClick={() => setShowContent2(!showContent2)}>Toggle Content2</button>
            <button onClick={() => setShowFooter(!showFooter)}>Toggle Footer</button>

            {showNavbar && <Navbar />}
            {showContent1 && <Content1 />}
            {showContent2 && <Content2 />}
            {showFooter && <Footer />}
        </div>
    );
};

export default Wrapper;