const masters = [
  { name: 'Master Karunapala', position: 'Head Guru', year: '1995–Present', location: 'Kandy' },
  { name: 'Guru Senanayake', position: 'Senior Instructor', year: '2005–Present', location: 'Anuradhapura' },
  { name: 'Master Perera', position: 'Weapons Specialist', year: '2012–Present', location: 'Colombo' },
];

const About = () => {
  return (
    <div className="container page-container">
      <h1>About Angampora</h1>
      
      <section className="card" style={{ marginBottom: '2rem' }}>
        <h2>Introduction</h2>
        <p>
          Angampora is a traditional Sri Lankan martial art that combines combat techniques, self-defense, sport, exercise, and meditation. 
          It focuses heavily on discipline and spiritual development alongside physical prowess.
        </p>
      </section>

      <section className="card" style={{ marginBottom: '2rem' }}>
        <h2>History</h2>
        
        <h4 style={{ color: 'var(--text-main)', marginTop: '1rem' }}>Mythical Era</h4>
        <p>The origins of Angampora trace back over 33,000 years, according to legend. It is deeply entwined with the history of the legendary King Ravana, who was considered a master of this ancient art.</p>

        <h4 style={{ color: 'var(--text-main)' }}>Ancient Period</h4>
        <p>Throughout Sri Lanka&apos;s history, Angampora was an essential tool for warfare and the protection of the royal crown. Elite warrior clans practiced the art to defend the island.</p>

        <h4 style={{ color: 'var(--text-main)' }}>Colonial Period</h4>
        <p>The practice suffered a severe decline during the British colonial era. In 1818, following the Uva-Wellassa uprising, Angampora was banned by the British administration, forcing masters to practice in secret to keep the traditions alive.</p>

        <h4 style={{ color: 'var(--text-main)' }}>Modern Revival</h4>
        <p>Post-independence, Angampora has seen a resurgence. Today, it is revered as a national heritage and actively taught to preserve the traditional combat techniques and philosophy.</p>
      </section>

      <section className="card" style={{ marginBottom: '2rem' }}>
        <h2>Martial Arts Masters</h2>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Active Year</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {masters.map((master, index) => (
                <tr key={index}>
                  <td>{master.name}</td>
                  <td>{master.position}</td>
                  <td>{master.year}</td>
                  <td>{master.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card">
        <h2>Location</h2>
        <p><strong>Angampora Training Center</strong></p>
        <p>123, Ancient Heritage Road,<br/>Cultural Triangle,<br/>Sri Lanka</p>
        <div style={{
          width: '100%', 
          height: '300px', 
          backgroundColor: '#e0d5c1', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '4px',
          color: 'var(--text-muted)'
        }}>
          [Interactive Map Placeholder]
        </div>
      </section>

    </div>
  );
};

export default About;
