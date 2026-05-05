import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{ backgroundColor: '#e2cebc', padding: '1rem 0', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        
         <img
          src="/images/logo.png"
          alt="Angampora Logo"
          style={{ width: '50px', height: 'auto', marginRight: '0.5rem' }}
        /> 
        Angampora
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" className="nav-link">Home</Link>
          
          <Link to="/about" className="nav-link">About</Link>

          <Link to="/training" className="nav-link">Training</Link>
          <Link to="/book" className="nav-link">Booking</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} style={{ background: 'none', color: 'var(--text-main)', display: 'block', padding: '0.5rem' }} className="mobile-btn">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" onClick={toggleMenu} className="nav-link">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="nav-link">About</Link>
            <Link to="/training" onClick={toggleMenu} className="nav-link">Training</Link>
            <Link to="/book" onClick={toggleMenu} className="nav-link">Booking</Link>
            <Link to="/contact" onClick={toggleMenu} className="nav-link">Contact Us</Link>
          </div>
        </div>
      )}

      {/* Navbar specific styles */}
      <style>{`
        .nav-link {
          color: var(--text-main);
          fontWeight: 500;
          transition: color 0.3s;
          padding: 0.5rem 0;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }

        /* Dropdown Logic */
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          background-color: var(--surface);
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
          z-index: 1;
          border: 1px solid var(--border);
          border-radius: 4px;
          top: 100%;
          left: 0;
        }
        .dropdown-item {
          color: var(--text-main);
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          transition: background-color 0.2s;
        }
        .dropdown-item:hover {
          background-color: var(--secondary);
          color: var(--primary);
        }
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
