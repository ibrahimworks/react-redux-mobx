// import * as redux  from 'redux'
//
// let initialState = {
//   messages : [],
//   notification : 0
// }
//
// let tchatReducer = (state=initialState,action={})=>{
//   switch (action.type) {
//     case 'ADD_MESSAGE':
//      let messages = [...state.messages,action.message];
//       return Object.assign({},state,{messages:messages});
//       break;
//     default:
//     return state;
//   }
//
// }
// let store = redux.createStore(tchatReducer);
//
//
// store.subscribe(()=>console.log(store.getState()));
//
//
// store.dispatch({type:'ADD_MESSAGE',message:'test message'});
// store.dispatch({type:'ADD_MESSAGE',message:'test message'});
// store.dispatch({type:'ADD_MESSAGE',message:'test message'});

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
