import React from 'react';
import ReactDOM from 'react-dom/client';
import { Greet } from './components/Header';


console.log('Hello from my React app')

const App = () => {
  return() => {
    <h1>Hello There, from my React App!</h1>;
    <Greet />;

  }

} 

ReactDOM.render(<App/>, document.getElementById('app'));
