import React from 'react';

function About() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#fff',
      padding: '40px'
    }}>
      <div style={{
        maxWidth: '700px',
        textAlign: 'center',
        backgroundColor: '#fdfdfd',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '2px solid #800000'
      }}>
        <h1 style={{ color: '#800000', marginBottom: '20px' }}>About the Student Portal</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Welcome to your personalized Student Portal — a space designed to simplify your academic life.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '15px' }}>
          Here, you can manage your profile, explore registered and unregistered courses, check your grades, and stay updated with university news and notices.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '15px' }}>
          Our mission is to provide a clean, intuitive, and supportive experience for every student — helping you stay organized, informed, and confident throughout your academic journey.
        </p>
      </div>
    </div>
  );
}

export default About;

