document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const progressBars = document.querySelectorAll('.progress-bar');
    const fadeElements = document.querySelectorAll('.fade-in');
    const contactForm = document.getElementById('contactForm');

    navbarScrollEffect();
    initMobileMenu();
    initProgressBars();
    initScrollAnimations();
    initContactForm();

    function navbarScrollEffect() {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    function initMobileMenu() {
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    function initProgressBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 200);
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => observer.observe(bar));
    }

    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
    }

    function initContactForm() {
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const btn = contactForm.querySelector('.submit-btn');
                const originalText = btn.textContent;
                
                btn.textContent = '发送中... 💜';
                btn.disabled = true;

                setTimeout(() => {
                    btn.textContent = '消息已发送 ✨';
                    btn.style.background = 'linear-gradient(135deg, #98ddca, #b8e0d2)';
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = '';
                        btn.disabled = false;
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            });
        }
    }

    smoothScrollForAnchorLinks();

    function smoothScrollForAnchorLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    addParticleEffect();
    
    function addParticleEffect() {
        const body = document.body;
        const particleCount = 20;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 6 + 4}px;
                height: ${Math.random() * 6 + 4}px;
                background: rgba(224, 170, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                left: ${Math.random() * 100}vw;
                top: 100vh;
            `;
            body.appendChild(particle);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatParticle {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    initTypingEffect();
    
    function initTypingEffect() {
        const cursor = document.querySelector('.typing-cursor');
        if (cursor) {
            let show = true;
            setInterval(() => {
                cursor.style.opacity = show ? '0' : '1';
                show = !show;
            }, 500);
        }
    }

    addCardHoverSound();
    
    function addCardHoverSound() {
        const cards = document.querySelectorAll('.blog-card, .skill-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            });
        });
    }
});
