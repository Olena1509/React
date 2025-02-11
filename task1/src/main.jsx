import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log(App());
function A() {
  console.log(2222);
}

function B() {
  console.log(4444);
  return 4444;
}

const ob = { s: 1 };
const n1 = 111;
const n2 = true;
const n3 = "hello";

const ddd = " class My name";

const randomID = "ID-" + Math.random();

const El = React.createElement("section", { d: 11111 }, <h2> Hello</h2>);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>Hello react</h1>
    {/* class */}
    <div className="bg-red"> Hello text</div>

    <App variable1="32523">
      <div></div>
    </App>

    <App></App>
    <App />
    {App()}

    <div className="">111</div>
    <div>{111}</div>
    <div>
      {/*{ob}*/}
      {n1}
    </div>
    <div>
      {n2}
      {true}
    </div>
    <div>{A()}</div>
    <h3>{n3}</h3>
    <div>
      {(() => {
        console.log(3333);
      })()}
    </div>
    <div>{B()}</div>
    <div>{React.createElement("div", { className: 1 }, <div>222</div>)}</div>
    <div>{El}</div>
    <div id={randomID}>
    {randomID}
    </div>
  </div>
);
