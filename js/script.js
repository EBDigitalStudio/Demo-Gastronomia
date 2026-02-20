// ── TAB SWITCHING ──
function showTab(name, btn) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
}

// ── MOBILE MENU TOGGLE ──
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  const nav = document.querySelector('.nav-links');

  if (menuOpen) {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'fixed';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = 'rgba(10,10,10,0.97)';
    nav.style.padding = '2rem';
    nav.style.gap = '1.5rem';
    nav.style.backdropFilter = 'blur(12px)';
    nav.style.borderBottom = '1px solid rgba(200,169,110,0.2)';
  } else {
    nav.removeAttribute('style');
  }
}

// Close menu when a nav link is clicked (mobile UX)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) toggleMenu();
  });
});

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '1rem 3rem';
  } else {
    navbar.style.padding = '1.5rem 3rem';
  }
});