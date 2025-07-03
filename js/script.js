'use strict';

const filterDropdown = document.getElementById('filter');
const cards = document.querySelectorAll('.card');

filterDropdown.addEventListener('change', (_) => {
  const selectedCategory = filterDropdown.value;

  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');

    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

