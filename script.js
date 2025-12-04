'use strict';

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Only attach listeners to elements that exist to avoid runtime errors
const clickableElems = [navCloseBtn, overlay, navOpenBtn].filter(Boolean);
clickableElems.forEach(el => {
  el.addEventListener("click", function () {
    if (!navbar || !overlay) return;
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
});

const navbarLinks = document.querySelectorAll("[data-navbar-link]");
if (navbarLinks && navbarLinks.length && navbar && overlay) {
  navbarLinks.forEach(link => {
    link.addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (!header) return;
  const scrolled = window.scrollY >= 16;
  header.classList.toggle("active", scrolled);

  // Swap logo image src between default and dark/black version when scrolled
  try {
    const logo = document.getElementById('siteLogo');
    if (logo) {
      const defaultSrc = logo.dataset.defaultSrc || logo.getAttribute('src');
      const darkSrc = logo.dataset.darkSrc;
      if (scrolled && darkSrc) {
        if (logo.getAttribute('src') !== darkSrc) logo.setAttribute('src', darkSrc);
      } else {
        if (logo.getAttribute('src') !== defaultSrc) logo.setAttribute('src', defaultSrc);
      }
    }
  } catch (e) {
    // silent fail if DOM changes; don't block other scripts
    console.warn('Logo swap error', e);
  }
});