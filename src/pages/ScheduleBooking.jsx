import { useState, useEffect } from 'react';
import { getAvailableSlots, createBooking, cancelBooking } from '../lib/mockDb';
import { Search, CheckCircle, XCircle, Calendar, Users, CreditCard } from 'lucide-react';

const ScheduleBooking = () => {
  const [activeTab, setActiveTab] = useState('book'); // 'book' or 'cancel'
  const [schedule, setSchedule] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [bookingStatus, setBookingStatus] = useState({ id: null, error: null });
  
  // Cancel states
  const [cancelId, setCancelId] = useState('');
  const [cancelStatus, setCancelStatus] = useState({ type: '', message: '' });

  const loadSchedule = () => {
    setSchedule(getAvailableSlots());
  };

  useEffect(() => {
    loadSchedule();
  }, []);

  const handleSelectSlot = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot);
      setBookingStatus({ id: null, error: null });
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      setBookingStatus({ id: null, error: 'Please fill out all fields.' });
      return;
    }
    
    const id = createBooking({ ...formData, date: selectedSlot.date, time_slot: selectedSlot.time_slot, type: selectedSlot.type, name: selectedSlot.name });
    setBookingStatus({ id: id, error: null });
    setSelectedSlot(null);
    setFormData({ name: '', phone: '', address: '' });
    loadSchedule();
  };

  const handleCancelBooking = (e) => {
    e.preventDefault();
    if (!cancelId.trim()) return;

    const success = cancelBooking(cancelId.toUpperCase());
    if (success) {
      setCancelStatus({ type: 'success', message: 'Booking successfully canceled. The slot has been freed.' });
      setCancelId('');
      loadSchedule();
    } else {
      setCancelStatus({ type: 'error', message: 'Booking ID not found. Please try again.' });
    }
  };

  return (
    <div className="container page-container">
      <h1>Workshops & Programmes</h1>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <button 
          onClick={() => setActiveTab('book')}
          style={{ 
            backgroundColor: activeTab === 'book' ? 'var(--primary)' : 'transparent',
            color: activeTab === 'book' ? 'white' : 'var(--text-main)',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            padding: '1rem 2rem'
          }}
        >
          Book a Session
        </button>
        <button 
          onClick={() => setActiveTab('cancel')}
          style={{ 
            backgroundColor: activeTab === 'cancel' ? 'var(--primary)' : 'transparent',
            color: activeTab === 'cancel' ? 'white' : 'var(--text-main)',
            border: 'none',
            borderRadius: '4px 4px 0 0',
            padding: '1rem 2rem'
          }}
        >
          Cancel Booking
        </button>
      </div>

      {activeTab === 'book' ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Schedule List */}
          <div style={{ flex: '1 1 500px' }}>
            <h2>Available Sessions</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {schedule.map((slot) => (
                <div 
                  key={slot.id} 
                  className="card"
                  onClick={() => handleSelectSlot(slot)}
                  style={{ 
                    cursor: slot.available ? 'pointer' : 'not-allowed',
                    opacity: slot.available ? 1 : 0.6,
                    border: selectedSlot?.id === slot.id ? '2px solid var(--primary)' : '1px solid var(--border)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 'bold', 
                        textTransform: 'uppercase', 
                        padding: '2px 6px', 
                        backgroundColor: 'var(--secondary)', 
                        borderRadius: '4px',
                        color: 'var(--primary)',
                        marginBottom: '0.5rem',
                        display: 'inline-block'
                      }}>
                        {slot.type}
                      </span>
                      <h3 style={{ margin: '0.25rem 0' }}>{slot.name}</h3>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {new Date(slot.date).toLocaleDateString()} ({slot.time_slot})</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={14} /> Capacity: {slot.capacity}</span>
                      
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        backgroundColor: slot.available ? '#e8f5e9' : '#ffebee', 
                        color: slot.available ? '#2e7d32' : '#c62828', 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem', 
                        fontWeight: 'bold' 
                      }}>
                        {slot.vacancies} Seats Left
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div style={{ flex: '1 1 350px' }}>
            <div className="card" style={{ position: 'sticky', top: '2rem' }}>
              <h2>Registration</h2>
              
              {bookingStatus.id && (
                <div style={{ padding: '1rem', backgroundColor: '#e8f5e9', border: '1px solid #4CAF50', borderRadius: '4px', color: '#2e7d32', marginBottom: '1rem' }}>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Success! ✅</h4>
                  <p style={{ margin: 0 }}>Your Booking ID is: <strong>{bookingStatus.id}</strong></p>
                </div>
              )}

              {!selectedSlot ? (
                <p style={{ color: 'var(--text-muted)' }}>Select a session from the list to start booking.</p>
              ) : (
                <form onSubmit={handleSubmitBooking}>
                  <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Booking for:</strong> {selectedSlot.name}</p>
                  </div>

                  {bookingStatus.error && <p style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{bookingStatus.error}</p>}

                  <div>
                    <label>Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Address</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} rows="3" required></textarea>
                  </div>

                  <button type="submit" style={{ width: '100%' }}>Confirm & Get ID</button>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Cancel Your Booking</h2>
          <p>Enter your unique Booking ID to cancel your registration and free the slot.</p>
          
          <div className="card" style={{ marginTop: '2rem' }}>
            <form onSubmit={handleCancelBooking}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <label>Booking ID</label>
                  <input 
                    type="text" 
                    value={cancelId} 
                    onChange={(e) => setCancelId(e.target.value)} 
                    placeholder="e.g. ANG-ABC123" 
                    style={{ marginBottom: 0 }}
                    required
                  />
                </div>
                <button type="submit" style={{ backgroundColor: 'var(--danger)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Search size={18} /> Find & Cancel
                </button>
              </div>
            </form>

            {cancelStatus.message && (
              <div style={{ 
                marginTop: '1.5rem', 
                padding: '1rem', 
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: cancelStatus.type === 'success' ? '#e8f5e9' : '#ffebee',
                border: `1px solid ${cancelStatus.type === 'success' ? '#4CAF50' : '#d32f2f'}`,
                color: cancelStatus.type === 'success' ? '#2e7d32' : '#c62828'
              }}>
                {cancelStatus.type === 'success' ? <CheckCircle /> : <XCircle />}
                <span style={{ fontWeight: 500 }}>{cancelStatus.message}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleBooking;
