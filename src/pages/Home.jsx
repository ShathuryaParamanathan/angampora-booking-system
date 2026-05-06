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
        backgroundImage: 'linear-gradient(rgba(60, 50, 40, 0.62), rgba(30, 25, 20, 0.72)), url("/images/homebackground.png")',
        backgroundPosition: 'center top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container">
             <div style={{ margin: '0 auto 0.5rem auto', display: 'inline-block' }}>
            <span style={{
              // background: 'linear-gradient(90deg, var(--secondary), #f5dfc0)',
              // color: 'var(--text-main)',
              color: '#f5dfc0',
              fontWeight: 600,
              fontSize: '1.5rem',
              padding: '0.4rem 1.2rem',
              borderRadius: '2rem',
              letterSpacing: '0.02em',
              display: 'inline-block'
            }}>
             Discover Angampora
            </span>
          </div>
          <div>
<h1 style={{ color: 'var(--secondary)', fontSize: '3rem', margin: '0 0' }}>
               From Mythical Kings to Living 
          </h1>
          <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', margin: '0 0 1rem 0' }}>
               Martial Traditions
          </h1>
          </div>
          
       
          <p style={{ color: '#f5dfc0', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            A traditional Sri Lankan martial art combining combat techniques, self-defense, and spiritual discipline.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' ,marginTop:'6rem'}}>
            <Link to="/book">
              <button style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-main)', fontSize: '1.1rem',height:'3rem' }}>
                Book Session Now
              </button>
            </Link>
            <Link to="/about">
              <button style={{ backgroundColor: 'transparent', border: '1px solid var(--secondary)', color: 'var(--secondary)', fontSize: '1.1rem',height:'3rem' }}>
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
              <h4 style={{ color: 'var(--primary)' }}>🥋 Angam</h4>
              <p style={{ margin: 0 }}>Unarmed combat utilizing parts of the human body, such as gataputtu (locks and grips) and pora haramba (strikes and blocks).</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)' }}>⚔️ Illangam</h4>
              <p style={{ margin: 0 }}>Using various types of arms and weaponry, comprising spears, swords, and sticks.</p>
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h4 style={{ color: 'var(--primary)' }}>🗡️ Maya Angam</h4>
              <p style={{ margin: 0 }}>Its most unique feature is the use of spells and incantations or spiritual power as a fighting technique.</p>
            </div>
          </div>
        </div>
        {/* Review Section */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What Our Students Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            {/* Review 1 */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', fontStyle: 'italic' }}>
              <div style={{ width: '100%', height: '200px', backgroundColor: '#e0d5c1', overflow: 'hidden' }}>
                <img
                  src="/images/outdoor1.jpeg"
                  alt="Janith's experience"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'flex'; e.target.parentElement.style.alignItems = 'center'; e.target.parentElement.style.justifyContent = 'center'; e.target.parentElement.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">[ review image 1 ]</span>'; }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem 0' }}>"Angampora has changed my life. The discipline and strength I've gained are beyond words. The masters are truly inspiring."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>JD</div>
                  <span>Janith Dhananjaya</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', fontStyle: 'italic' }}>
              <div style={{ width: '100%', height: '200px', backgroundColor: '#e0d5c1', overflow: 'hidden' }}>
                <img
                  src="/images/outdoor2.jpeg"
                  alt="Sajith's experience"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'flex'; e.target.parentElement.style.alignItems = 'center'; e.target.parentElement.style.justifyContent = 'center'; e.target.parentElement.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">[ review image 2 ]</span>'; }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem 0' }}>"A beautiful way to connect with our heritage. The training is intense but rewarding. Highly recommend the morning sessions."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>SK</div>
                  <span>Sajith Kumara</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="card" style={{ padding: 0, overflow: 'hidden', fontStyle: 'italic' }}>
              <div style={{ width: '100%', height: '200px', backgroundColor: '#e0d5c1', overflow: 'hidden' }}>
                <img
                  src="/images/outdoor3.jpeg"
                  alt="Priyantha's experience"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'flex'; e.target.parentElement.style.alignItems = 'center'; e.target.parentElement.style.justifyContent = 'center'; e.target.parentElement.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem">[ review image 3 ]</span>'; }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <p style={{ margin: '0 0 1rem 0' }}>"The weapons training is fascinating. It's not just about fighting; it's about history and culture. A must-try experience."</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontStyle: 'normal', fontWeight: 'bold' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>PR</div>
                  <span>Priyantha Rathnayake</span>
                </div>
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
