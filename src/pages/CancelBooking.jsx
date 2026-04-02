import { useState } from 'react';
import { cancelBooking } from '../lib/mockDb';
import { Search, CheckCircle, XCircle } from 'lucide-react';

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleCancel = (e) => {
    e.preventDefault();
    if (!bookingId.trim()) return;

    // Use mock DB to cancel
    const success = cancelBooking(bookingId.toUpperCase());

    if (success) {
      setStatus({ type: 'success', message: 'Your booking has been successfully canceled. The slot has been freed.' });
      setBookingId('');
    } else {
      setStatus({ type: 'error', message: 'Booking not found! Please check your Booking ID and try again.' });
    }
  };

  return (
    <div className="container page-container">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1>Cancel Booking</h1>
        <p>If you can no longer attend your training session, please cancel your booking to free the slot for another student.</p>

        <div className="card" style={{ marginTop: '2rem' }}>
          <form onSubmit={handleCancel}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ flex: 1 }}>
                <label>Enter Booking ID</label>
                <input 
                  type="text" 
                  value={bookingId} 
                  onChange={(e) => setBookingId(e.target.value)} 
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

          {status.message && (
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: status.type === 'success' ? '#e8f5e9' : '#ffebee',
              border: `1px solid ${status.type === 'success' ? '#4CAF50' : '#d32f2f'}`,
              color: status.type === 'success' ? '#2e7d32' : '#c62828'
            }}>
              {status.type === 'success' ? <CheckCircle /> : <XCircle />}
              <span style={{ fontWeight: 500 }}>{status.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CancelBooking;
