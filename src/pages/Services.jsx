import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="services-section">
      <h1>Our Services</h1>
      <p className="services-description">
        We offer personalized care for your pets — from routine checkups to grooming and vaccinations.
      </p>

      <div className="services-grid">
        <div
          className="service-card"
          style={{ backgroundImage: "url('/src/assets/checkup.jpg')" }}
        >
          <div className="card-overlay">
            <h2>Routine Checkup</h2>
            <p>Regular exams to ensure your pet stays in great shape.</p>
            <Link
              to="/booking"
              state={{ selectedService: "Routine Checkup" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/src/assets/vaccination.jpg')" }}
        >
          <div className="card-overlay">
            <h2>Vaccination</h2>
            <p>Protect your pet with our essential vaccinations.</p>
            <Link
              to="/booking"
              state={{ selectedService: "Vaccination" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/src/assets/dental.jpg')" }}
        >
          <div className="card-overlay">
            <h2>Dental Care</h2>
            <p>Prevent dental issues with professional cleanings and checkups.</p>
            <Link
              to="/booking"
              state={{ selectedService: "Dental Care" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div
          className="service-card"
          style={{ backgroundImage: "url('/src/assets/grooming.jpg')" }}
        >
          <div className="card-overlay">
            <h2>Grooming</h2>
            <p>Gentle grooming to keep your pet clean, healthy, and stylish.</p>
            <Link
              to="/booking"
              state={{ selectedService: "Grooming" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;