/* ============================================
   Gaurav Pandya - Portfolio JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ---- Mobile Navigation ----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ---- Smooth Scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Scroll Animations (Intersection Observer) ----
    var animateElements = document.querySelectorAll(
        '.timeline-item, .skill-category, .project-card, .contact-card, .about-grid, .hero-stats .stat'
    );

    animateElements.forEach(function(el) {
        el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(function(el) {
        observer.observe(el);
    });

    // ---- Active Nav Link on Scroll ----
    var sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                document.querySelectorAll('.nav-link').forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // ---- Staggered animation for timeline items ----
    var timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function(item, index) {
        item.style.transitionDelay = (index * 0.1) + 's';
    });

    // ---- Staggered animation for skill categories ----
    var skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.08) + 's';
    });

    // ---- Staggered animation for project cards ----
    var projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(function(card, index) {
        card.style.transitionDelay = (index * 0.08) + 's';
    });
});
