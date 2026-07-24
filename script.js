const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.main-nav a')];

window.addEventListener('scroll', () => {
  const current = sections
    .filter(section => window.scrollY >= section.offsetTop - 140)
    .pop();

  navLinks.forEach(link => link.classList.remove('active'));
  if (current) {
    const active = navLinks.find(link => link.getAttribute('href') === `#${current.id}`);
    if (active) active.classList.add('active');
  }
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const message = form.querySelector('.form-message');
    if (message) {
      message.textContent = 'Thanks! Your message has been received.';
      form.reset();
    } else {
      const button = form.querySelector('button');
      const original = button.textContent;
      button.textContent = 'Subscribed!';
      form.reset();
      setTimeout(() => button.textContent = original, 1800);
    }
  });
});

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => card.animate(
      [
        { transform: 'translateY(6px)', opacity: .75 },
        { transform: 'translateY(0)', opacity: 1 }
      ],
      { duration: 350, easing: 'ease-out' }
    ));

    cards[index % cards.length].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  });
});


/* =====================================================
   Product Category Toggle Data
===================================================== */

const productCatalog = {
  beauty: {
    title: "Beauty & Personal Care",
    badge: "Beauty",
    products: [
      {
        name: "Hydrating Facial Cleanser",
        price: "$8.99",
        image: "images/products/beauty-1.jpg"
      },
      {
        name: "Daily Moisturizing Lotion",
        price: "$10.50",
        image: "images/products/beauty-2.jpg"
      },
      {
        name: "Vitamin C Face Serum",
        price: "$12.99",
        image: "images/products/beauty-3.jpg"
      },
      {
        name: "Professional Hair Shampoo",
        price: "$9.75",
        image: "images/products/beauty-4.jpg"
      },
      {
        name: "Repairing Hair Conditioner",
        price: "$9.75",
        image: "images/products/beauty-5.jpg"
      },
      {
        name: "Body Wash Collection",
        price: "$7.25",
        image: "images/products/beauty-6.jpg"
      },
      {
        name: "Men's Grooming Kit",
        price: "$15.99",
        image: "images/products/beauty-7.jpg"
      },
      {
        name: "Makeup Brush Set",
        price: "$11.49",
        image: "images/products/beauty-8.jpg"
      },
      {
        name: "Natural Lip Care Set",
        price: "$6.50",
        image: "images/products/beauty-9.jpg"
      },
      {
        name: "Daily Skincare Gift Set",
        price: "$18.99",
        image: "images/products/beauty-10.jpg"
      }
    ]
  },

  home: {
    title: "Home & Kitchen",
    badge: "Home & Kitchen",
    products: [
      {
        name: "Industrial Storage Tote with Wheels, Black 40 Gallon",
        price: "$19.99",
        image: "products/home1.jpg"
      },
      {
        name: "30 Gallon Resin Deck Box Waterproof Outdoor Storage Box",
        price: "$54.99",
        image: "products/home2webp_.webp"
      },
      {
        name: "Industrial Storage Tote with Wheels, Black 40 Gallon",
        price: "$29.50",
        image: "products/home3.jpg"
      },
      {
        name: "32 Gallon Wheeled Heavy Duty Plastic Garbage Can",
        price: "$44.99",
         image: "products/home4.webp"
      },
      {
        name: "6 Quart Touchscreen Air Fryer",
        price: "$16.99",
       image: "products/home5.webp"
      },
      {
        name: "Bushel Plastic Laundry Hamper with 4 Ergonomic Handles",
        price: "$13.25",
        image: "products/home6_.webp"
      },
      {
        name: "Industrial 40 Gallon Wheeled Tote Plastic Storage Bin,",
        price: "$22.99",
        image: "products/home7.jpg"
      },
      {
        name: "100 Gallon Waterproof Resin Deck Box, Large Outdoor Storage Box",
        price: "$8.75",
        image: "products/home8.jpg"
      },
      {
        name: "Insulated Travel Tumbler",
        price: "$14.99",
        image: "images/products/home-9.jpg"
      },
      {
        name: "Kitchen Utensil Set",
        price: "$17.50",
        image: "images/products/home-10.jpg"
      },
      {
        name: "Kitchen Utensil Set",
        price: "$17.50",
        image: "images/products/home-10.jpg"
      },
      {
        name: "Kitchen Utensil Set",
        price: "$17.50",
        image: "images/products/home-10.jpg"
      }
    ]
  },

  health: {
    title: "Health & Wellness",
    badge: "Health",
    products: [
      {
        name: "Digital Blood Pressure Monitor",
        price: "$28.99",
        image: "images/products/health-1.jpg"
      },
      {
        name: "Daily Multivitamin Tablets",
        price: "$11.99",
        image: "images/products/health-2.jpg"
      },
      {
        name: "First Aid Essentials Kit",
        price: "$16.50",
        image: "images/products/health-3.jpg"
      },
      {
        name: "Digital Thermometer",
        price: "$9.25",
        image: "images/products/health-4.jpg"
      },
      {
        name: "Heating Pad",
        price: "$21.99",
        image: "images/products/health-5.jpg"
      },
      {
        name: "Portable Massage Device",
        price: "$34.99",
        image: "images/products/health-6.jpg"
      },
      {
        name: "Sleep Support Pillow",
        price: "$24.50",
        image: "images/products/health-7.jpg"
      },
      {
        name: "Wellness Organizer Box",
        price: "$7.99",
        image: "images/products/health-8.jpg"
      },
      {
        name: "Reusable Hot & Cold Pack",
        price: "$8.50",
        image: "images/products/health-9.jpg"
      },
      {
        name: "Personal Wellness Scale",
        price: "$25.99",
        image: "images/products/health-10.jpg"
      }
    ]
  },

  sports: {
    title: "Sports & Outdoors",
    badge: "Sports",
    products: [
      {
        name: "Professional Basketball",
        price: "$17.99",
        image: "images/products/sports-1.jpg"
      },
      {
        name: "Resistance Band Set",
        price: "$13.50",
        image: "images/products/sports-2.jpg"
      },
      {
        name: "Premium Yoga Mat",
        price: "$19.99",
        image: "images/products/sports-3.jpg"
      },
      {
        name: "Insulated Sports Bottle",
        price: "$12.25",
        image: "images/products/sports-4.jpg"
      },
      {
        name: "Adjustable Dumbbell Set",
        price: "$49.99",
        image: "images/products/sports-5.jpg"
      },
      {
        name: "Outdoor Camping Lantern",
        price: "$18.75",
        image: "images/products/sports-6.jpg"
      },
      {
        name: "Fitness Jump Rope",
        price: "$7.99",
        image: "images/products/sports-7.jpg"
      },
      {
        name: "Portable Camping Chair",
        price: "$24.99",
        image: "images/products/sports-8.jpg"
      },
      {
        name: "Athletic Training Gloves",
        price: "$14.50",
        image: "images/products/sports-9.jpg"
      },
      {
        name: "Outdoor Hiking Backpack",
        price: "$39.99",
        image: "images/products/sports-10.jpg"
      }
    ]
  },

  tools: {
    title: "Tools & Home Improvement",
    badge: "Tools",
    products: [
      {
        name: "Cordless Power Drill",
        price: "$49.99",
        image: "images/products/tools-1.jpg"
      },
      {
        name: "Multi-Purpose Tool Set",
        price: "$38.50",
        image: "images/products/tools-2.jpg"
      },
      {
        name: "Professional Screwdriver Set",
        price: "$18.99",
        image: "images/products/tools-3.jpg"
      },
      {
        name: "Heavy Duty Measuring Tape",
        price: "$8.25",
        image: "images/products/tools-4.jpg"
      },
      {
        name: "Adjustable Wrench Set",
        price: "$21.99",
        image: "images/products/tools-5.jpg"
      },
      {
        name: "LED Work Light",
        price: "$16.50",
        image: "images/products/tools-6.jpg"
      },
      {
        name: "Home Repair Hammer",
        price: "$11.99",
        image: "images/products/tools-7.jpg"
      },
      {
        name: "Utility Knife Set",
        price: "$9.75",
        image: "images/products/tools-8.jpg"
      },
      {
        name: "Wall Mounting Hardware Kit",
        price: "$13.99",
        image: "images/products/tools-9.jpg"
      },
      {
        name: "Portable Tool Organizer",
        price: "$27.99",
        image: "images/products/tools-10.jpg"
      }
    ]
  }
};


