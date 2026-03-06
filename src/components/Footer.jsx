import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-branding">
                    <h2 className="footer-logo">GoAero<span>.</span></h2>
                    <p className="footer-tagline">
                        Building bold, fast, and scalable digital experiences. Let's create something extraordinary together.
                    </p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/goaero.in/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="social-icon"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/go-aero-7814503a8/" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div className="footer-links-container">
                    <div className="footer-links-group">
                        <h4 className="footer-title">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/work">Our Work</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-title">Services</h4>
                        <ul className="footer-links">
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Graphic Design</a></li>
                            <li><a href="#">Video Editing</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact">
                    <h4 className="footer-title">Contact</h4>
                    <p><i className="fa-solid fa-envelope"></i> goaero.dev.in@gmail.com</p>
                    <p><i className="fa-solid fa-phone"></i> +91 8134904755</p>
                    <p><i className="fa-solid fa-phone"></i> +91 60004 22020</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} GoAero Creative Agency. All Rights Reserved.</p>
                <div className="footer-legal">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
