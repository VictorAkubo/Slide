import './App.css'
import React from 'react'
import{ Routes, Route} from 'react-router-dom'
import HOME from './Component/routes/HOME.js'
import ABOUT from './Component/routes/ABOUT.js'
import SERVICE from './Component/routes/SERVICE.js'
import CONTACT from './Component/routes/CONTACT.js'
import SIGNUP from './Component/routes/SIGNUP'
import SIGNIN from './Component/routes/SIGNIN'
import POST from './Component/routes/createpost/POST.js'
import Post from './Component/routes/getPost/Post.js'
import Register from './onlineapp/Register'
import Login from './onlineapp/Login'
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HOME/>}/>
      <Route path='/about' element={<ABOUT/>}/>
      <Route path='/service' element={<SERVICE/>}/>
      <Route path='/contact' element={<CONTACT/>}/>
      <Route path='/post' element={<POST/>}/>
      <Route path='/views' element={<Post/>}/>
      <Route path='/signup' element={<SIGNUP/>}/>
      <Route path='/signin' element={<SIGNIN/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
       
    </div>
  )
}

export default App