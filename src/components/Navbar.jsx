import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ navColor }) => {
  return (
    <header className="navHead" style={{ backgroundColor: navColor }}>
      <Link to="/" className="logoButton">
        <img src="whiteLogo.svg" alt="TopoTimer Logo" className="headLogo" />
      </Link>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/introduction">Introduction</Link></li>
      </ul>
      <div className="navButt">
        <button className="logBut">Login</button>
        <button className="signUpBut">Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
