import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from './firebase'
import './signup.css'

 function Signup({currentUser}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");             
  const navigate = useNavigate()
  const handleSignup = () => {
    try {
      createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(()=> navigate('/'))
      .catch(error => {   
        switch(error.code) {
          case 'auth/email-already-in-use':
                alert('Email already in use !')
                break;
       }
      })
    } catch(err) {
      alert("Error : ", err);
    };
  }
  onAuthStateChanged (firebaseAuth,(currentUser)=> {
    if(currentUser) navigate("/")
   
 })

  return (
    <div className="login">

    <div className='login-con'>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <input type="password" 
      name="password" id="" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      
      />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account ? <a href="/login">Login</a>
        </p>
    </div>
      </div>
    )
}

export default Signup