import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./blog.css";

function Blog() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/login");
  });

  const [results, setResults] = useState([]);
  const URL =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=0ebfc9a0d7b6421680fdd4c8b8baedc6";

  useEffect(() => {
    axios.get(URL).then((res) => {
      // console.log(res.data.articles)
      setResults(res.data.articles);
    });
  }, []);

  return (
    <div className="blog">
      <Navbar />
      <div className="blog-cont">
        {results.map((val) => {
          return (
            <div className="n-card">
                <div className="n-img">
                  <img src={val.urlToImage} alt="" />
                </div>
              <div className="n-headers">
                <div className="n-head">
                  <h4>{val.title}</h4>
                </div>
                <div className="contents">
                  <p>{val.content}</p>
                </div>
                <div className="read">
                  <a href={val.url}>read more...</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
