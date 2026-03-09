import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const heroImage = document.querySelector('.hero-img');
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            if (heroImage) heroImage.style.transform = `perspective(1000px) rotateY(${-10 + x}deg) rotateX(${10 + y}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "Why choose our web development services?",
            a: "We combine cutting-edge technology with stunning design to build fast, scalable, and tailored digital experiences that elevate your brand."
        },
        {
            q: "What types of websites do you build?",
            a: "We specialize in everything from high-converting landing pages and portfolios to full-scale web applications and e-commerce platforms using modern React frameworks."
        },
        {
            q: "How long does a typical project take?",
            a: "Project timelines vary based on complexity, but most standard web projects take between 2 to 4 weeks from initial concept to launch."
        },
        {
            q: "Do you provide ongoing technical support?",
            a: "Absolutely! We offer maintenance packages to ensure your app stays updated, secure, and performs at peak efficiency well after launch."
        }
    ];

    const testimonials = [
        {
            quote: "Their Work was really great and the way they executed the idea and made our conference one of the great one in the Upper Assam. Our Secretariats and Other Organising members are very satisfied with the work and we're happy because they made our audience happy.",
            name: "Uddipta Rajkhowa",
            role: "Head of Conference Management, VKVMUN 2025"
        },
        {
            quote: "They understood exactly what we wanted for our brand. The custom UI and seamless functionality exceeded all our expectations.",
            name: "David Chen",
            role: "Creative Director"
        },
        {
            quote: "Highly recommended! The digital transformation they delivered for our brand was handled flawlessly. Their team took the time to truly understand our vision and translated it into a cohesive online experience that significantly elevated our market presence. Exceptional developers and visionary designers!",
            name: "Navin Sen",
            role: "CEO, Xplore XP"
        }
    ];

    return (
        <div className="home-container">
            <header className="hero">
                <div className="hero-left">
                    <span className="badge">Creative Visual</span>
                    <h1 className="main-title">
                        <span>"</span> PORT<br />FOLIO <span>.</span>
                    </h1>
                    <div className="author-area">
                        <i className="fa-solid fa-chevron-right scroll-icon"></i>
                        <span className="author-name">GoAero Team</span>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-animation-wrapper">
                        <div className="scroll-track track-1">
                            <span>UI/UX DESIGN • WEB DEVELOPMENT • BRANDING • CONTENT CREATION • </span>
                            <span>UI/UX DESIGN • WEB DEVELOPMENT • BRANDING • CONTENT CREATION • </span>
                        </div>
                        <div className="scroll-track track-2">
                            <span>SOCIAL MEDIA • VIDEO EDITING • APP DESIGN • DIGITAL STRATEGY • </span>
                            <span>SOCIAL MEDIA • VIDEO EDITING • APP DESIGN • DIGITAL STRATEGY • </span>
                        </div>
                    </div>
                </div>
                <div className="vertical-watermark">GOAERO © 2026</div>
            </header>

            {/* About Us Summary block merged into Home page */}
            <section className="home-section" style={{ paddingBottom: '0' }}>
                <div className="about-stats">
                    <div className="stat-box">
                        <h3>20+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-box">
                        <h3>2+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="stat-box">
                        <h3>10+</h3>
                        <p>Tools Mastered</p>
                    </div>
                    <div className="stat-box">
                        <h3>100%</h3>
                        <p>Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="home-section">
                <div className="section-top-line" style={{ padding: '0 10%' }}>
                    <span className="section-label">Our Capabilities</span>
                    <div className="line"></div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>

                <div className="skills-wrapper">
                    <div className="skills-card">
                        <h2 className="home-title"><span>"</span> EXPERTISE <span>.</span></h2>
                        <p className="home-lead">
                            We bridge the gap between technology and creative media to build impactful digital experiences. From scalable websites to engaging short-form videos and strategic social media content, we help brands connect with their audience and grow online.                        </p>

                        <div className="skills-grid">
                            <div className="skill-column">
                                <h4 className="sub-title">Web Development</h4>
                                <p className="skill-desc">We build fast, scalable, and responsive digital platforms engineered for performance and reliability.</p>
                                <ul>
                                    <li><i className="fa-solid fa-laptop-code"></i> Full-Stack Web Applications</li>
                                    <li><i className="fa-solid fa-bolt"></i> High-Speed Landing Pages</li>
                                    <li><i className="fa-solid fa-server"></i> Performance Optimization</li>
                                    <li><i className="fa-solid fa-mobile-screen"></i> Responsive UI Engineering</li>
                                </ul>
                            </div>
                            <div className="skill-column">
                                <h4 className="sub-title">Design & Content</h4>
                                <p className="skill-desc">We craft engaging visual identities and marketing content designed to captivate your audience.</p>
                                <ul>
                                    <li><i className="fa-solid fa-pen-nib"></i> Graphic Design & Branding</li>
                                    <li><i className="fa-solid fa-object-group"></i> UI/UX Design Prototyping</li>
                                    <li><i className="fa-solid fa-video"></i> Video & Reels Editing</li>
                                    <li><i className="fa-solid fa-bullhorn"></i> Social Media Content</li>
                                </ul>
                            </div>
                        </div>

                        {/* Software Tools Row */}
                        <div className="software-tools-section">
                            <h4 className="sub-title" style={{ width: '100%', textAlign: 'center', margin: '2rem 0', borderBottom: 'none' }}>
                                <span style={{ borderBottom: '2px solid var(--orange)', paddingBottom: '0.5rem' }}>Technologies We Use</span>
                            </h4>

                            <div className="skills-grid">
                                <div className="skill-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h4 className="sub-title">Web Development Tools</h4>
                                    <div className="tech-grid">
                                        <div className="tech-item">
                                            <span className="sk-icon"><i className="fa-brands fa-react" style={{ color: '#61dafb' }}></i></span>
                                            <span className="tech-name">React</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon"><i className="fa-brands fa-js" style={{ color: '#f7df1e' }}></i></span>
                                            <span className="tech-name">JavaScript</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon"><i className="fa-brands fa-css3-alt" style={{ color: '#264de4' }}></i></span>
                                            <span className="tech-name">CSS3</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon"><i className="fa-brands fa-html5" style={{ color: '#e34f26' }}></i></span>
                                            <span className="tech-name">HTML5</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#0f172a' }}>
                                                <svg viewBox="0 0 128 128" width="34" height="34">
                                                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8" />
                                                </svg>
                                            </span>
                                            <span className="tech-name">Tailwind CSS</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon"><i className="fa-brands fa-git-alt" style={{ color: '#f34f29' }}></i></span>
                                            <span className="tech-name">Git</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-column" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h4 className="sub-title">Design & Content Tools</h4>
                                    <div className="tech-grid">
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#001f3f', color: '#39CCCC', fontSize: '1.2rem' }}>Ps</span>
                                            <span className="tech-name">Adobe<br />Photoshop</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#330000', color: '#ff7c00', fontSize: '1.2rem' }}>Ai</span>
                                            <span className="tech-name">Adobe<br />Illustrator</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#2b005e', color: '#d97cff', fontSize: '1.2rem' }}>Pr</span>
                                            <span className="tech-name">Adobe<br />Premiere Pro</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#00005b', color: '#9999ff', fontSize: '1.2rem' }}>Ae</span>
                                            <span className="tech-name">Adobe<br />After Effects</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon">
                                                <svg viewBox="0 0 128 128" width="34" height="34">
                                                    <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0" /><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0" /><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0" /><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0" /><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0" />
                                                </svg>
                                            </span>
                                            <span className="tech-name">Figma</span>
                                        </div>
                                        <div className="tech-item">
                                            <span className="sk-icon" style={{ backgroundColor: '#111' }}>
                                                <img src="/davinci.png" alt="DaVinci Resolve Logo" width="40" height="40" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                                            </span>
                                            <span className="tech-name">DaVinci<br />Resolve</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section merged from About page */}
            <section className="home-section philosophy-wrapper">
                <div className="philosophy-section">
                    <div className="philosophy-header">
                        <div className="philosophy-icon"><i className="fa-solid fa-lightbulb"></i></div>
                        <h2 className="detail-title"><span>"</span> OUR PHILOSOPHY <span>.</span></h2>
                    </div>
                    <p>
                        We believe that great design is inherently tied to function. A beautiful website is useless if it's slow, and a fast application is pointless if it's confusing. Our philosophy revolves around user-centric development we put your customer first. From wireframes and UI designs completely through to the final line of code and post-launch media strategy, we ensure every touchpoint is meticulously crafted.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="home-section">
                <div className="section-top-line" style={{ padding: '0 10%' }}>
                    <span className="section-label">FAQ</span>
                    <div className="line"></div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>

                <div className="faq-container">
                    <h2 className="home-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span>"</span> GOT QUESTIONS? <span>.</span>
                    </h2>

                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleFaq(index)}>
                                {faq.q}
                                <i className={`fa-solid fa-chevron-down faq-icon ${openFaq === index ? 'open' : ''}`}></i>
                            </div>
                            <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="home-section" style={{ paddingBottom: '5rem' }}>
                <div className="section-top-line" style={{ padding: '0 10%' }}>
                    <span className="section-label">Testimonials</span>
                    <div className="line"></div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>

                <h2 className="home-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span>"</span> WHAT THEY SAY <span>.</span>
                </h2>

                <div className="testimonials-grid">
                    {testimonials.map((test, index) => (
                        <div className="testimonial-card" key={index}>
                            <p className="quote">{test.quote}</p>
                            <div className="client-info">
                                <div className="client-avatar">{test.name.charAt(0)}</div>
                                <div className="client-details">
                                    <h4>{test.name}</h4>
                                    <span>{test.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
