import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDog, FaUser, FaEnvelope, FaCalendarAlt, FaClock, FaPaw, FaStickyNote } from "react-icons/fa";
import "../styles/Booking.css"
import { useLocation } from 'react-router-dom';
function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const location = useLocation();
  const selectedService = location.state?.selectedService || "";
  return (
    <section className="booking-section">
      <h1>Book an Appointment</h1>
      <p className="booking-description">
        Fill out the form below and we'll confirm your appointment shortly.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>

        <div className="input-icon-group">
          <FaDog className="input-icon" />
          <input class="inputIcons" type="text" placeholder="Pet Name" required />
        </div>

        <div className="input-icon-group">
          <FaUser className="input-icon" />
          <input class="inputIcons" type="text" placeholder="Owner Name" required />
        </div>

        <div className="input-icon-group">
          <FaEnvelope className="input-icon" />
          <input class="inputIcons" type="email" placeholder="Email" required />
        </div>

        <div className="input-icon-group">
          <FaPaw className="input-icon" />
          <select required className="custom-select" defaultValue={selectedService}>
            <option value="">Select a Service</option>
            <option value="Routine Checkup">Routine Checkup</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Grooming">Grooming</option>
          </select>
        </div>

        <div className="input-icon-group">
          <FaCalendarAlt className="input-icon" />
          <input className="inputIcons" type="date" required />
        </div>

        <div className="input-icon-group">
          <FaClock className="input-icon" />
          <input className="inputIcons" type="time" required />
        </div>

        <div className="input-icon-group">
          <FaStickyNote className="input-icon" style={{ marginTop: '-2rem' }} />
          <textarea
            placeholder="Additional Notes (optional)"
            rows="4"
            className="custom-textarea"
          ></textarea>
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>

      {submitted && (
        <motion.div
          className="confirmation-modal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >

          <div className="confirmation-content">
            <h2>Thank You!</h2>
            <p>Your appointment request has been submitted. We will contact you shortly to confirm.</p>
            <Link to="/" className="btn">Back to Home</Link>
          </div>

        </motion.div>
      )}
    </section>
  );
}

export default Booking;