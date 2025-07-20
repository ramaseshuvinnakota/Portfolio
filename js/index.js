// Smooth nav highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

function onScroll() {
  let scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos > sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === sec.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', onScroll);

// Hamburger menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show');
  });
});

// Light / Dark mode
const toggleBtn = document.querySelector('.mode-toggle');
const root = document.documentElement;
// Use localStorage to remember theme
function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggleBtn.innerHTML = (theme === 'dark')
    ? '<span class="sr-only">Switch to Light Mode</span><i class="fas fa-sun"></i>'
    : '<span class="sr-only">Switch to Dark Mode</span><i class="fas fa-moon"></i>';
  localStorage.setItem('theme', theme);
}
function toggleTheme() {
  const theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  setTheme(theme);
}
toggleBtn.addEventListener('click', toggleTheme);
// On load
(function () {
  const prefTheme = localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(prefTheme);
})();

// Simple Contact form, demo message (no backend, no spam)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  let msg = document.getElementById('formMsg');
  msg.textContent = "Thank you for reaching out! I'll reply soon.";
  this.reset();
  setTimeout(()=> msg.textContent='', 4000);
});