import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Tabby</Link>
      <Link to="/Bunny">Bunny</Link>
      <Link to="/Judge">Judge</Link>
    </div>
  );
}

export default Header;
