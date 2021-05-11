import { Switch } from "react-router-dom";
import Header from "./components/Header";
//https://jsonplaceholder.typicode.com/posts
import Routes from "./routes";

function App() {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default App;
