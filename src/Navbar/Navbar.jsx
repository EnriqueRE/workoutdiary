import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() { 
  return (
    <header>
      <h3 className='appname'>Workout Diary</h3>
      <nav className="navigation">
        <Link to="/">Home</Link> | <Link to="/library">Library</Link> |{" "}
        <Link to="/quickstart">Quickstart</Link> |{" "}
        <Link to="/community">Community</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
}

export default Navbar;