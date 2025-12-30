// Footer.jsx
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Stay informed</h3>
        <p>Sign up for our newsletter.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-content">
        <div className="contact-info">
          <h4>Carner's University</h4>
          <p>Student Affairs Office</p>
          <p>125 Nashua Street, Suite 540</p>
          <p>Boston, MA 02114-1101</p>
          <p>617.726.2200</p>
          <p>contact@carneruniv.edu</p>
        </div>

        <div className="footer-links">
          <div>
            <h5>Explore</h5>
            <a href="#">Stories</a>
            <a href="#">Events</a>
            <a href="#">Where to Give</a>
            <a href="#">How to Give</a>
          </div>
          <div>
            <h5>About</h5>
            <a href="#">FAQs</a>
            <a href="#">Carner's University</a>
            <a href="#">Academic Partners</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#">Privacy Policy</a>
            <a href="#">Social Media Policy</a>
            <a href="#">Copyright Notice</a>
          </div>
        </div>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Carner's University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

