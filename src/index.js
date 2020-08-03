import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 1, message: 'Hi, how are you', likesCount: 132 },
  { id: 2, message: 'It is my first post', likesCount: 1029 }
];
let dialogsDate = [
{ id: 1, name: 'Vladislav' },
{ id: 2, name: 'Dmitriy' },
{ id: 2, name: 'Ylianna' },
{ id: 2, name: 'Mahail' }
];
let messagesDate = [
{ id: 1, message: 'Hi' },
{ id: 2, message: 'How is your React)' },
{ id: 2, message: 'Thanks, it is ok!' },
{ id: 2, message: 'Nice to meet you!' }
];

ReactDOM.render(

  <React.StrictMode>
    <App dialogsDate={dialogsDate} messagesDate={messagesDate}  posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
