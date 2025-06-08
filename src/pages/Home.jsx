import { Link } from 'react-router-dom';

function Home() {
  return (
  <section className="hero-section">
  <div className="hero-content">
    <div className="hero-text">
      <h1>Welcome to PawPoint</h1>
      <p>Compassionate care for your furry family.</p>
      <div className="hero-actions">
      <Link to="/services" className="btn">Explore Services</Link>
      <Link to="/booking" className="btn">Book Appointment</Link>
      </div>
    </div>
    <footer className="hero-designer">
      <p>
        Designed by
        <a href="https://abdulmalekhousroum.netlify.app" target="_blank" rel="noopener noreferrer">Abdulmalek</a>
        &
        <a href="https://fdaaportfolio.netlify.app" target="_blank" rel="noopener noreferrer">Fdaa</a>
      </p>
    </footer>
  </div>
  </section>
  );
}

export default Home;