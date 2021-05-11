import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    function loadApi() {
      let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPost(json);
        });
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="card-post">
        <h1>{post.title}</h1>
        <span>{post.body}</span>
        <Link to="/">Return</Link>
      </div>
    </div>
  );
}

export default Post;
