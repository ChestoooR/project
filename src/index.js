import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header';
import List from './components/list/List';

 const App = () => {
     return(
         <div>
             <Header/>
             <List />
         </div>
     )
 }

 ReactDOM.render(
     <App />,
     document.getElementById('root')
 )