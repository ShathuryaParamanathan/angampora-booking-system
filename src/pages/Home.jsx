import { Link } from 'react-router-dom';
import { Calendar, Info, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        padding: '6rem 1rem',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(120, 100, 80, 0.9), rgba(60, 60, 50, 0.9))',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', margin: '0 0 1rem 0' }}>Discover Angampora</h1>
          <p style={{ color: 'white', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            A traditional Sri Lankan martial art combining combat techniques, self-defense, and spiritual discipline.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book">
              <button style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                Book Session Now
              </button>
            </Link>
            <Link to="/about">
              <button style={{ backgroundColor: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)', fontSize: '1.1rem' }}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container page-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <Shield size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Self-Defense</h3>
            <p>Master ancient techniques designed for protection and physical fitness.</p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <Calendar size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Flexible Schedule</h3>
            <p>Choose between Morning and Evening slots suited for beginners and advanced practitioners.</p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <Info size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Rich History</h3>
            <p>Immerse yourself in a discipline that traces back to mythical Sri Lankan kings.</p>
          </div>

        </div>

        {/* Training Recommendation */}
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '8px', color: 'var(--text-main)' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Training Recommendations</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h4 style={{ color: 'var(--primary)' }}>🌅 Morning Sessions</h4>
              <p style={{ margin: 0 }}>Best suited for beginners. Focuses on flexibility, foundation training, and clearing the mind.</p>
            </div>
            <div style={{ flex: 1, minWidth: '250px' }}>
              <h4 style={{ color: 'var(--primary)' }}>🌆 Evening Sessions</h4>
              <p style={{ margin: 0 }}>Best for advanced training. Focuses on strength building, combat mastery, and endurance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
