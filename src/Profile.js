import React, { useState } from "react";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./profile.css";
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/login");
  });
  return (
    <div className="prof">
      <Navbar />
      <div className="profile">
        <div className="profile-con">
          {/* <div className="profile-bg"> */}
          {/* <img src="./profile-bg.jpeg" alt="" /> */}
            
          {/* </div> */}
          <div className="profile-img">
            <img src="./user.png" alt="" />
          </div>
          <div className="user-info">
            <p>{user.email}</p>
            <p>Status: Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
