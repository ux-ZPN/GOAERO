import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="section-top-line" style={{ padding: '0 10%' }}>
                <span className="section-label">Contact Us</span>
                <div className="line"></div>
                <i className="fa-solid fa-chevron-right"></i>
            </div>

            <div className="contact-grid">
                <div className="contact-photo">
                    <div className="orange-backdrop"></div>
                    <div className="qr-code-box">
                        <i className="fa-solid fa-qrcode" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="contact-info">
                        <h4>Let's Work Together :</h4>
                        <p><i className="fa-solid fa-envelope"></i> goaero.dev.in@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i> +91 8134904755</p>
                        <p><i className="fa-solid fa-phone"></i> +91 60004 22020</p>
                        <p><i className="fa-brands fa-instagram"></i> <a href="https://www.instagram.com/goaero.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>@goaero.in</a></p>
                        <p><i className="fa-brands fa-linkedin-in"></i> <a href="https://www.linkedin.com/in/go-aero-7814503a8/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GoAero on LinkedIn</a></p>
                    </div>
                </div>

                <div className="form-area">
                    <h2 className="hello-title"><span>"</span> DROP A LINE <span>.</span></h2>
                    <p className="lead-text">
                        Ready to start a project? Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <select>
                                <option>Web Development</option>
                                <option>UI/UX Design</option>
                                <option>Graphic Design</option>
                                <option>Video Editing</option>
                                <option>Social Media Content</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea rows="5" placeholder="Project Details..." required></textarea>
                        </div>
                        <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>
                            Send Message <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
