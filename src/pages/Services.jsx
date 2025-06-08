import { Link } from 'react-router-dom';
import "../styles/Service.css";

function Services() {
  return (
    <section className="services-section">
      <h1>Our Services</h1>
      <p className="services-description">
        We offer personalized care for your pets — from routine checkups to grooming and vaccinations.
      </p>

      <div className="services-grid">
        <div className="service-card-vertical">
          <img
            src="/src/assets/checkup.jpg"
            alt="Routine Checkup"
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">Routine Checkup</h2>
            <p className="card-description">
              Regular exams to ensure your pet stays in great shape.
            </p>
            <ul className="card-features">
              <li>Full body examination</li>
              <li>Weight and temperature check</li>
              <li>Behavior and diet consultation</li>
            </ul>
            <Link
              to="/booking"
              state={{ selectedService: "Routine Checkup" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>



        <div className="service-card-vertical">
          <img src="/src/assets/vaccination.jpg" alt="Vaccination" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Vaccination</h2>
            <p className="card-description">
              Protect your pet with our essential vaccinations. Prevent illness before it starts.
            </p>
            <ul className="card-features">
              <li>Core and optional vaccines</li>
              <li>Vet consultation included</li>
              <li>Follow-up reminders</li>
            </ul>
            <Link
              to="/booking"
              state={{ selectedService: "Vaccination" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="service-card-vertical">
          <img src="/src/assets/dental.jpg" alt="Dental Care" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Dental Care</h2>
            <p className="card-description">
              Prevent dental issues with professional cleanings and checkups.
            </p>
            <ul className="card-features">
              <li>Teeth cleaning and scaling</li>
              <li>Oral exams for early detection</li>
              <li>Dental hygiene recommendations</li>
            </ul>
            <Link
              to="/booking"
              state={{ selectedService: "Dental Care" }}
              className="btn"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="service-card-vertical">
          <img src="/src/assets/grooming.jpg" alt="Grooming" className="card-image" />
          <div className="card-content">
            <h2 className="card-title">Grooming</h2>
            <p className="card-description">
              Gentle grooming to keep your pet clean, healthy, and stylish.
            </p>
            <ul className="card-features">
              <li>Bathing and drying</li>
              <li>Hair trimming and styling</li>
              <li>Nail clipping and ear cleaning</li>
            </ul>
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