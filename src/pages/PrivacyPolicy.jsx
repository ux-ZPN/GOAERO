import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Link to="/" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Back to Home
            </Link>

            <header className="legal-header">
                <h1 className="legal-title">Privacy <span>Policy</span>.</h1>
                <p className="legal-update-date">Last Updated: March 2026</p>
            </header>

            <div className="legal-content">
                <section>
                    <h3>Introduction</h3>
                    <p>
                        Welcome to GoAero. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h3>Information We Collect</h3>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul>
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>
                </section>

                <section>
                    <h3>How We Use Information</h3>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>
                </section>

                <section>
                    <h3>Cookies & Analytics</h3>
                    <p>
                        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                        If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                    </p>
                </section>

                <section>
                    <h3>Third-Party Services</h3>
                    <p>
                        Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling
                        those connections may allow third parties to collect or share data about you. We do not control these third-party
                        websites and are not responsible for their privacy statements.
                    </p>
                </section>

                <section>
                    <h3>Data Protection</h3>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or
                        accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees,
                        agents, contractors and other third parties who have a business need to know.
                    </p>
                </section>

                <section>
                    <h3>User Rights</h3>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    <ul>
                        <li>Request access to your personal data.</li>
                        <li>Request correction of your personal data.</li>
                        <li>Request erasure of your personal data.</li>
                        <li>Object to processing of your personal data.</li>
                        <li>Request restriction of processing your personal data.</li>
                    </ul>
                </section>

                <section>
                    <h3>Policy Updates</h3>
                    <p>
                        We keep our privacy policy under regular review. Any changes we make to our privacy policy in the future will be posted
                        on this page and, where appropriate, notified to you by email.
                    </p>
                </section>

                <section>
                    <h3>Contact Information</h3>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <br /><br />
                        <strong>Email:</strong> goaero.dev.in<br />
                        <strong>Phone:</strong> +91 8134904755
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
