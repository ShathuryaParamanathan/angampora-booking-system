const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--text-main)', color: 'var(--surface)', padding: '2rem 1rem', marginTop: 'auto' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--surface)', margin: 0 }}>© {new Date().getFullYear()} Angampora Training Center. All Rights Reserved.</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
          Preserving the ancient martial art of Sri Lanka
        </p>
      </div>
    </footer>
  );
};

export default Footer;
