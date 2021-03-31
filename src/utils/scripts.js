/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */

import $ from 'jquery';
import 'bootstrap';

// Collapse Navbar
function navbarCollapse() {
    if ($("#mainNav").offset().top > 20) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};

// Smooth scrolling using jQuery easing
function smoothScrolling(e) {
    if (window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate({ scrollTop: target.offset().top - 70 }, 1000, "swing");
            return false;
        }
    }
}

$(() => {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', smoothScrolling);

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', () => $(".navbar-collapse").collapse("hide"));

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({ target: "#mainNav", offset: 100 });

    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).on('scroll', navbarCollapse);
});