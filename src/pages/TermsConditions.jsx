import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Link to="/" className="back-link">
                <i className="fa-solid fa-arrow-left"></i> Back to Home
            </Link>

            <header className="legal-header">
                <h1 className="legal-title">Terms & <span>Conditions</span>.</h1>
                <p className="legal-update-date">Last Updated: March 2026</p>
            </header>

            <div className="legal-content">
                <section>
                    <h3>Acceptance of Terms</h3>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                        In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules
                        applicable to such services.
                    </p>
                </section>

                <section>
                    <h3>Services Description</h3>
                    <p>
                        GoAero is a digital agency providing services including but not limited to Web Design and Development, Graphic Design,
                        Branding, Social Media Content Creation, and Video/Reel Editing. We reserve the right to withdraw or amend the services
                        we provide without notice.
                    </p>
                </section>

                <section>
                    <h3>Intellectual Property</h3>
                    <p>
                        The website and its original content, features, and functionality are owned by GoAero and are protected by international
                        copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                </section>

                <section>
                    <h3>Portfolio Usage Rights</h3>
                    <p>
                        GoAero reserves the right to showcase any completed requested work, including concepts, designs, websites, or video content
                        in our portfolio, social media, and marketing materials, unless a strict non-disclosure agreement (NDA) has been signed
                        prior to the commencement of the project.
                    </p>
                </section>

                <section>
                    <h3>Client Responsibilities</h3>
                    <p>Clients are expected to:</p>
                    <ul>
                        <li>Provide accurate and complete information necessary for the project.</li>
                        <li>Communicate promptly to avoid project delays.</li>
                        <li>Ensure they have the legal right to any text, images, or assets supplied to us for use in their project.</li>
                    </ul>
                </section>

                <section>
                    <h3>Payments and Project Terms</h3>
                    <p>
                        Payment terms, schedules, and specific project timelines will be detailed in individual project proposals or contracts.
                        Work will typically commence after the receipt of an agreed-upon initial deposit. Late payments may result in the
                        suspension of ongoing services or delay in project delivery.
                    </p>
                </section>

                <section>
                    <h3>Limitation of Liability</h3>
                    <p>
                        In no event shall GoAero, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
                        indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data,
                        use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>
                </section>

                <section>
                    <h3>Termination</h3>
                    <p>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever,
                        including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination
                        shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    </p>
                </section>

                <section>
                    <h3>Governing Law</h3>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                <section>
                    <h3>Contact Information</h3>
                    <p>
                        If you have any questions about these Terms, please contact us at:
                        <br /><br />
                        <strong>Email:</strong> goaero.dev.in<br />
                        <strong>Phone:</strong> +91 8134904755
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsConditions;
