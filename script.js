document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Drop-down logic for Categories
    const categories = document.querySelectorAll('.project-category');
    
    // Set initial state based on classes
    categories.forEach(category => {
        const header = category.querySelector('.category-header');
        const content = category.querySelector('.category-content');
        const icon = header.querySelector('.dropdown-icon');
        
        // Initial setup
        if (content.classList.contains('open')) {
            header.classList.add('open');
            content.style.maxHeight = content.scrollHeight + 100 + "px"; // plus margin buffer
            content.style.opacity = '1';
        }
        
        header.addEventListener('click', () => {
            const isOpen = header.classList.toggle('open');
            
            if (isOpen) {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 200 + "px";
                content.style.opacity = '1';
            } else {
                content.classList.remove('open');
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
            }
        });
    });

    // 2. Filter Button Logic (TABLE OF CONTENT)
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state on button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter Categories
            categories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                const header = category.querySelector('.category-header');
                const content = category.querySelector('.category-content');
                
                if(filterValue === 'all' || filterValue === categoryType) {
                    category.style.display = 'block';
                    // force reflow
                    void category.offsetWidth;
                    category.style.opacity = '1';
                    category.style.transform = 'scale(1)';
                    
                    // If a specific filter is clicked, auto-open its dropdown
                    if(filterValue !== 'all') {
                        header.classList.add('open');
                        content.classList.add('open');
                        content.style.maxHeight = content.scrollHeight + 200 + "px";
                        content.style.opacity = '1';
                    }
                } else {
                    category.style.opacity = '0';
                    category.style.transform = 'scale(0.95)';
                    // wait for transition before display none
                    setTimeout(() => {
                        category.style.display = 'none';
                    }, 400); // match css transition
                }
            });
            
            // Optional: scroll smoothly down to the projects section when clicking a filter
            const projectsSection = document.querySelector('.projects');
            window.scrollTo({
                top: projectsSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // 3. Simple image lazy load/floating parallax for hero (optional interactivity)
    const heroImage = document.querySelector('.hero-img');
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        if(heroImage) heroImage.style.transform = `perspective(1000px) rotateY(${-10 + x}deg) rotateX(${10 + y}deg)`;
    });
});
