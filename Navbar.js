import React from 'react';
import { Link } from 'react-router-dom';
import StudentPhoto from './StudentPhoto'; // your student image component
import '../styles/Navbar.css';



function Navbar() {
  return (
    <nav className="navbar">
      {/* Left section with image + university name */}
      <div className="navbar-left">
        <StudentPhoto />
        <h1 className="university-title">CARNER’S UNIVERSITY</h1>
      </div>

      {/* Right section with navigation buttons */}
      <div className="navbar-links">
        <Link to="/home"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;


