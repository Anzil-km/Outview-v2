document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const mobileMenuButton = document.querySelector(".md\\:hidden");
  const mobileMenu = document.querySelector(".md\\:flex");
  const navLinks = document.querySelectorAll('.md\\:flex a[href^="#"]');

  // Function to set active state
  function setActiveLink(id) {
    navLinks.forEach((link) => {
      link.classList.remove("text-primary", "after:w-full");
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("text-primary", "after:w-full");
      }
    });
  }

  // Handle scroll
  window.addEventListener("scroll", function () {
    // Nav shadow logic
    if (window.scrollY > 50) {
      nav.classList.add("shadow-lg");
    } else {
      nav.classList.remove("shadow-lg");
    }

    // Active section detection
    let currentSection = '';
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    document.querySelectorAll("section[id]").forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
        setActiveLink(currentSection);
      }
    });
  });

  // Handle click
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      
      // Remove active state from all links
      navLinks.forEach((l) => l.classList.remove("text-primary", "after:w-full"));
      
      // Add active state to clicked link
      this.classList.add("text-primary", "after:w-full");

      // Smooth scroll to section
      const targetId = this.getAttribute("href").substring(1); // Remove #
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Set initial active state based on current position
  window.dispatchEvent(new Event('scroll'));
});

// Mobile Menu Toggle
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuContent = document.getElementById('menu-content');
  
  if (mobileMenu.classList.contains('hidden')) {
    // Show menu
    mobileMenu.classList.remove('hidden');
    setTimeout(() => {
      menuContent.style.transform = 'translateX(0)';
    }, 100);
  } else {
    // Hide menu
    menuContent.style.transform = 'translateX(100%)';
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 300);
  }
}

// Close menu when clicking outside
document.getElementById("mobile-menu").addEventListener("click", function (e) {
  if (e.target === this) {
    toggleMenu();
  }
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
const formContent = document.getElementById('formContent');
const thankYouMessage = document.getElementById('thankYouMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state on button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const submitText = document.getElementById('submitText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    
    // Switch to loading state
    submitText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    loadingSpinner.classList.add('flex', 'items-center', 'justify-center', 'space-x-2');
    submitButton.disabled = true;

    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Hide form and show thank you message
      formContent.classList.add('hidden');
      thankYouMessage.classList.remove('hidden');
      // Add fade-in animation to thank you message
      thankYouMessage.classList.add('animate-fade-in');
      contactForm.reset();
    })
    .catch(error => {
      // Show error message
      alert('Oops! There was a problem submitting your form. Please try again.');
      // Reset button
      submitText.classList.remove('hidden');
      loadingSpinner.classList.add('hidden');
      submitButton.disabled = false;
    });
  });
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // Add 3D effect for hero section background
  const heroSection = document.getElementById('home');
  const heroBackground = document.getElementById('heroBackground');

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D effect
    const xPercent = (x / rect.width - 0.5) * 10;
    const yPercent = (y / rect.height - 0.5) * 10;
    
    // Apply parallax effect only to background
    heroBackground.style.transform = `translateZ(-20px) scale(1.1) rotateX(${yPercent * 0.5}deg) rotateY(${-xPercent * 0.5}deg)`;
  });
  
  heroSection.addEventListener('mouseleave', () => {
    heroBackground.style.transform = 'translateZ(-20px) scale(1.1) rotateX(0deg) rotateY(0deg)';
  });
});
