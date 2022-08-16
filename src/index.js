import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './State/state.js';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
      <React.StrictMode>
        <App
          leftSide={Store.state.leftSide}
          rightSide={Store.state.rightSide}
        />
      </React.StrictMode>
  );
}

rerenderEntireTree(Store);

Store.subcribe(rerenderEntireTree);

reportWebVitals();