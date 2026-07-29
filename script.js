// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('nav.links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText = open ? '' : 'display:flex; position:absolute; top:70px; left:0; right:0; background:#f6f4ef; flex-direction:column; padding:24px 32px; border-bottom:1px solid rgba(20,23,27,0.16); gap:20px;';
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Gauge marker animates to peak on load (home page only)
const gaugeMarker = document.getElementById('gaugeMarker');
if (gaugeMarker) {
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      setTimeout(() => { gaugeMarker.style.top = '4%'; }, 250);
    });
  });
}

// Contact form (demo only — no backend)
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (contactForm && formNote) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.classList.add('show');
    contactForm.reset();
  });
}

// Job board form (demo only — no backend)
const jobForm = document.getElementById('jobForm');
const jobFormNote = document.getElementById('jobFormNote');
if (jobForm && jobFormNote) {
  jobForm.addEventListener('submit', (e) => {
    e.preventDefault();
    jobFormNote.classList.add('show');
    jobForm.reset();
  });
}
