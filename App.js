import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome.js';   // ✅ Import the React component
import './styles/Welcome.css';              // ✅ Import the CSS for styling

import Home from './pages/Home.js';
import About from './pages/About.js';
import Services from './pages/Services.js';
import Contact from './pages/Contact.js';
import DynamicPage from './pages/DynamicPage.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Grades from './pages/Grades.js';
import Profile from './pages/Profile.js';
import Courses from './pages/Courses.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page with login */}
        <Route path="/" element={<Welcome />} /> {/* ✅ Welcome page at root */}

        {/* Dynamic student routes */}
        <Route path="/dynamicRecipeCourse/Courses" element={<Courses />} />
        <Route path="/dynamicRecipeCourse/Grades" element={<Grades />} />
        <Route path="/dynamicRecipeCourse/Profile" element={<Profile />} />

        {/* Main pages with Navbar + Footer */}
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Dynamic page */}
        <Route
          path="/dynamic"
          element={
            <>
              <Navbar />
              <DynamicPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
