import React, { useState } from "react";
import { Articles } from "./Articles";
import Navbar from './Navbar'
import "./home.css";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Footer from './Footer'

export default React.memo ( function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState("")
  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) setUser(currentUser)
    else navigate("/login")
  })
  return (
    
    <div className="home">
       <Navbar/>
      <div className="hero">
        <div className="bg-img">
          <img src="./bg.jpg" alt="" />
        </div>
        <div className="hero-text">
          <h1>Welcome! {user.email}</h1>
          <h3>Thanks for visiting this :)</h3>
          <div className="hero-btn">
            <a href="/blog">My Blog</a>
          </div>
        </div>
      </div>
      <div className="articles">
        <h2>My Articles</h2>
      </div>
    <div className="cards">
        {
          Articles.map((item,index)=> {
            return(
              <div className="card" key={index}>
              <div className="card-img">
                <img src={item.image} alt="" />
              </div>
              <div className="text">
                <p className="card-text">
                  {item.text}
                   </p>
              </div>
            </div>
            )
          })
        }
      

    </div>
    <Footer />
    </div>
  );
}
)