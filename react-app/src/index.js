import React from 'react';
import { createRoot } from "react-dom/client";
import { Greet } from './components/Header';


console.log('Hello from my React app')

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Greet />);

//  or createRoot(document.getElementById("root")).render(<Greet />);


