// mockDb.js
// Handles localStorage interaction to simulate a DB

export const initMockDb = () => {
    if (!localStorage.getItem('schedule')) {
        const schedule = [
            { id: '1', date: new Date().toISOString().split('T')[0], time_slot: 'Morning', capacity: 10 },
            { id: '2', date: new Date().toISOString().split('T')[0], time_slot: 'Evening', capacity: 10 },
            { id: '3', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time_slot: 'Morning', capacity: 5 },
            { id: '4', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time_slot: 'Evening', capacity: 15 },
        ];
        localStorage.setItem('schedule', JSON.stringify(schedule));
    }

    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([]));
    }
};

export const getSchedule = () => JSON.parse(localStorage.getItem('schedule')) || [];
export const getBookings = () => JSON.parse(localStorage.getItem('bookings')) || [];

export const getAvailableSlots = () => {
    const schedule = getSchedule();
    const bookings = getBookings();

    return schedule.map(slot => {
        const bookedCount = bookings.filter(b => b.time_slot === slot.time_slot && b.date === slot.date).length;
        return {
            ...slot,
            available: slot.capacity > bookedCount,
            vacancies: slot.capacity - bookedCount
        };
    });
};

export const createBooking = (bookingData) => {
    const bookings = getBookings();
    const booking_id = 'ANG-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    const newBooking = {
        booking_id,
        ...bookingData
    };
    
    bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    return booking_id;
};

export const cancelBooking = (booking_id) => {
    const bookings = getBookings();
    const index = bookings.findIndex(b => b.booking_id === booking_id);
    
    if (index === -1) return false;
    
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    return true;
};
