import React, { useState } from 'react';

function Services() {
  const [activeBox, setActiveBox] = useState(null);

  const services = [
    {
      key: 'courseManagement',
      title: 'Course Management',
      description: 'Manage your registered courses, drop or add new ones, and view course schedules.',
    },
    {
      key: 'courseMaterials',
      title: 'Course Materials',
      description: 'Access lecture slides, assignments, and reading materials for all your subjects.',
    },
    {
      key: 'profileManagement',
      title: 'Profile Management',
      description: 'Update your personal information, change your password, and manage your student profile.',
    },
    {
      key: 'academicSupport',
      title: 'Academic Support',
      description: 'Connect with advisors, request tutoring, and explore academic resources.',
    },
    {
      key: 'documents',
      title: 'Documents',
      description: 'Download transcripts, certificates, and official letters from the university.',
    },
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#fff' }}>
      <h2 style={{ color: '#800000', marginBottom: '30px', textAlign: 'center' }}>🎯 Student Services</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {services.map((service) => (
          <div
            key={service.key}
            onClick={() => setActiveBox(service.key === activeBox ? null : service.key)}
            style={{
              width: '250px',
              backgroundColor: '#fdfdfd',
              border: '2px solid #800000',
              borderRadius: '10px',
              padding: '20px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: '0.3s',
            }}
          >
            <h3 style={{ color: '#800000', marginBottom: '10px' }}>{service.title}</h3>
            {activeBox === service.key && (
              <p style={{ color: '#333', fontSize: '14px' }}>{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

