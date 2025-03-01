//testimonials

let currentTestimonialIndex = 0;
let autoScrollInterval;
let touchStartX = 0;
let touchEndX = 0;
function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
    changeTestimonial(currentTestimonialIndex);
  }, 4500);
}
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}
const testimonialContainer = document.getElementById("testimonialContainer");
testimonialContainer.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  stopAutoScroll();
});
testimonialContainer.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
});
testimonialContainer.addEventListener("touchend", () => {
  const swipeDistance = touchStartX - touchEndX;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      currentTestimonialIndex =
        (currentTestimonialIndex + 1) % testimonials.length;
    } else {
      currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) %
        testimonials.length;
    }
    changeTestimonial(currentTestimonialIndex);
  }
  startAutoScroll();
});
testimonialContainer.addEventListener("mouseenter", stopAutoScroll);
testimonialContainer.addEventListener("mouseleave", startAutoScroll);
startAutoScroll();

const testimonials = [
  {
    text: "Working with Outview Dsign has been a game-changer for our business. From their creative designs to on-time delivery, they exceed our expectations every single time.",
    name: "Midhun",
    position: "CEO, Brand Crafters",
    image:
      "https://public.readdy.ai/ai/img_res/48279e6b0a1597d4e971bfdc44e42993.jpg",
  },
  {
    text: "Outview Dsign truly delivers what they promise. Their attention to detail and innovative approach helped transform our ideas into stunning signage. We couldn't be happier with the results!",
    name: "Anjali K",
    position: "Founder, Zenith Interiors",

    image:
      "https://public.readdy.ai/ai/img_res/61eee364fe0adb1c680027c01a5d10c1.jpg",
  },
  {
    text: "Outview Dsign's expertise in CNC fabrication and custom signage is unmatched. Their team turned our complex requirements into a flawless final product that perfectly represents our brand.",
    name: "Sneha R",
    position: "Marketing Head, Elite Co.",
    image:
      "https://public.readdy.ai/ai/img_res/0eab6afac271bd1c4fc68a6b54cb640e.jpg",
  },
  {
    text: "We have worked with Outview Dsign for years, and they never fail to impress us with their creativity and craftsmanship. Their team truly understands the art of creating lasting impressions.",
    name: "Vikram P",
    position: "CEO, TechSphere Ltd.",
    image:
      "https://public.readdy.ai/ai/img_res/b60087203747a8af8e02a7b34334a090.jpg",
  },
  {
    text: "Outview Dsign's professionalism and commitment to quality set them apart. They brought our vision to life with stunning designs and excellent service. Highly recommended for any signage or interior needs!",
    name: "Priya N",
    position: "Operations Manager, Horizon Ventures",
    image:
      "https://public.readdy.ai/ai/img_res/92804830f5323e82d78b0dfb7f79b72d.jpg",
  },
];

function changeTestimonial(index) {
  const container = document.querySelector(".testimonial-container");
  const testimonial = testimonials[index];
  const testimonialHTML = `
<div class="testimonial-slide active">
<blockquote class="bg-gray-700 p-8 rounded-lg shadow-lg mb-8">
<p class="text-gray-400 text-lg mb-6">"${testimonial.text}"</p>
<footer class="flex items-center">
<img src="${testimonial.image}" alt="Client" class="w-12 h-12 rounded-full mr-4">
<div>
<p class="font-bold">${testimonial.name}</p>
<p class="text-gray-400">${testimonial.position}</p>
</div>
</footer>
</blockquote>
</div>
`;
  container.innerHTML = testimonialHTML;
  const dots = document.querySelectorAll(".testimonial-container + div button");
  dots.forEach((dot, i) => {
    dot.className = `w-3 h-3 rounded-full ${
      i === index ? "bg-primary" : "bg-gray-300"
    }`;
  });
}

// Counter animation
function animateCounter(element) {
  const target = parseInt(element.dataset.count);
  let count = 0;
  const duration = 2000; // 2 seconds
  const step = target / (duration / 16); // 16ms per frame for smooth 60fps

  function updateCount() {
    count += step;
    if (count < target) {
      element.textContent = Math.floor(count);
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target + '+'; // Add '+' symbol when counter finishes
    }
  }

  updateCount();
}

// Start animation when element is in view
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(animateCounter);
      observer.unobserve(entry.target);
    }
  });
}

// Set up the Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });

  const counterSection = document.querySelector('[data-count]').closest('section');
  observer.observe(counterSection);
});
