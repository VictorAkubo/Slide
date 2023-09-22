import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
/* import './styles.css'

import { Provider } from 'react-redux';
import { store } from './tutorial/store';
import App from './App'
import Form from './my form/form';
import SIGNUP from './Component/routes/SIGNUP';
import Game from './personal/game';
import Slide from './personal/Slide'; */
//import Learn from './personal/learn';
//import { AuthProvider } from './Component/context/AuthProvider'
import Slide from '../personal/Slide';


/*import  Str from './components/Str';

import  App from './components/App';
import  TodoList from './components/TodoList';
import  ShowText from './components/showText';
import  Fetch from './components/fetch';
import  FetchAge from './components/ageFetch';
import Routed from './components/routes';
import { Clicked } from './App';
import Login from './tutorial/Login.js'
import Home from './tutorial/Home.js'
import Contact from './tutorial/Contact.js'


<Str />
<TodoList />
<ShowText />
<Fetch />
<FetchAge/>
<Routed/>
<Clicked/>


 <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>


    <Provider store={store}>
    <AuthProvider>

      </AuthProvider>
  </Provider>
     
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
      <BrowserRouter>

       <Slide/>
      </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

