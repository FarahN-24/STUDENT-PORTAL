import React from 'react';

function Contact() {
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
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: '#fdfdfd',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '2px solid #800000'
      }}>
        <h1 style={{ color: '#800000', marginBottom: '20px' }}>📬 Contact Us</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginBottom: '30px' }}>
          Have questions or need assistance? We’re here to help you with any issues or inquiries.
        </p>

        {/* Contact Info */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#800000' }}>📧 Email</h3>
          <p>support@farahwebsite.com</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#800000' }}>📞 Phone</h3>
          <p>+961 123 456 789</p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#800000' }}>📍 Address</h3>
          <p>Beirut, Lebanon</p>
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: '30px' }}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#800000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}>
            ✉️ Send Us a Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
