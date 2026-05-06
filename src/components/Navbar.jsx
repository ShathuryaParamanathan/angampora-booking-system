import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav style={{ backgroundColor: '#e2cebc', padding: '1rem 0', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, zIndex: 1000 }}>
      
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
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
          
          <NavLink to="/" end className={getNavClass}>Home</NavLink>
          <NavLink to="/about" className={getNavClass}>About</NavLink>
          <NavLink to="/training" className={getNavClass}>Training</NavLink>
          <NavLink to="/book" className={getNavClass}>Booking</NavLink>
          <NavLink to="/contact" className={getNavClass}>Contact Us</NavLink>

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
            
            <NavLink to="/" end onClick={toggleMenu} className={getNavClass}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className={getNavClass}>About</NavLink>
            <NavLink to="/training" onClick={toggleMenu} className={getNavClass}>Training</NavLink>
            <NavLink to="/book" onClick={toggleMenu} className={getNavClass}>Booking</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className={getNavClass}>Contact Us</NavLink>

          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .nav-link {
          color: var(--text-main);
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background-color: var(--primary);
          border-radius: 2px;
        }

        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-btn {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;