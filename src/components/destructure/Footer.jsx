

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>This is Tracom Academy.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: tracom@gmail.com</p>
          <p>Phone: +254712345678</p>
          <h2>Follow Us</h2>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
