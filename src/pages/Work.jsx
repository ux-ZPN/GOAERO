import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './Work.css';

// Set up PDF.js worker with unpkg CDN (officially recommended for react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="pdf-viewer-container">
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="pdf-loading">Loading PDF...</div>}
                error={<div className="pdf-error">Failed to load PDF. Please try again later.</div>}
            >
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel]}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel={{ forceToAxis: true }}
                    grabCursor={true}
                    simulateTouch={true}
                    className="pdf-swiper"
                    spaceBetween={10}
                    slidesPerView={1}
                >
                    {numPages && Array.from(new Array(numPages), (el, index) => (
                        <SwiperSlide key={`page_${index + 1}`}>
                            <div className="pdf-page-wrapper">
                                <Page
                                    pageNumber={index + 1}
                                    width={window.innerWidth > 768 ? 1000 : window.innerWidth * 0.9}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Document>
            <div className="pdf-instructions">
                <i className="fa-solid fa-hand-pointer"></i>
                <span>Swipe or use arrows to flip pages</span>
            </div>
        </div>
    );
};

const ReelItem = ({ src, alt, type }) => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const toggleMute = (e) => {
        e.stopPropagation();
        setIsMuted(!isMuted);
    };

    return (
        <div className="gallery-item item-reel" style={{ position: 'relative' }}>
            {type === 'video' ? (
                <>
                    <video
                        ref={videoRef}
                        muted={isMuted}
                        loop
                        autoPlay
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    >
                        <source src={src} type={src.endsWith('.mpeg') ? 'video/mpeg' : 'video/mp4'} />
                        Your browser does not support the video tag.
                    </video>
                    <button onClick={toggleMute} className="mute-btn">
                        {isMuted ? <i className="fa-solid fa-volume-xmark"></i> : <i className="fa-solid fa-volume-high"></i>}
                    </button>
                </>
            ) : (
                <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            )}
        </div>
    );
};

