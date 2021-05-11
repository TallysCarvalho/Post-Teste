import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";

//https://jsonplaceholder.typicode.com/posts

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://jsonplaceholder.typicode.com/posts";

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    }
    loadApi();
  }, []);

  return (
    <div >
      <Header/>
      {posts.map((post) => {
        return (
            <div className="container">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/posts/${post.id}`}
          >
            <article key={post.id} className="post">
              <strong>{post.title}</strong>
              <span>{post.body}</span>
            </article>
          </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
