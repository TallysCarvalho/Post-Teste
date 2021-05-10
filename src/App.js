import React, { useState, useEffect } from "react";

//https://jsonplaceholder.typicode.com/posts

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://jsonplaceholder.typicode.com/posts";

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPost(json)
        });
    }
    loadApi();
  }, []);



  return (
    <div className="App">
      <h1>teste</h1>
    </div>
  );
}

export default App;
