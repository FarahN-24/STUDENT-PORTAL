import React from 'react';
import { useLocation } from 'react-router-dom';

function DynamicPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const topic = queryParams.get('topic') || 'Default Topic';

  // Define creative descriptions for topics
  const topicDescriptions = {
    Course: '📘 Explore your registered courses, manage schedules, and access materials with ease.',
    Grades: '📊 Track your academic performance, view detailed grades, and monitor your GPA progress.',
    Profile: '👤 Manage your personal information, update your details, and stay connected with your advisor.',
    Services: '⚙️ Access student services like course management, academic support, and official documents.',
    Default: '✨ Welcome! Select a topic to discover personalized content tailored to your student journey.',
  };

  const description = topicDescriptions[topic] || topicDescriptions.Default;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#fdfdfd',
      padding: '40px'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        border: '2px solid #800000'
      }}>
        <h1 style={{ color: '#800000', marginBottom: '20px' }}>Dynamic Page</h1>
        <h2 style={{ marginBottom: '20px' }}>Current Topic: <span style={{ color: '#800000' }}>{topic}</span></h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default DynamicPage;

