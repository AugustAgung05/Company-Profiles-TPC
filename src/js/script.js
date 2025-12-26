const header = document.getElementById('main-header');

document.addEventListener("DOMContentLoaded", function() {
    
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 5) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('nav-menu');

    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            
            navMenu.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.product-slider-container');

    sliders.forEach((slider) => {
        const track = slider.querySelector('.slider-track');
        const originalSlides = track.children;
        const slideCount = originalSlides.length;

        const firstSlideClone = originalSlides[0].cloneNode(true);
        track.appendChild(firstSlideClone);

        let currentIndex = 0;
        
        const moveToSlide = (index, useTransition = true) => {
            if (useTransition) {
                track.style.transition = 'transform 0.8s ease-in-out';
            } else {
                track.style.transition = 'none';
            }
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        const nextSlide = () => {
            currentIndex++;
            moveToSlide(currentIndex);
        };

        track.addEventListener('transitionend', () => {
            if (currentIndex === slideCount) {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
            }
        });

        setInterval(nextSlide, 3000);
    });
});