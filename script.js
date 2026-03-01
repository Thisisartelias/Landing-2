document.addEventListener('DOMContentLoaded', () => {

  // ===============================
  // LANGUAGE TOGGLE
  // ===============================
  const enEls = document.querySelectorAll('.lang-en');
  const nlEls = document.querySelectorAll('.lang-nl');
  const enBtn = document.getElementById('lang-en');
  const nlBtn = document.getElementById('lang-nl');

  function setLanguage(lang) {
    if(lang === 'en') {
      enEls.forEach(el => el.style.display='inline');
      nlEls.forEach(el => el.style.display='none');
    } else {
      enEls.forEach(el => el.style.display='none');
      nlEls.forEach(el => el.style.display='inline');
    }
  }

  if(enBtn && nlBtn){
    enBtn.addEventListener('click', () => setLanguage('en'));
    nlBtn.addEventListener('click', () => setLanguage('nl'));
  }

  // Initialize default language
  setLanguage('en');

  // ===============================
  // LIGHT/DARK MODE TOGGLE
  // ===============================
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if(savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'light-mode' ? '🌙' : '☀️';
  }

  if(themeToggle){
    themeToggle.addEventListener('click', () => {
      if(document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', '');
        themeToggle.textContent = '🌙';
      } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '☀️';
      }
    });
  }

  // ===============================
  // DISMISSIBLE TOP BANNER
  // ===============================
  const banner = document.getElementById('top-banner');
  const bannerClose = document.getElementById('banner-close');

  if (banner && bannerClose) {
    bannerClose.addEventListener('click', () => {
      banner.style.transition = "all 0.5s ease";
      banner.style.height = "0";
      banner.style.padding = "0";
      banner.style.opacity = "0";
      setTimeout(() => banner.style.display = "none", 500);
    });
  }

  // ===============================
  // FORMS + FORMSPREE
  // ===============================
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const action = form.getAttribute('action');
      const formData = new FormData(form);
      const successMsg = form.nextElementSibling;

      fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          if(successMsg){
            successMsg.style.display = 'block';
            setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
          }
          form.reset();
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      }).catch(() => {
        alert('Oops! There was a problem submitting your form.');
      });
    });
  });

});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger && navLinks){
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}


const toggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
});

const toggle = document.getElementById("theme-toggle");

// 1️⃣ Check if user already chose a theme before
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.body.classList.toggle("light-mode", savedTheme === "light");
  toggle.textContent = savedTheme === "light" ? "☀️" : "🌙";
} else {
  // 2️⃣ If no saved theme → detect system preference
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

  if (systemPrefersLight) {
    document.body.classList.add("light-mode");
    toggle.textContent = "☀️";
  }
}

// 3️⃣ Manual toggle still works + overrides system
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggle.textContent = isLight ? "☀️" : "🌙";
});

// inside DOMContentLoaded
function setLanguage(lang) {
  const enEls = document.querySelectorAll('.lang-en');
  const nlEls = document.querySelectorAll('.lang-nl');

  if(lang === 'en') {
    enEls.forEach(el => el.style.display = 'inline');
    nlEls.forEach(el => el.style.display = 'none');
  } else {
    enEls.forEach(el => el.style.display = 'none');
    nlEls.forEach(el => el.style.display = 'inline');
  }
}

// initialize default language
setLanguage('en'); 
