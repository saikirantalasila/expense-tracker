import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">💰 ExpenseTracker</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Links Section */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Add Expense
        </NavLink>
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Reports
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          onClick={handleLinkClick}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
