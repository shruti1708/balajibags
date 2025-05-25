import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you. Whether you have a question about our bags, pricing, or anything else—our team is ready to answer all your questions.</p>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> Balaji Bags, Jaipur, Rajasthan - 302001</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> contact@balajibags.in</p>
          <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM – 7:00 PM</p>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
