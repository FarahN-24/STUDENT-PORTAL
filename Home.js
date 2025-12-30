import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assests/background.png";

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const term = searchTerm.trim().toLowerCase();
    const routes = {
      courses: '/dynamicRecipeCourse/Courses',
      grades: '/dynamicRecipeCourse/Grades',
      profile: '/dynamicRecipeCourse/Profile',
      about: '/about',
      contact: '/contact',
      services: '/services',
      infopage: '/infoPage'
    };
    if (routes[term]) {
      navigate(routes[term]);
    } else {
      alert('No match found');
    }
  };

  return (
    <>
      <div style={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '0'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 0
        }} />

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '40px',
          zIndex: 1,
          position: 'relative',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '30px', width: '100%', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="🔍 Search anything..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '3px solid #fff',
                fontSize: '20px',
                backgroundColor: '#fdfdfd',
                color: 'gray'
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#6a0dad',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Search
            </button>
          </div>

          {/* Welcome Banner */}
          <div style={{
            backgroundColor: '#6a0dad',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            textAlign: 'center',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '30px',
            width: '100%',
            maxWidth: '900px'
          }}>
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Welcome back, Farah!</h2>
            <p style={{ fontSize: '18px' }}>Always stay updated in your student portal</p>
          </div>

          {/* Navigation Cards */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
            width: '100%',
            maxWidth: '900px'
          }}>
            {[
              { label: 'Courses', route: '/dynamicRecipeCourse/Courses', icon: '📘' },
              { label: 'Profile', route: '/dynamicRecipeCourse/Profile', icon: '👤' },
              { label: 'Grades', route: '/dynamicRecipeCourse/Grades', icon: '📝' }
            ].map((item) => (
              <div
                key={item.label}
                onClick={() => navigate(item.route)}
                style={{
                  backgroundColor: '#f3e5f5',
                  border: '2px solid #6a0dad',
                  padding: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                  flex: 1,
                  textAlign: 'center',
                  color: '#333',
                  cursor: 'pointer',
                  transition: '0.3s'
                }}
              >
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.icon} {item.label}</h3>
                <p style={{ fontSize: '16px' }}>Click to view your {item.label.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
