import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chap1 from './docs/Chap1-Hello-World'
import Chap2 from './docs/Chap2-JSX'
import Chap3 from './docs/Chap3-element-rendering'
import Chap4 from './docs/Chap4-Component-Props'
import Clock from './docs/Chap5-State-Life'
import Chap6 from './docs/Chap6-Handling-Events'
import reportWebVitals from './reportWebVitals'
import Comment from './docs/Chap4-Component-Props'
import Toggle from './docs/Chap6-Handling-Events'
import Page from './docs/Chap7-conditional-rendering'
import NumberList from './docs/Chap8-list-and-key'
import Reservation from './docs/Chap9-forms'
import Calculator from './docs/Chap10-lifting-state-up'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Calculator />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
