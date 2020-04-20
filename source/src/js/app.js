'use strict';

window.addEventListener('DOMContentLoaded', windowHandler);
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('filter').classList.add('filter--hidden');
});
document.querySelector('.header__logo').addEventListener('click', () => {
    location.reload(true);
})