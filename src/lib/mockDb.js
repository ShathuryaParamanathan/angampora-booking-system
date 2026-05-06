// mockDb.js
// Handles localStorage interaction to simulate a DB

export const initMockDb = () => {
   if (!localStorage.getItem('schedule')) {

    const getNextSunday = (startDate, addWeeks = 0) => {
        const date = new Date(startDate);
        const day = date.getDay(); // 0 = Sunday
        const diff = (7 - day) % 7; // days until next Sunday
        date.setDate(date.getDate() + diff + (addWeeks * 7));
        return date.toISOString().split('T')[0];
    };

    const today = new Date();

    const schedule = [
        { 
            id: '1', 
            type: 'Workshop', 
            name: 'Angampora Basics', 
            date: getNextSunday(today, 0), 
            time_slot: 'Morning', 
            capacity: 100 
        },
        { 
            id: '2', 
            type: 'Programme', 
            name: 'Advanced Combat', 
            date: getNextSunday(today, 1), 
            time_slot: 'Morning', 
            capacity: 100 
        },
        { 
            id: '3', 
            type: 'Exhibition', 
            name: 'Traditional Weapons', 
            date: getNextSunday(today, 2), 
            time_slot: 'Morning', 
            capacity: 50 
        },
        { 
            id: '4', 
            type: 'Workshop', 
            name: 'Meditation & Discipline', 
            date: getNextSunday(today, 3), 
            time_slot: 'Morning', 
            capacity: 75 
        },
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
