import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chap1 from './docs/Chap1-Hello-World'
import Chap2 from './docs/Chap2-JSX'
import Chap3 from './docs/Chap3-element-rendering'
import Chap4 from './docs/Chap4-Component-Props'
import reportWebVitals from './reportWebVitals';
import Comment from './docs/Chap4-Component-Props';

const root = ReactDOM.createRoot(document.getElementById('root'));

const comment = {
  date: new Date(),
  text: '리액트 꿀잼이예요. 야옹',
  author: {
      name: '안녕, 고양아',
      avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

root.render(
  <div>
  <React.StrictMode>
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />
  </React.StrictMode>
  </div>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
