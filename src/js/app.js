import * as flsFunctions from "./modules/functions.js";
import * as burgerMenu from "./modules/burger-menu.js";

flsFunctions.isWebp();
burgerMenu.burgerMenu();

import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper__arrow-next",
        prevEl: ".swiper__arrow-prev",
    },

    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.8,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3.2,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
