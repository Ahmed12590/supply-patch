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
