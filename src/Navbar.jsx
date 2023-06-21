import { AiOutlineHome } from "react-icons/ai";
import React from "react";
import { BiBookOpen } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./navbar.css";
import { firebaseAuth } from "./firebase";
import { signOut } from "firebase/auth";
export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <h1 className="title">Bloggy</h1>
        <ul className="list">
          <Link className="links" to={"/"}>
             <AiOutlineHome className="icon" size={20} /> Home
          </Link>
          <Link className="links" to={"/blog"}>
             <BiBookOpen className="icon" size={20} /> Blog
          </Link>
          <Link className="links" to={"/profile"}>
             <CgProfile className="icon" size={20} /> Profile
          </Link>
        </ul>
        <div className="pfp">
          <img src="./user.png" alt="" title="Logout" onClick={()=> signOut(firebaseAuth)}/>
          
        </div>
      </nav>
    </div>
  );
}
