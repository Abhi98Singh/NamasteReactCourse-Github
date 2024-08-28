import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>  Object =>  HTMLElement(render)

/* Creating React Element using Core-React */

const elem = React.createElement(
  "h1",
  { id: "head", style: { color: "blue", textAlign: "center" } },
  "I am a h1 tag, created by Core-React😊... "
);
console.warn(elem);

/* Creating React Element using JSX */

//JSX has HTML-like and XML-like syntax, but do remember JSX is not HTML inside Javascript, it is differnet
//JSX is transpiled before it reaches the JS Engine => parcel -> babel
// JSX =>  React.createElement =>  Object =>  HTMLElement(render)
const jsxElem = (
  <h1 className="heading" tabIndex="1">
    I am a h1 tag, created by JSX....😁
  </h1>
);

//jsxElem is also a React Element
console.warn(jsxElem);

//Multi-line JSX code: we wrapped in () parentheis
// const jsxHeading = (
//   <div>
//   <h1>Namaste React</h1>
//   </div>
//   )

//React Functional Component
const CompComposition = () => (
  <h3 className="ComComp">Component Composition🤞</h3>
);

//React element
const reactt = <span>React</span>;

//using react element in another react element
const elemX = <h3>I am {reactt} element</h3>;

let user = "Annu";

// let userData = api.getData();

//React Component
// Class based Component - Old
// Functional Component - New

//React Functional Componenet :- A Normal JavaScript Function that returns some JSX or a React element.
//1st way
// const HeadingComponent = () => {

//             return <h1 className="heading">I am a React's Functional Component</h1>

//                           }

//2nd way
// const HeadingComponent = () => <h1 className="heading">I am a React's Functional Component</h1>

//3rd way
const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading">I am a React's Functional Component</h1>

    <CompComposition />
    <CompComposition></CompComposition>

    {CompComposition()}

    {elemX}
    {user}
    {200 + 600}
    {console.error("Error")}

    {/* {userData} */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.warn(root)

//root.render(elem);

//this is how React Element renders
// root.render(jsxElem);

//this is how you render Functional Component :- < Component />
root.render(<HeadingComponent />);
