import React from 'react';
import ReactDOM from 'react-dom';
//save on a virtual dom
const element = <h1>Hello World</h1>;
//rendered into the main dom
ReactDOM.render(element, document.getElementById('root'));