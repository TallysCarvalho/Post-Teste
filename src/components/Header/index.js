import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <strong>React Posts</strong>
        </Link>
      </header>
    </div>
  );
};

export default Header;
