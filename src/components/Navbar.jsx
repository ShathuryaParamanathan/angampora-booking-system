import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={{ backgroundColor: 'var(--surface)', padding: '1rem', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          🥋 Angampora
        </Link>
        
        {/* Desktop Menu */}
        <div style={{ display: 'none', gap: '2rem' }} className="desktop-menu">
          <Link to="/" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Home</Link>
          <Link to="/about" style={{ color: 'var(--text-main)', fontWeight: 500 }}>About Us</Link>
          <Link to="/book" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Book Session</Link>
          <Link to="/cancel" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Cancel Booking</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} style={{ background: 'none', color: 'var(--text-main)', display: 'block' }} className="mobile-btn">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" onClick={toggleMenu} style={{ color: 'var(--text-main)', fontWeight: 500 }}>Home</Link>
            <Link to="/about" onClick={toggleMenu} style={{ color: 'var(--text-main)', fontWeight: 500 }}>About Us</Link>
            <Link to="/book" onClick={toggleMenu} style={{ color: 'var(--text-main)', fontWeight: 500 }}>Book Session</Link>
            <Link to="/cancel" onClick={toggleMenu} style={{ color: 'var(--text-main)', fontWeight: 500 }}>Cancel Booking</Link>
          </div>
        </div>
      )}

      {/* Basic inline CSS to handle responsive display */}
      <style>{`
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
