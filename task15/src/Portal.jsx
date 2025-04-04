// Portal.jsx
import React from "react";
import ReactDOM from "react-dom";

const Portal = () => {
  return ReactDOM.createPortal(
    <div style={{ padding: "20px", backgroundColor: "lightblue" }}>
      Мій перший портал
    </div>,
    document.body
  );
};

export default Portal;