/* HTML Elements */

const catalogGrid =
  document.getElementById("catalogProductGrid");

const categoryTitle =
  document.getElementById("activeCategoryTitle");

const categoryCount =
  document.getElementById("activeCategoryCount");

const categoryTabs =
  document.querySelectorAll(".product-tab");


/* Safe Text */

function escapeProductText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* Render Products */

function renderProducts(categoryKey) {
  const category = productCatalog[categoryKey];

  if (
    !category ||
    !catalogGrid ||
    !categoryTitle ||
    !categoryCount
  ) {
    return;
  }

  categoryTitle.textContent = category.title;

  categoryCount.textContent =
    `${category.products.length} products available`;

  catalogGrid.innerHTML = category.products
    .map((product, index) => {
      const safeName =
        escapeProductText(product.name);

      const safePrice =
        escapeProductText(product.price);

      const safeImage =
        escapeProductText(product.image);

      const safeBadge =
        escapeProductText(category.badge);

      return `
        <article
          class="catalog-product-card"
          style="animation-delay: ${index * 45}ms"
        >
          <div class="catalog-product-image">
            <span class="catalog-product-badge">
              ${safeBadge}
            </span>

            <img
              src="${safeImage}"
              alt="${safeName}"
              loading="lazy"
              onerror="
                this.parentElement.classList.add('image-error')
              "
            >
          </div>

          <div class="catalog-product-content">
            <h3 class="catalog-product-name">
              ${safeName}
            </h3>

            <div class="catalog-product-bottom">
              <div class="catalog-product-price">
                <small>Wholesale Price</small>

                <strong>
                  ${safePrice}
                </strong>
              </div>

              <a
                href="contact.html?product=${encodeURIComponent(product.name)}"
                class="catalog-product-button"
                aria-label="Request ${safeName}"
                title="Request availability"
              >
                →
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}


/* Category Click */

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const selectedCategory =
      this.dataset.category;

    categoryTabs.forEach((button) => {
      button.classList.remove("active");

      button.setAttribute(
        "aria-selected",
        "false"
      );
    });

    this.classList.add("active");

    this.setAttribute(
      "aria-selected",
      "true"
    );

    renderProducts(selectedCategory);
  });
});


/* Default Products */

renderProducts("beauty");