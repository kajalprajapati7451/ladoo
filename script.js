// Mobile Menu Toggle
    document.getElementById('hamburger').addEventListener('click', function() {
      document.getElementById('nav-links').classList.toggle('active');
    });

    function closeMenu() {
      document.getElementById('nav-links').classList.remove('active');
    }

    // Scroll to top functionality
    document.getElementById('scrollToTopIcon').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll to bottom functionality
    document.getElementById('scrollToBottomIcon').addEventListener('click', function() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
      const scrollTopIcon = document.getElementById('scrollToTopIcon');
      if (window.pageYOffset > 300) {
        scrollTopIcon.style.display = 'flex';
      } else {
        scrollTopIcon.style.display = 'none';
      }
      
      // Navbar background on scroll
      const navbar = document.querySelector('.navbar');
      if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Modal functionality
    document.addEventListener('DOMContentLoaded', function() {
      const brochureBtn = document.getElementById('brochureBtn');
      const modal = document.getElementById('loginModal');
      const closeBtn = modal.querySelector('.close');

      // Open modal when brochure button is clicked
      brochureBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });

      // Close modal on close icon click
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });

      // Close modal when clicking outside the modal content
      window.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });

      // Handle login form submission
      const loginForm = document.getElementById('loginForm');
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! The brochure will be sent to your email shortly.');
        modal.style.display = 'none';
        document.body.style.overflow = '';
      });
      
      // Contact form submission
      const contactForm = document.getElementById('contactForm');
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! Our team will contact you shortly.');
        contactForm.reset();
      });
    });
    
    // Image Slider Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    // Initialize slider
    function showSlide(index) {
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
      
      const sliderContainer = document.getElementById('sliderContainer');
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      // Update dots
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
    
    // Next button
    document.getElementById('nextBtn').addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
    
    // Previous button
    document.getElementById('prevBtn').addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
    
    // Dot navigation
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showSlide(i);
      });
    });
    
    // Auto slide change
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);