import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import background from '../assests/background.png';
import logo from '../assests/logo.png';

export default function Welcome() {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validEmail = 'farah.com';
  const validPassword = '12345';

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleSubmit = () => {
    if (email === validEmail && password === validPassword) {
      navigate('/home');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="welcome">
      {/* Background */}
      <div className="welcome__bg" style={{ backgroundImage: `url(${background})` }} />
      <div className="welcome__overlay" />

      {/* Header */}
      <header className="welcome__header">
        <div className="header__left">
          <img src={logo} alt="University Logo" className="logo" />
          <span className="brand">  CARNER'S UNIVERSITY — Faculty of Sciences I</span>
        </div>
        <div className="header__right">
          {!showLoginForm ? (
            <button className="btn login" onClick={handleLoginClick}>Login</button>
          ) : (
            <div className="login__form">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login__input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login__input"
              />
              <button className="btn solid" onClick={handleSubmit}>Submit</button>
              {error && <p className="login__error">{error}</p>}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="welcome__main">
        <h1>Welcome to Faculty of Sciences I</h1>
        <p className="subtitle">
          Join us and unlock your academic journey. Sign in to access your courses, grades, and more!
        </p>

        {/* Notice */}
        <div className="notice">
          <h3>📢 Notice</h3>
          <p> Midterm exams start on <strong>December 15, 2025</strong>.  
          Please check your schedule and submit all assignments before the deadline.</p>
        </div>

        {/* News */}
        <div className="news">
          <h3>📰 News</h3>
          <div className="news__item">
            <h4>New Research Lab Opening</h4>
            <p>The university will inaugurate a state-of-the-art research lab in January 2026 to support innovation in biotechnology</p>
          </div>
          <div className="news__item">
            <h4>Scholarship Program Expanded</h4>
            <p>Starting Spring 2026, additional scholarships will be available for outstanding students in BIOMEDICAL Sciences.</p>
          </div>
        </div>
      </main>

      {/* Scroll Section */}
      <section className="welcome__scroll">
        <h2>Student Services</h2>
        <ul>
          <li>View your marks</li>
          <li>Check your enrolled courses</li>
          <li>Find your exam location</li>
          <li>Retrieve your file number</li>
          <li>Update your profile</li>
          <li>Change your password</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="welcome__footer">
        <span>© {new Date().getFullYear()} CARNER'S UNIVERSITY I</span>
        <div className="footer__links">
          <button className="btn ghost">Support?</button>
          <select className="lang">
            <option>English</option>
            <option>Arabic</option>
            <option>French</option>
          </select>
        </div>
      </footer>
    </div>
  );
}
