'use strict';

const toggleThemeButton = (_) => {
    document.body.classList.toggle('dark-theme');
}

document.getElementById('toggle-theme').addEventListener('click', toggleThemeButton);