import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chap1 from './docs/Chap1-Hello-World'
import Chap2 from './docs/Chap2-JSX'
import Chap3 from './docs/Chap3-element-rendering'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const tick = () => {
  const element = (
    <React.StrictMode>
      <Chap3 />
    </React.StrictMode>
  )

  root.render(element)
}
  
setInterval(tick, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
