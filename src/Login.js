import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "./firebase";
import "./login.css";

 function Login({ currentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // var errmsg = 'User Not Found !'
  // const [vis,setVis] = useState(false)

  const handleSignup = () => {
    try {
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => navigate("/"))
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              alert("User Not Found !");
              // document.getElementsByClassName('errmsg').value = errmsg
              //  React.createElement('h1',{ },'user not found')
              // return(
              // () => setVis(!setVis)
              // )
              break;
          }
        });
    } catch (err) {
      alert("Error : ", err);
    }
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <div className="login-main">
      <img
        src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg"
        alt=""
      />
      <div className="login-con">
        <h2>Login</h2>
        {/* <p className={ setVis ? 'notv' : 'visi'}>User not found</p> */}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign In</button>
        <p>
          New here ? <a href="/signup">create an account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
