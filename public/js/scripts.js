"use strict";

const navbarToggle = navbar.querySelector('#navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-nav');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};
navbarToggle.addEventListener('click', toggleNavbarVisibility);
navbarLinksContainer.addEventListener('click', e => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);
"use strict";

function check() {
  var checkBox = document.getElementById('checkbox');
  var monthly = document.getElementsByClassName('monthly');
  var yearly = document.getElementsByClassName('yearly');
  for (var i = 0; i < monthly.length; i++) {
    if (checkBox.checked == false) {
      monthly[i].style.display = 'block';
      yearly[i].style.display = 'none';
    } else if (checkBox.checked == true) {
      monthly[i].style.display = 'none';
      yearly[i].style.display = 'block';
    }
  }
}
check();