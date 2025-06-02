document.addEventListener("DOMContentLoaded", function() {
  // ==================== Mobile Menu ====================
  const openBtn = document.getElementById("menu-open-button");
  const closeBtn = document.getElementById("menu-close-button");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  const overlay = document.createElement("div");
  overlay.className = "mobile-overlay";
  document.body.appendChild(overlay);

  function openMenu() {
    navMenu.classList.add("open");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navMenu.classList.remove("open");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // ==================== Testimonial Slider ====================
  if (typeof Swiper !== "undefined") {
    // Initialize Swiper with all necessary options
    const testimonialSwiper = new Swiper('.testimonial-section .swiper', {
      // Required parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        disabledClass: 'swiper-button-disabled' // Add disabled state
      },
      
      // Pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      
      // Autoplay
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      
      // Accessibility
      a11y: {
        prevSlideMessage: 'Previous testimonial',
        nextSlideMessage: 'Next testimonial',
      },
      
      // Keyboard control
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      
      // Touch events
      touchEventsTarget: 'container',
      grabCursor: true,
      
      // Responsive breakpoints
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });

    // Manual control fallback
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    
    if (nextButton) {
      nextButton.addEventListener('click', function() {
        testimonialSwiper.slideNext();
      });
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', function() {
        testimonialSwiper.slidePrev();
      });
    }

    // Log initialization
    console.log('Testimonial slider initialized successfully');
    
  } else {
    console.error('Swiper library not found! Please check:');
    console.error('1. Is Swiper JS loaded before this script?');
    console.error('2. Is the CDN link correct?');
  }

  // ==================== Smooth Scrolling ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
});