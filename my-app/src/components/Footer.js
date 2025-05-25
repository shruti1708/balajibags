import React from 'react';

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '40px 20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        marginTop: '60px',
      }}
    >
      <div
        style={{
          maxWidth: '',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '30px',
          paddingLeft: "4rem"
        }}
      >
        {/* Brand Section */}
        <div style={{ flex: '1 1 250px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
            Balaji Bags
          </h2>
          <p style={{ maxWidth: '300px', lineHeight: '1.6', color: '#bdc3c7' }}>
            Crafting eco-friendly, durable, and traditional bags with love from Jaipur, supporting local artisans and sustainability.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><a href="#products" style={linkStyle}>Products</a></li>
            <li><a href="#about" style={linkStyle}>About Us</a></li>
            <li><a href="#contact" style={linkStyle}>Contact</a></li>
            <li><a href="#faq" style={linkStyle}>FAQs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>Contact Us</h3>
          <p>Email: <a href="mailto:info@balajibags.com" style={linkStyle}>info@balajibags.com</a></p>
          <p>Phone: <a href="tel:+918387923306" style={linkStyle}>+91 83879 23306</a></p>
          <p>Address: Jaipur, Rajasthan, India</p>
        </div>

        {/* Social Media */}
        <div style={{ flex: '1 1 150px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '15px', fontWeight: '600' }}>Follow Us</h3>
          <div style={{ display: 'flex', gap: '15px', fontSize: '24px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> {/* You can use react-icons or fontawesome */}
              <svg fill="#ecf0f1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.594-1.325 1.326v21.348c0 .732.593 1.326 1.325 1.326h11.495v-9.294h-3.13v-3.622h3.13v-2.672c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.466.098 2.797.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.588l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.594 1.324-1.326v-21.35c0-.732-.594-1.326-1.325-1.326z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Instagram">
              <svg fill="#ecf0f1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5a4.25 4.25 0 014.25 4.25v8.5a4.25 4.25 0 01-4.25 4.25h-8.5a4.25 4.25 0 01-4.25-4.25v-8.5a4.25 4.25 0 014.25-4.25zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 11-.001 7.001A3.5 3.5 0 0112 8.5zm4.75-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialLinkStyle} aria-label="Twitter">
              <svg fill="#ecf0f1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.95 13.95 0 011.671 3.15a4.92 4.92 0 001.523 6.574 4.897 4.897 0 01-2.229-.616v.06a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.397 0-.79-.023-1.175-.067a13.945 13.945 0 007.557 2.213c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633a10.025 10.025 0 002.46-2.548l-.047-.02z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #444', marginTop: '30px', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#777' }}>
        © {new Date().getFullYear()} Balaji Bags. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#ecf0f1',
  textDecoration: 'none',
  transition: 'color 0.3s',
};

const socialLinkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: '#34495e',
  color: '#ecf0f1',
  textDecoration: 'none',
  transition: 'background-color 0.3s',
};

export default Footer;
