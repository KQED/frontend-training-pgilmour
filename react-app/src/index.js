import React from 'react';
import { createRoot } from "react-dom/client";
import { Greet } from './components/Header';


console.log('Hello from my React app')

// ReactDOM.render(<Greet/>, document.getElementById('root'));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Greet />);


// =================================================================
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );