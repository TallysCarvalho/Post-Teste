import React, { useState, useEffect } from "react";
import './style.css'

//https://jsonplaceholder.typicode.com/posts

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://jsonplaceholder.typicode.com/posts";

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPosts(json)
        });
    }
    loadApi();
  }, []);



  return (
    <div className="container">
      <header>
        <strong>React Posts</strong>
      </header>

      {posts.map((post)=>{
        return(
          <article key={post.id} className="post">
            <strong>{post.title}</strong>
            <span>{post.body}</span>
            

          </article>
        )
      })}
    </div>
  );
}

export default App;