const Work = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        {
            id: 'graphic',
            title: 'Graphic Design',
            desc: '" SOCIAL MEDIA DESIGN .',
            smallDesc: 'We specialize in crafting impactful graphic designs for social media, creating dynamic feeds, captivating stories, and attention-grabbing thumbnails using energetic layouts.',
            styleClass: 'style-graphic',
            imgSrc: '/assets/graphic_design_mockup_1772652154223.png',
            gridImages: [
                { src: '/assets/916post.jpeg', alt: 'Graphic 16:9 Post' },
                { src: '/assets/11post.jpg', alt: 'Graphic Square 1:1 Post' },
                { src: '/assets/45post.jpeg', alt: 'Graphic 4:5 Post' }
            ],
            tags: [{ t: 'Ps', bg: '#001f3f', color: '#39CCCC' }, { t: 'Ai', bg: '#001f3f', color: '#ff7c00' }]
        },
        {
            id: 'reels',
            title: 'Reels',
            desc: '" CONTENT CREATION & VIDEO EDITING .',
            smallDesc: 'A collection of vertical social media content created and edited to enhance storytelling, brand presence, and audience engagement tailored to diverse industries.',
            styleClass: 'style-reels',
            imgSrc: '/assets/reels_mockup_1772652169818.png',
            gridImages: [
                { src: '/assets/reel1.mp4', alt: 'Reel 1', type: 'video' },
                { src: '/assets/reel2.mp4', alt: 'Reel 2', type: 'video' },
                { src: '/assets/Jeeva.mp4', alt: 'Reel 3', type: 'video' }
            ],
            tags: [{ t: 'Pr', bg: '#2b005e', color: '#d97cff' }, { t: 'Ae', bg: '#001e36', color: '#999999' }]
        },
        {
            id: 'web',
            title: 'Web Development',
            desc: '" MODERN WEB EXPERIENCES .',
            smallDesc: 'Building cutting-edge, fast-loading, and responsive websites that serve as the digital storefront for modern brands. Designed for peak user interaction.',
            styleClass: 'style-web',
            imgSrc: '/assets/web_mockup_1772652185142.png',
            gridImages: [
                { src: '/assets/qrweb.jpeg', alt: 'QR Web Menu', caption: '1. QR Web Menu', description: 'A digital web solution designed for cafes, enabling customers to order food digitally without the hustle. Features an elegant UI and real-world reviews from past customers to confidently guide their choices.' },
                { src: '/assets/xplorexp.png', alt: 'Xplorexp', caption: '2. Xplorexp', description: 'A real-world project built for a travel company. A stunning booking platform featuring dynamic visuals and an intuitive user interface engineered to maximize conversions and simplify journey planning.' }
            ],
            tags: [{ t: 'Re', bg: '#222', color: '#61dafb' }, { t: 'Js', bg: '#f7df1e', color: '#000' }]
        },
        {
            id: 'branding',
            title: 'Logo & Branding',
            desc: 'VISUAL IDENTITY & BRAND STRATEGY',
            smallDesc: 'Flip through our visual identity guide and watch our brand motion story to see how we build cohesive identities through strategy and design.',
            styleClass: 'style-branding',
            pdfUrl: '/assets/branding_guide.pdf',
            introVideo: '/assets/purpleshrine.mp4',
            logoDesignImages: [
                { src: '/assets/logo1.png', alt: 'Logo Design 1' },
                { src: '/assets/logo2.png', alt: 'Logo Design 2' },
                { src: '/assets/logo3.png', alt: 'Logo Design 3' },
                { src: '/assets/logo 4.jpeg', alt: 'Logo Design 4' }
            ],
            tags: [{ t: 'Ai', bg: '#001f3f', color: '#ff7c00' }, { t: 'Ps', bg: '#001f3f', color: '#39CCCC' }, { t: 'Ae', bg: '#00005b', color: '#9999ff' }]
        }
    ];

    return (
        <section className="work-page">
            <div className="section-top-line" style={{ padding: '0 10%' }}>
                <span className="section-label">Our Work</span>
                <div className="line"></div>
                <i className="fa-solid fa-chevron-right"></i>
            </div>

            <div className="toc-container">
                <h2 className="toc-title"><span>"</span> TABLE <span>OF</span> CONTENT <span>.</span></h2>
                <div className="toc-filters">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
                        <div className="icon-box"><i className="fa-solid fa-layer-group"></i></div>
                        <span>All Projects</span>
                    </button>
                    <button className={`filter-btn ${filter === 'graphic' ? 'active' : ''}`} onClick={() => setFilter('graphic')}>
                        <div className="icon-box"><i className="fa-solid fa-pen-nib"></i></div>
                        <span>Graphic Design</span>
                    </button>
                    <button className={`filter-btn ${filter === 'reels' ? 'active' : ''}`} onClick={() => setFilter('reels')}>
                        <div className="icon-box"><i className="fa-solid fa-video"></i></div>
                        <span>Reels</span>
                    </button>
                    <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>
                        <div className="icon-box"><i className="fa-solid fa-laptop-code"></i></div>
                        <span>Web Development</span>
                    </button>
                    <button className={`filter-btn ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>
                        <div className="icon-box"><i className="fa-solid fa-medal"></i></div>
                        <span>Logo & Branding</span>
                    </button>
                </div>
            </div>

            <div className="projects">
                {categories
                    .filter(cat => filter === 'all' || filter === cat.id)
                    .map((cat) => (
                        <div className="project-category" key={cat.id}>
                            <div className={`category-header open`}>
                                <h2>{cat.title} </h2>
                                <div className="line"></div>
                                <div className="vertical-watermark">GOAERO © 2026</div>
                            </div>
                            <div className="category-content open">
                                <p className="project-desc"><span>"</span> {cat.desc} <span>.</span></p>
                                <p className="small-desc">{cat.smallDesc}</p>
                                <div className={`gallery-grid ${cat.styleClass}`}>
                                    {cat.gridImages || cat.pdfUrl ? (
                                        cat.id === 'graphic' ? (
                                            <div className="custom-graphic-grid">
                                                <div className="gallery-item item-l169">
                                                    <img src={cat.gridImages[0].src} alt={cat.gridImages[0].alt} />
                                                </div>
                                                <div className="gallery-item item-s11">
                                                    <img src={cat.gridImages[1].src} alt={cat.gridImages[1].alt} />
                                                </div>
                                                <div className="gallery-item item-p45">
                                                    <img src={cat.gridImages[2].src} alt={cat.gridImages[2].alt} />
                                                </div>
                                            </div>
                                        ) : cat.id === 'reels' ? (
                                            <div className="custom-reels-grid">
                                                {cat.gridImages.map((img, idx) => (
                                                    <ReelItem key={idx} src={img.src} alt={img.alt} type={img.type} />
                                                ))}
                                            </div>
                                        ) : cat.id === 'branding' ? (
                                            <div className="merged-branding-layout">
                                                {cat.pdfUrl && (
                                                    <div className="branding-section-block">
                                                        <h4 className="branding-sub-label">BRAND IDENTITY GUIDE</h4>
                                                        <PDFViewer pdfUrl={cat.pdfUrl} />
                                                    </div>
                                                )}
                                                {cat.introVideo && (
                                                    <div className="branding-section-block">
                                                        <h4 className="branding-sub-label">LOGO MOTION STORY</h4>
                                                        <div className="custom-logo-intro-grid">
                                                            <div className="gallery-item item-logo-intro">
                                                                <video
                                                                    controls
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                    playsInline
                                                                    style={{ width: '100%', borderRadius: '20px' }}
                                                                >
                                                                    <source src={cat.introVideo} type="video/mp4" />
                                                                    Your browser does not support the video tag.
                                                                </video>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {cat.logoDesignImages && (
                                                    <div className="branding-section-block">
                                                        <h4 className="branding-sub-label">LOGOS WE HAVE CRAFTED</h4>
                                                        <div className="logo-design-grid">
                                                            {cat.logoDesignImages.map((img, idx) => (
                                                                <div className="gallery-item item-logo-crafted" key={idx}>
                                                                    <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '15px', borderRadius: '20px' }} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : cat.id === 'web' ? (
                                            <div className="custom-web-layout">
                                                {cat.gridImages.map((img, idx) => (
                                                    <div className="web-project-row" key={idx}>
                                                        <div className="gallery-item item-web">
                                                            <img src={img.src} alt={img.alt} />
                                                        </div>
                                                        <div className="web-project-info">
                                                            <h3 className="web-project-title">{img.caption}</h3>
                                                            <p className="web-project-desc">{img.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : null
                                    ) : (
                                        <div className="gallery-item">
                                            <img src={cat.imgSrc} alt={`${cat.title} Project`} />
                                        </div>
                                    )}
                                    <div className="software-tags">
                                        {cat.tags.map((tag, i) => (
                                            <span key={i} className="st-icon" style={{ backgroundColor: tag.bg, color: tag.color }}>{tag.t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default Work;
