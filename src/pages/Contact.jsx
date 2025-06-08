import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions or need help? Reach out — we’re here for you and your pets!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
           <h2>Send Us a Message</h2>
           <input type="text" placeholder="Your Name" required />
           <input type="email" placeholder="Your Email" required />
           <textarea placeholder="Your Message" rows="5" required></textarea>
           <button type="submit" className="btn">Submit</button>
      </form>

      {submitted && (
         <motion.div
           className="confirmation-modal"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.4 }}>

               <div className="confirmation-content">
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
                  <Link to="/" className="btn">Back to Home</Link>
               </div>
          </motion.div>
      )}

      <div className="contact-grid">

       <div className="contact-box visit-us">
          <h2>Visit Us</h2>
          <p>123 Paw Street, Ottawa, ON</p>
          <p>Email: contact@pawpoint.ca</p>
          <p>Phone: (613) 555-0123</p>
       </div>

       <div className="contact-box visit-us">
          <h2>Hours</h2>
          <p>Mon – Fri: 9am – 6pm</p>
          <p>Sat: 10am – 4pm</p>
          <p>Sun: Closed</p>
       </div>

      </div>

    </section>
  );
}

export default Contact;