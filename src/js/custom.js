/*
 * Custom Script
 */

/* Wow animate starts */
new WOW().init();

/* Scroll to Top */

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrolltoTop").style.display = "block";
  } else {
      document.getElementById("scrolltoTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ScrolltoTop smoothly
scrolltoTop.addEventListener('click', () => window.scroll({top:0, behavior:'smooth'}));

/* Fixed Submenu in Page */
const subNav = document.querySelector('#pageSubmenu');
let topOfNav = subNav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = subNav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

