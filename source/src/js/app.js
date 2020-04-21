'use strict';

import '../css/style.css';
import { windowHandler } from './listeners';

window.addEventListener('DOMContentLoaded', windowHandler);
document.querySelector('.header__logo').addEventListener('click', () => {
    location.reload(true);
})