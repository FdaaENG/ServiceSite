import { NavLink } from 'react-router-dom';
import { FaHome, FaDog, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import "../styles/NavBar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/src/assets/Logo.png" alt="PawPoint Logo" className="navbar-logo" />
        <span>PawPoint</span>
      </div>
      <ul className="navbar-links">
      <li><NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FaHome className="nav-icon" /><span className="nav-text">Home</span></NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FaDog className="nav-icon" /><span className="nav-text">Services</span></NavLink></li>
        <li><NavLink to="/booking" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FaCalendarAlt className="nav-icon" /><span className="nav-text">Booking</span></NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}><FaEnvelope className="nav-icon" /><span className="nav-text">Contact</span></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;