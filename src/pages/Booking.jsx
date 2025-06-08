import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-section">
      <h1>Book an Appointment</h1>
      <p className="booking-description">
        Fill out the form below and we'll confirm your appointment shortly.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>

          <input type="text" placeholder="Pet Name" required />
          <input type="text" placeholder="Owner Name" required />
          <input type="email" placeholder="Email" required />

          <select required>
            <option value="">Select a Service</option>
            <option value="checkup">Routine Checkup</option>
            <option value="vaccination">Vaccination</option>
            <option value="dental">Dental Care</option>
            <option value="grooming">Grooming</option>
          </select>

          <input type="date" required />
          <input type="time" required />

          <textarea placeholder="Additional Notes (optional)" rows="4"></textarea>

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