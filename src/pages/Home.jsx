import { Link } from 'react-router-dom';
import { Calendar, Info, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        padding: '0 1rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(60, 50, 40, 0.62), rgba(30, 25, 20, 0.72)), url("/src/assets/images/homebackground.png")',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
          <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', margin: '0 0 1rem 0' }}>Discover Angampora</h1>
          <div style={{ margin: '0 auto 1.5rem auto', display: 'inline-block' }}>
            <span style={{
              background: 'linear-gradient(90deg, var(--secondary), #f5dfc0)',
              color: 'var(--text-main)',
              fontWeight: 700,
              fontSize: '1.1rem',
              padding: '0.4rem 1.2rem',
              borderRadius: '2rem',
              letterSpacing: '0.02em',
              display: 'inline-block'
            }}>
              From Mythical Kings to Living Martial Traditions
            </span>
          </div>
          <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
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

        {/* Training Courses Overview */}
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--secondary)', borderRadius: '8px', color: 'var(--text-main)' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Our Training Programs</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)' }}>🥋 Beginner Angampora</h4>
              <p style={{ margin: 0 }}>Learn fundamental stances, basic strikes, and defensive moves. Ideal for those starting their journey.</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)' }}>⚔️ Advanced Combat</h4>
              <p style={{ margin: 0 }}>Complex combination strikes, pressure point attacks, and advanced grappling for experienced practitioners.</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)' }}>🗡️ Traditional Weapons</h4>
              <p style={{ margin: 0 }}>Master the staff (Leewariya) and the flexible sword (Ethunu Kaduwa) — the art of ancient Sri Lankan weaponry.</p>
            </div>
          </div>
        </div>
        {/* Review Section */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What Our Students Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ fontStyle: 'italic' }}>
              <p>"Angampora has changed my life. The discipline and strength I've gained are beyond words. The masters are truly inspiring."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JD</div>
                <span>Janith Dhananjaya</span>
              </div>
            </div>
            <div className="card" style={{ fontStyle: 'italic' }}>
              <p>"A beautiful way to connect with our heritage. The training is intense but rewarding. Highly recommend the morning sessions."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SK</div>
                <span>Sajith Kumara</span>
              </div>
            </div>
            <div className="card" style={{ fontStyle: 'italic' }}>
              <p>"The weapons training is fascinating. It's not just about fighting; it's about history and culture. A must-try experience."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PR</div>
                <span>Priyantha Rathnayake</span>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0 auto' }}>
            <h3 style={{ textAlign: 'center' }}>Leave a Review</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your feedback!'); }}>
              <label>Your Name</label>
              <input type="text" placeholder="Your Name" required />
              <label>Your Experience</label>
              <textarea rows="4" placeholder="Tell us about your training experience..." required></textarea>
              <button type="submit" style={{ width: '100%' }}>Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
