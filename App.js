
import React from 'react'
import ReactDOM  from 'react-dom/client'

// React.createElement =>  Object =>  HTMLElement(render)

               /* Creating React Element using Core-React */

const elem = React.createElement('h1', {id:'head', style:{'color':'blue', 'textAlign':'center'} },"I am a h1 tag, created by Core-React😊... ")
console.warn(elem);



              /* Creating React Element using JSX */

//JSX has HTML-like and XML-like syntax, but do remember JSX is not HTML inside Javascript, it is differnet
//JSX is transpiled before it reaches the JS Engine => parcel -> babel
// JSX =>  React.createElement =>  Object =>  HTMLElement(render)
const jsxElem = <h1 className="heading" tabIndex="1">I am a h1 tag, created by JSX....😁</h1>

//jsxElem is also a React Element
console.warn(jsxElem)

//Multi-line JSX code: we wrapped in () parentheis
// const jsxHeading = (
//   <div>
//   <h1>Namaste React</h1>
//   </div>
//   )

const root = ReactDOM.createRoot(document.getElementById('root'))
//console.warn(root)

//root.render(elem);

root.render(jsxElem);