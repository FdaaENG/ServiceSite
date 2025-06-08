import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/src/assets/Logo.png" alt="PawPoint Logo" className="navbar-logo" />
        <span>PawPoint</span>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
        <li><NavLink to="/booking" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Booking</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;