import React, { useState, useRef } from 'react';
import './Work.css';

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
                        src={src}
                        muted={isMuted}
                        loop
                        autoPlay
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
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
                { src: '/assets/reel2.mp4', alt: 'Reel 2', type: 'video' }
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
                                    {cat.gridImages ? (
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
