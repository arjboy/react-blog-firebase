import React from 'react'
// import Navbar from './Navbar'
import './app.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Blog from './Blog'
import './firebase'
import Login from './Login'
import Signup from './Signup'
// import Footer from './Footer'
// import { onAuthStateChanged } from 'firebase/auth'
// import { firebaseAuth } from './firebase'

function App() {
  //const [user,setUser] = useState('')
  
  return (
    
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/signup' element={<Signup />}/>
          </Routes>
          {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App