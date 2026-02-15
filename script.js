// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Add scroll animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards and about cards
    document.querySelectorAll('.product-card, .about-card, .product-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add click animation to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Add floating animation to decorative shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            shape.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
        }, 3000 + index * 500);
    });

    // Add interactive hover effects to buttons
    document.querySelectorAll('.shop-btn, .cta-button, .offer-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add confetti effect on special buttons (fun easter egg)
    let confettiCount = 0;
    document.querySelectorAll('.offer-btn, .cta-button.primary').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confettiCount < 3) {
                createConfetti(this);
                confettiCount++;
            }
        });
    });

    function createConfetti(element) {
        const colors = ['#FF6B9D', '#4ECDC4', '#FFE66D', '#FF6B6B', '#95E1D3'];
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            document.body.appendChild(confetti);

            const angle = (Math.PI * 2 * i) / 20;
            const velocity = 5 + Math.random() * 5;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let posX = x;
            let posY = y;
            let opacity = 1;

            const animate = () => {
                posX += vx;
                posY += vy + 2;
                opacity -= 0.02;

                confetti.style.left = posX + 'px';
                confetti.style.top = posY + 'px';
                confetti.style.opacity = opacity;

                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };
            animate();
        }
    }

    // Add typing effect to tagline (optional enhancement)
    const tagline = document.querySelector('.tagline');
    if (tagline && window.innerWidth > 768) {
        const text = tagline.textContent;
        tagline.textContent = '';
        tagline.style.opacity = '1';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Create mailto link (for basic functionality)
            const subject = encodeURIComponent(`Contact Form: ${formData.subject}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Phone: ${formData.phone}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}`
            );
            
            // Show success message with better UX
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will contact you soon.\n\nFor now, this form opens your email client. In a production environment, this would be connected to a backend server.');
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2000);
            
            // Open email client (optional)
            // window.location.href = `mailto:info@ghatagetraders.com?subject=${subject}&body=${body}`;
        });
    }
});

