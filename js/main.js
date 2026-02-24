/* ============================================
   Company Arone Anónimo — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===========================
    // MOBILE NAVIGATION
    // ===========================
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('show') &&
            !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // ===========================
    // HEADER SCROLL EFFECT
    // ===========================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (header) {
            if (scrollY > 80) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        }
        lastScroll = scrollY;
    });

    // ===========================
    // ACTIVE NAV LINK ON SCROLL
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    function setActiveLink() {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // ===========================
    // HERO SLIDESHOW CAROUSEL
    // ===========================
    const heroSlides = document.querySelectorAll('.hero__slide');
    const heroIndicators = document.querySelectorAll('.hero__indicator');
    const SLIDE_DURATION = 5000; // 5 seconds per slide
    let heroCurrentSlide = 0;
    let slideInterval = null;

    function goToHeroSlide(index) {
        heroSlides.forEach(slide => slide.classList.remove('hero__slide--active'));
        heroIndicators.forEach(ind => ind.classList.remove('hero__indicator--active'));

        heroCurrentSlide = index;
        if (heroSlides[heroCurrentSlide]) {
            heroSlides[heroCurrentSlide].classList.add('hero__slide--active');
        }
        if (heroIndicators[heroCurrentSlide]) {
            heroIndicators[heroCurrentSlide].classList.add('hero__indicator--active');
        }
    }

    function nextHeroSlide() {
        const next = (heroCurrentSlide + 1) % heroSlides.length;
        goToHeroSlide(next);
    }

    function startSlideshow() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextHeroSlide, SLIDE_DURATION);
    }

    // Indicator clicks
    heroIndicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const slideIndex = parseInt(indicator.dataset.slide);
            goToHeroSlide(slideIndex);
            startSlideshow(); // Reset timer
        });
    });

    // Start the slideshow
    if (heroSlides.length > 1) {
        startSlideshow();
    }

    // ===========================
    // COUNTER ANIMATION
    // ===========================
    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animateCounter(el) {
        const target = parseInt(el.dataset.count);
        if (!target) return;

        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutExpo(progress);
            el.textContent = Math.floor(target * easedProgress).toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    // Observe counter elements
    const counterEls = document.querySelectorAll('[data-count]');
    if (counterEls.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterEls.forEach(el => counterObserver.observe(el));
    }

    // ===========================
    // PROCESS TIMELINE ANIMATION
    // ===========================
    const processSection = document.querySelector('.process');
    const processSteps = document.querySelectorAll('.process__step');
    const processLineFill = document.getElementById('process-line-fill');

    if (processSection && processSteps.length > 0) {
        const processObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let delay = 0;
                    processSteps.forEach((step) => {
                        setTimeout(() => {
                            step.classList.add('active');
                        }, delay);
                        delay += 400;
                    });
                    if (processLineFill) {
                        setTimeout(() => {
                            processLineFill.style.width = '100%';
                        }, 200);
                    }
                    processObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        processObserver.observe(processSection);
    }

    // ===========================
    // SCROLL REVEAL ANIMATION
    // ===========================
    const revealElements = document.querySelectorAll(
        '.section__header, .service-card, .about__feature, .portfolio__item, ' +
        '.testimonial-card, .trust-bar__item, .contact__detail, .footer__links, ' +
        '.about__image, .about__content, .contact__form-wrapper, .contact__info, ' +
        '.cta__content'
    );

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('reveal', 'active');
                    }, index * 80);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }

    // ===========================
    // PORTFOLIO FILTER
    // ===========================
    const filterBtns = document.querySelectorAll('.portfolio__filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio__item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ===========================
    // TESTIMONIALS SLIDER
    // ===========================
    const testimonialsTrack = document.getElementById('testimonials-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const dotsContainer = document.getElementById('testimonials-dots');

    if (testimonialsTrack && testimonialCards.length > 0) {
        let currentPage = 0;
        let cardsPerView = getCardsPerView();

        function getCardsPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function getTotalPages() {
            return Math.ceil(testimonialCards.length / cardsPerView);
        }

        function updateSlider() {
            const gap = 24; // 1.5rem
            const cardWidth = testimonialCards[0].offsetWidth + gap;
            const offset = currentPage * cardsPerView * cardWidth;
            testimonialsTrack.style.transform = `translateX(-${offset}px)`;

            // Update dots
            if (dotsContainer) {
                dotsContainer.querySelectorAll('.testimonials__dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === currentPage);
                });
            }
        }

        function createDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            const totalPages = getTotalPages();
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('button');
                dot.className = 'testimonials__dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Página ${i + 1}`);
                dot.addEventListener('click', () => {
                    currentPage = i;
                    updateSlider();
                });
                dotsContainer.appendChild(dot);
            }
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentPage = Math.max(0, currentPage - 1);
                updateSlider();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentPage = Math.min(getTotalPages() - 1, currentPage + 1);
                updateSlider();
            });
        }

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        testimonialsTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        testimonialsTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    currentPage = Math.min(getTotalPages() - 1, currentPage + 1);
                } else {
                    currentPage = Math.max(0, currentPage - 1);
                }
                updateSlider();
            }
        }, { passive: true });

        // Responsive recalc
        window.addEventListener('resize', () => {
            cardsPerView = getCardsPerView();
            currentPage = 0;
            createDots();
            updateSlider();
        });

        createDots();
    }

    // ===========================
    // CONTACT FORM → WHATSAPP
    // ===========================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service');
            const serviceText = service.options[service.selectedIndex]?.text || '';
            const message = document.getElementById('message').value.trim();

            let waMessage = `¡Hola! Soy *${name}*.\n\n`;
            waMessage += `📱 Teléfono: ${phone}\n`;
            if (email) waMessage += `📧 Email: ${email}\n`;
            waMessage += `🔧 Servicio: ${serviceText}\n\n`;
            waMessage += `📝 Detalle:\n${message}`;

            const encodedMessage = encodeURIComponent(waMessage);
            const whatsappURL = `https://wa.me/51959784254?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');

            // Feedback
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
                submitBtn.style.background = '#10b981';
                submitBtn.style.color = '#fff';
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    // ===========================
    // SMOOTH SCROLL FOR ANCHORS
    // ===========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================
    // PORTFOLIO CAROUSELS
    // ===========================
    document.querySelectorAll('.portfolio__carousel').forEach(carousel => {
        const imgs = carousel.querySelectorAll('.portfolio__carousel-img');
        const dots = carousel.querySelectorAll('.portfolio__dot');
        if (imgs.length <= 1) return;

        let currentIdx = 0;
        let autoInterval;

        function goTo(idx) {
            imgs[currentIdx].classList.remove('active');
            dots[currentIdx].classList.remove('active');
            currentIdx = idx;
            imgs[currentIdx].classList.add('active');
            dots[currentIdx].classList.add('active');
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goTo(i);
                resetAuto();
            });
        });

        function autoAdvance() {
            autoInterval = setInterval(() => {
                goTo((currentIdx + 1) % imgs.length);
            }, 4000);
        }

        function resetAuto() {
            clearInterval(autoInterval);
            autoAdvance();
        }

        autoAdvance();
    });

});
