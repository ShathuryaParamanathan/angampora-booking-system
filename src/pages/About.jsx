

const About = () => {
  return (
    <div>

      {/* Hero Banner */}
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundImage: 'linear-gradient(rgba(30, 20, 10, 0.55), rgba(20, 15, 5, 0.70)), url("/images/about-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        <div>
          <h1 style={{ color: 'var(--secondary)', fontSize: '3rem', margin: '0 0 1rem 0' }}>About Angampora</h1>
          <p style={{ color: 'white', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            A living heritage — blending combat, spirituality, and Sri Lankan identity.
          </p>
        </div>
      </div>

      <div className="container page-container">
      {/* <h1>About Angampora</h1> */}
      
      <section id="about-us" className="card" style={{ marginBottom: '2rem' }}>
        <h2>About Us</h2>
        <p>
          Angampora is a traditional Sri Lankan martial art that combines combat techniques, self-defense, sport, exercise, and meditation. 
          It focuses heavily on discipline and spiritual development alongside physical prowess.
        </p>

        {/* Mission */}
        <div style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1rem', margin: '1.5rem 0' }}>
          <h3 style={{ marginTop: 0 }}>Our Mission</h3>
          <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-main)', margin: 0 }}>
            Reviving Angampora from its royal origins into a living, community-centered landscape practice.
          </p>
        </div>

      </section>

      <section id="history" className="card" style={{ marginBottom: '2rem' }}>
        <h2>The Origin, Myths, Legends, and Historical Development of Angampora</h2>
  <div style={{
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  flexWrap: 'wrap'
}}>

  {/* Text - 70% */}
  <div style={{ flex: 7, minWidth: '280px' }}>
    <p style={{ 
      color: 'var(--text-muted)', 
      fontStyle: 'italic', 
      lineHeight: '1.7',
      margin: 0
    }}>
      Sri Lanka, though a small island in the Indian Ocean, holds a deep and layered history of culture, belief systems, and indigenous knowledge. Among its most unique heritage practices is Angampora, a traditional martial art that blends combat science, spirituality, and cultural identity.
    </p>
  </div>

  {/* Image - 30% */}
  <div style={{ 
    flex: 3,
    minWidth: '200px',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <img
      src="/images/about-logo.jpeg"
      alt="Angampora"
      style={{ 
        width: '100%',
        maxWidth: '150px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '10px'
      }}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:180px;color:var(--text-muted)">[Image not found]</div>';
      }}
    />
  </div>

</div>
           

        <h4 style={{ color: 'var(--primary)', marginTop: '1.5rem' }}>Mythological Origins</h4>
        <p>Angampora is strongly connected to Sri Lankan myth and Hindu epics, especially the legend of King Ravana. Ravana is described as a powerful warrior king, healer, and master of advanced combat systems. In many traditional beliefs, Angampora is considered one of his ancient warrior skills.</p>
        <p>Over time, Ravana became a symbolic figure linking mythology with indigenous martial traditions, especially in contemporary cultural interpretations.</p>

        <h4 style={{ color: 'var(--primary)' }}>Early Historical Background</h4>
        <p>Although myth shapes its identity, historical texts such as the Mahavamsa suggest that Sri Lanka had organized warrior systems from as early as the 2nd century BCE. Kings like Dutugemunu are recorded as leading powerful armies supported by highly skilled fighters trained in indigenous combat practices.</p>
        <p>These warriors were not only soldiers but also protectors of kingdoms, trained in both armed and unarmed combat techniques.</p>

        <h4 style={{ color: 'var(--primary)' }}>Development Through Kingdoms</h4>
        <p>Angampora developed significantly during the Anuradhapura, Polonnaruwa, Kotte, and Kandyan periods. By the Kandyan era, it had become a structured martial system, practiced in royal courts and specialized training schools (gurukulas).</p>
        <p>Two major schools emerged:</p>
        <ul style={{ color: 'var(--text-main)', lineHeight: '2', paddingLeft: '1.5rem' }}>
          <li><strong>Maruwalliya</strong> tradition</li>
          <li><strong>Sudhaliya</strong> tradition</li>
        </ul>
        <p>These schools trained warriors in techniques such as wrestling, sword fighting, stick combat, and pressure point attacks.</p>

        <h4 style={{ color: 'var(--primary)' }}>Colonial Suppression</h4>
        <p>With the arrival of the Portuguese, Dutch, and later British colonial powers, Angampora faced severe decline. The British government officially banned the practice in the 19th century, and practitioners were harshly punished. Training schools were destroyed, and public practice disappeared.</p>
        <p>As a result, Angampora survived only in secret family lineages and rural traditions, passed down orally from master to student.</p>

        <h4 style={{ color: 'var(--primary)' }}>Survival and Transformation</h4>
        <p>Even under suppression, the art survived by adapting. Some techniques were hidden within traditional Sri Lankan dance forms, allowing movement patterns and combat sequences to be preserved.</p>
        <p>Over time, Angampora also absorbed influences from South Indian martial arts such as Kalaripayattu and Silambam, as well as later Asian systems like karate and kung fu.</p>

        <h4 style={{ color: 'var(--primary)' }}>Modern Revival</h4>
        <p>Today, Angampora is experiencing a cultural revival in Sri Lanka. It is practiced as both a heritage martial art and a performative tradition, symbolizing discipline, identity, and ancient knowledge systems.</p>
        <p style={{ margin: 0 }}>It is increasingly recognized as an important part of Sri Lanka&apos;s intangible cultural heritage.</p>
      </section>

    </div>
    </div>
  );
};

export default About;
