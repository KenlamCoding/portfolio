/**
    * @description      : 
    * @author           : admin
    * @group            : 
    * @created          : 05/05/2023 - 08:39:36
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/05/2023
    * - Author          : admin
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/objectdesign.css';
import Navbar from './component/Navbar';
import Content from './component/Content';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='container'>
            <Navbar />
            <Content />
        </div>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
