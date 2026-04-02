import { useState, useEffect } from 'react';
import { getAvailableSlots, createBooking } from '../lib/mockDb';

const ScheduleBooking = () => {
  const [schedule, setSchedule] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [bookingId, setBookingId] = useState(null);
  const [error, setError] = useState(null);

  const loadSchedule = () => {
    setSchedule(getAvailableSlots());
  };

  useEffect(() => {
    loadSchedule();
  }, []);

  const handleSelectSlot = (slot) => {
    if (slot.available) {
      setSelectedSlot(slot);
      setBookingId(null);
      setError(null);
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      setError('Please fill out all fields.');
      return;
    }
    
    // Attempt Booking
    const id = createBooking({ ...formData, date: selectedSlot.date, time_slot: selectedSlot.time_slot });
    setBookingId(id);
    setSelectedSlot(null);
    setFormData({ name: '', phone: '', address: '' });
    loadSchedule(); // refresh
  };

  return (
    <div className="container page-container">
      <h1>Training Schedule & Booking</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Schedule List */}
        <div style={{ flex: '1 1 400px' }}>
          <h2>Available Slots</h2>
          {schedule.length === 0 ? <p>No slots available.</p> : null}
          <div style={{ display: 'grid', gap: '1rem' }}>
            {schedule.map((slot) => (
              <div 
                key={slot.id} 
                className="card"
                onClick={() => handleSelectSlot(slot)}
                style={{ 
                  cursor: slot.available ? 'pointer' : 'not-allowed',
                  opacity: slot.available ? 1 : 0.6,
                  border: selectedSlot?.id === slot.id ? '2px solid var(--primary)' : '1px solid var(--border)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: 0, color: 'var(--text-main)' }}>{new Date(slot.date).toLocaleDateString()} - {slot.time_slot}</h3>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      Capacity: {slot.capacity} | Available: {slot.vacancies}
                    </p>
                  </div>
                  <div>
                    {slot.available ? (
                      <span style={{ backgroundColor: '#2e7d32', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        AVAILABLE
                      </span>
                    ) : (
                      <span style={{ backgroundColor: '#d32f2f', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                        FULL
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div style={{ flex: '1 1 300px' }}>
          <div className="card" style={{ position: 'sticky', top: '2rem' }}>
            <h2>Book a Session</h2>
            
            {bookingId && (
              <div style={{ padding: '1rem', backgroundColor: '#e8f5e9', border: '1px solid #4CAF50', borderRadius: '4px', color: '#2e7d32', marginBottom: '1rem' }}>
                <h4 style={{ margin: '0 0 0.5rem 0' }}>Booking Confirmed! ✅</h4>
                <p style={{ margin: 0 }}>Your Booking ID is: <strong style={{ fontSize: '1.2rem' }}>{bookingId}</strong></p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.85rem' }}>Keep this ID if you need to cancel later.</p>
              </div>
            )}

            {!selectedSlot ? (
              <p style={{ color: 'var(--text-muted)' }}>Please select an available slot from the schedule to book.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                  <p style={{ margin: 0 }}><strong>Selected:</strong> {new Date(selectedSlot.date).toLocaleDateString()} - {selectedSlot.time_slot}</p>
                </div>

                {error && <p style={{ color: 'var(--danger)', fontSize: '0.9rem' }}>{error}</p>}

                <div>
                  <label>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div>
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="07xxxxxxxx" required />
                </div>
                <div>
                  <label>Address</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Your home address..." rows="3" required></textarea>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button type="submit" style={{ flex: 1 }}>Confirm Booking</button>
                  <button type="button" onClick={() => setSelectedSlot(null)} style={{ backgroundColor: 'var(--text-muted)', flex: 1 }}>Clear</button>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                  * No login required. Your information is only used for booking purposes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBooking;
