import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container page-container">
      <h1>Contact Us</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginTop: '2rem' }}>
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px' }}>
          <h2>Get in Touch</h2>
          <p>Have questions about our training programs or want to book a private session? Reach out to us through any of the following channels.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Phone</h4>
                <p style={{ margin: 0 }}>+94 11 234 5678</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Email</h4>
                <p style={{ margin: 0 }}>info@angampora-heritage.lk</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--secondary)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Location</h4>
                <p style={{ margin: 0 }}>123, Ancient Heritage Road, Cultural Triangle, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '1 1 400px' }}>
          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ backgroundColor: 'var(--success)', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Send size={30} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label>Subject</label>
                  <select>
                    <option>General Inquiry</option>
                    <option>Training Programs</option>
                    <option>Booking Issues</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
