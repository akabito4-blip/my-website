document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const filterButtons = document.querySelectorAll('.tag-filter button');
  const serviceCards = document.querySelectorAll('.category-grid .card');

  if (filterButtons.length && serviceCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;
        serviceCards.forEach((card) => {
          const matches = category === 'all' || card.dataset.category === category;
          card.hidden = !matches;
        });
      });
    });
  }
});
