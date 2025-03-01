// Client data
const clients = [
  {
    id: "client2",
    name: "Castrol",
    type: "corporate",
    image: "images/untitled-1_81.png",
    description: "A global leader in automotive and industrial lubricants.",
    projectDetails:
      "Custom signage and branding solutions for multiple service centers across South India.",
    testimonial:
      "Outview Design provided exceptional branding that enhanced our visibility.",
    services: ["Signage Solutions", "Branding", "Retail Display"],
  },
  {
    id: "client3",
    name: "Veedol",
    type: "corporate",
    image: "images/veedolpng.png",
    description: "A trusted lubricant brand serving industries worldwide.",
    projectDetails:
      "Comprehensive branding for retail stores and service stations.",
    testimonial:
      "Their signage solutions perfectly align with our brand identity.",
    services: ["Retail Signage", "Branding", "Display Systems"],
  },
  {
    id: "client11",
    name: "SBI Life Insurance",
    type: "corporate",
    image: "images/sbi.png",
    description:
      "A leading life insurance provider securing millions of lives.",
    projectDetails:
      "Interior branding and wayfinding solutions for branches across south India.",
    testimonial:
      "Professional, timely, and visually impressive work by Outview Design.",
    services: ["Interior Branding", "Wayfinding Systems", "Office Signage"],
  },
  {
    id: "client4",
    name: "Crompton",
    type: "corporate",
    image: "images/crompton.jpg",
    description: "A renowned brand in electrical appliances and lighting.",
    projectDetails: "Retail store branding and product display solutions.",
    testimonial:
      "Outview Design transformed our store presence with elegant signage.",
    services: ["Retail Signage", "Product Displays", "Interior Branding"],
  },
  {
    id: "client6",
    name: "JSW Paints",
    type: "corporate",
    image: "images/jsw.jpg",
    description: "A pioneer in innovative and eco-friendly paint solutions.",
    projectDetails: "Custom signage for showrooms and dealer outlets.",
    testimonial: "Their designs perfectly represent the vibrancy of our brand.",
    services: ["Showroom Signage", "Branding", "Retail Displays"],
  },
  {
    id: "client10",
    name: "Chemmanur International Jewellers",
    type: "corporate",
    image: "images/chemmannur-jwellers.jpg",
    description: "A legacy brand in fine jewelry with a global presence.",
    projectDetails: "Luxury signage and branding for flagship stores.",
    testimonial:
      "Elegant and premium designs that complement our brand identity.",
    services: ["Luxury Signage", "Retail Branding", "Storefront Displays"],
  },
  {
    id: "client9",
    name: "Manappuram Finance",
    type: "corporate",
    image: "images/manappuram-finance.jpg",
    description: "One of India’s leading NBFCs providing financial services.",
    projectDetails:
      "Comprehensive signage solutions for 10+ branches across South India.",
    testimonial: "Consistently reliable and high-quality branding solutions.",
    services: ["Branch Signage", "Interior Branding", "Wayfinding Systems"],
  },
  {
    id: "client1",
    name: "Manappuram Foundation",
    type: "corporate",
    image: "images/manappuram.jpg",
    description: "The CSR arm of Manappuram, driving social impact.",
    projectDetails: "Awareness campaign signage and event branding.",
    testimonial: "Their work truly elevated our community initiatives.",
    services: ["Event Branding", "Awareness Signage", "Campaign Displays"],
  },
  {
    id: "client8",
    name: "Ma Care Academy",
    type: "corporate",
    image: "images/ma-care.png",
    description: "A premier institution for healthcare education and training.",
    projectDetails: "Educational signage and wayfinding systems.",
    testimonial:
      "Professional and clear signage that enhances student experience.",
    services: [
      "Educational Signage",
      "Wayfinding Systems",
      "Interior Branding",
    ],
  },
  {
    id: "client7",
    name: "Kallyan Hypermarket",
    type: "corporate",
    image: "images/kallyan.png",
    description: "A one-stop destination for all grocery and retail needs.",
    projectDetails: "Retail branding and promotional signage.",
    testimonial:
      "Their designs helped us create an engaging shopping experience.",
    services: ["Retail Signage", "Promotional Displays", "Storefront Branding"],
  },
  {
    id: "client5",
    name: "Jos Alukkas",
    type: "corporate",
    image: "images/jos.jpg",
    description: "A trusted name in fine jewelry and craftsmanship.",
    projectDetails: "Elegant store signage and showroom branding.",
    testimonial:
      "Their craftsmanship in signage matches the quality of our jewelry.",
    services: ["Luxury Signage", "Retail Branding", "Storefront Displays"],
  },
];

let currentClientIndex = 0;

// Open client modal
function openClientModal(clientId) {
  const client = clients.find((c) => c.id === clientId);
  currentClientIndex = clients.findIndex((c) => c.id === clientId);

  if (client) {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div class="aspect-video md:aspect-auto md:h-64">
          <img src="${client.image}" alt="${
      client.name
    }" class="w-full h-full object-cover rounded-lg">
        </div>
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-4">${client.name}</h3>
          <p class="text-gray-400 mb-4 text-sm md:text-base">${
            client.description
          }</p>
          <h4 class="text-lg font-semibold mb-2">Project Details</h4>
          <p class="text-gray-400 mb-4 text-sm md:text-base">${
            client.projectDetails
          }</p>
          <h4 class="text-lg font-semibold mb-2">Services Provided</h4>
          <ul class="list-disc list-inside text-gray-400 text-sm md:text-base">
            ${client.services.map((service) => `<li>${service}</li>`).join("")}
          </ul>
        </div>
      </div>
      <blockquote class="mt-6 p-4 border-l-4 border-primary bg-gray-900 rounded">
        <p class="italic text-gray-400 text-sm md:text-base">"${
          client.testimonial
        }"</p>
      </blockquote>
    `;

    document.getElementById("clientModal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

// Close client modal
function closeClientModal() {
  document.getElementById("clientModal").classList.add("hidden");
  document.body.style.overflow = "";
}

// Navigate to previous client
function previousClient() {
  currentClientIndex =
    (currentClientIndex - 1 + clients.length) % clients.length;
  openClientModal(clients[currentClientIndex].id);
}

// Navigate to next client
function nextClient() {
  currentClientIndex = (currentClientIndex + 1) % clients.length;
  openClientModal(clients[currentClientIndex].id);
}

// Close modal when clicking outside
document.getElementById("clientModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeClientModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeClientModal();
  }
});
