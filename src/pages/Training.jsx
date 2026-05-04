import React, { useState } from 'react';
import { X } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Angam',
    description: 'Angam Unarmed combat utilizing parts of the human body, such as gataputtu (locks and grips) andpora haramba (strikes and blocks)',
    image: '/src/assets/images/training1.png',
    modalImage: '/src/assets/images/training1-detail.jpeg',
  },
  {
    id: 2,
    title: 'Illangam',
    description: 'Using various types of arms and weaponry, comprising spears, swords, and sticks.',
    image: '/src/assets/images/training2.png',
    modalImage: '/src/assets/images/training2-detail.png',
  },
  {
    id: 3,
    title: 'Maya angam',
    description: 'Its most unique feature is the use of spells and incantations or spiritual power as a fighting technique.',
    image: '/src/assets/images/training3.png',
    modalImage: '/src/assets/images/training3-detail.png',
  },
];

const Training = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (course) => setSelected(course);
  const closeModal = () => setSelected(null);

  return (
    <div className="container page-container">
      <h1>Our Training Programs</h1>
      <p style={{ maxWidth: '800px', marginBottom: '3rem' }}>
        We offer a variety of training courses designed for all skill levels. Each program is led by experienced masters dedicated to preserving the authentic traditions of Angampora.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {courses.map((course) => (
          <div key={course.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '350px', backgroundColor: '#e0d5c1', position: 'relative' }}>
              <img
                src={course.image}
                alt={course.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', maxWidth:'400px',padding:'15px 10px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted)">[Image: ' + course.title + ']</div>';
                }}
              />
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginTop: 0 }}>{course.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', flex: 1 }}>{course.description}</p>
              <button onClick={() => openModal(course)} style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed', inset: 0,
            backgroundColor: 'rgba(30, 20, 10, 0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2000, padding: '1rem',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: '10px',
              maxWidth: '80vw',
              // width: '100%',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              animation: 'fadeInUp 0.25s ease',
            }}
          >
            {/* Modal Image */}
            <div style={{ width: '100%', height: '80vh', backgroundColor: '#e0d5c1', display: 'flex', alignItems: 'center', justifyContent: 'center' , padding:'15px 15px  15px 0px'}}>
              <img
                src={selected.modalImage}
                alt={selected.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-size:0.9rem">[Upload detail image: ' + selected.title + ']</div>';
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Training;
