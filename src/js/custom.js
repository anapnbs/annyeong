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
$('#scrolltoTop').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});

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

const triggers = document.querySelectorAll('li.dropdown > a.nav-link');
  //const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('#top');
const dropdownContainer = document.querySelector('.dropdown-menu > .container');

  function handleEnter() {
    //console.log('hello');
    // this.classList.add('trigger-enter');
    // setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    // background.classList.add('open');
    //const dropdownContainer = document.querySelector('.dropdown-menu > div.container');
    const dropdown = document.querySelector('.dropdown-menu');
    // dropdown.classList.add('show');
    // var x, y;

    // x = dropdown.getBoundingClientRect().width;
    // y = dropdown.getBoundingClientRect().height;
    const dropdownCoords = dropdownContainer.getBoundingClientRect();
    //console.log(x, y);
    

    const coords = {
        y: dropdownCoords.height,
        x: dropdownCoords.width
    };
    console.log(x,y);
    dropdown.style.setProperty('width', coords.x+'px');
    dropdown.style.setProperty('height', coords.y+'px');
  }
//   function handleLeave() {
//     this.classList.remove('trigger-enter', 'trigger-enter-active');
//     background.classList.remove('open');
//   }

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  //triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));