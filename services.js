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

// Service Image Mapping
const serviceImages = {
  // Service 1 - Sign Boards
  led: 'images/services/led.jpg',
  metal: 'images/services/metal.jpg',
  clipon: 'images/services/clipon.jpg',
  roof: 'images/services/roof.jpg',
  pylon: 'images/services/pylon.jpg',
  sandwitch: 'images/services/sandwitch.jpg',
  house: 'images/services/house.jpg',

  // Service 3 - CNC Cutting
  Laser: 'images/services/laser.jpeg',
  Acrylic: 'images/services/acryliccc.webp',

  // Service 4 - Creative Art Works
  Paintings: 'images/services/painting.jpg',
  Mural: 'images/services/mural_paintings.jpg',

  // Service 5 - Interior Design
  Residential: 'images/services/residential.jpg',
  Renovation: 'images/services/renovation.jpeg',
  ACP: 'images/services/acp.jpeg'
};

// Preload images for instant switching
function preloadImages() {
  for (const key in serviceImages) {
    const img = new Image();
    img.src = serviceImages[key];
  }
}

// Add click event listeners to all service buttons
document.addEventListener('DOMContentLoaded', function() {
  // Preload images
  preloadImages();
  
  // Get all service buttons
  const serviceButtons = document.querySelectorAll('.service-btn2');
  
  // Add click event listener to each button
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Get the service type from data-type attribute
      const serviceType = this.getAttribute('data-type');
      
      // Find the closest section to get the service number
      const section = this.closest('section');
      const serviceId = section.id;
      const imageId = `serviceImage${serviceId.replace('service', '')}`;
      
      // Get the image element
      const imageElement = document.getElementById(imageId);
      
      // Update image if we have a mapping for this service type
      if (serviceImages[serviceType]) {
        // Reduce transition duration for mobile
        const isMobile = window.innerWidth < 768;
        imageElement.style.transitionDuration = isMobile ? '100ms' : '300ms';
        
        // Add fade-out effect
        imageElement.style.opacity = '0';
        
        // Change image and fade in with shorter delay on mobile
        setTimeout(() => {
          imageElement.src = serviceImages[serviceType];
          // Force browser to recognize the change
          imageElement.offsetHeight;
          imageElement.style.opacity = '1';
        }, isMobile ? 10 : 200);
      }
      
      // Update active state of buttons in this section
      const sectionButtons = section.querySelectorAll('.service-btn2');
      sectionButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-700', 'text-gray-200');
      });
      
      // Add active state to clicked button
      this.classList.remove('bg-gray-700', 'text-gray-200');
      this.classList.add('bg-primary', 'text-white');
    });
  });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.style.opacity = '1';
  } else {
    backToTopButton.style.opacity = '0';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});