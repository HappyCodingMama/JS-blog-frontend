const addEventElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// navbar toggle

const navbar = document.querySelector('#data-navbar');
const navTogglers = document.querySelectorAll('#data-nav-toggler');

const toggleNav = () => navbar.classList.toggle('active');
addEventElements(navTogglers, 'click', toggleNav);

//header animation

const header = document.querySelector('#data-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
