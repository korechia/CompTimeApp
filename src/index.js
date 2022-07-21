import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {(()=>{
  	var link= window.location.origin+'/sw.js';
  	var lhref= window.location.href+'sw.js';
  	console.log("inininininininininininini")
  	console.log(link)
  	console.log(lhref)
    if ("serviceWorker" in navigator) {
    	console.log("insideif")
     navigator.serviceWorker.register(link).then((reg)=>{
     	console.log(reg.scope);
         console.log("Service worker has been registered for scope: " + reg.scope);
     })
     console.log("ouououououtuoutoutout");

 }

  })()}

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();