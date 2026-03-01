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
      enEls.forEach(el => el.style.display = 'inline');
      nlEls.forEach(el => el.style.display = 'none');
    } else {
      enEls.forEach(el => el.style.display = 'none');
      nlEls.forEach(el => el.style.display = 'inline');
    }
  }

  if(enBtn && nlBtn){
    enBtn.addEventListener('click', () => setLanguage('en'));
    nlBtn.addEventListener('click', () => setLanguage('nl'));
  }

  // Initialize default language
  setLanguage('en');

  // ===============================
  // THEME TOGGLE + AUTO DETECTION
  // ===============================
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if(savedTheme) {
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
  } else {
    // Detect system preference
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if(prefersLight) {
      document.body.classList.add('light-mode');
      themeToggle.textContent = '☀️';
    }
  }

  if(themeToggle){
    themeToggle.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      themeToggle.textContent = isLight ? '☀️' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // ===============================
  // TOP BANNER
  // ===============================
  const banner = document.getElementById('top-banner');
  const bannerClose = document.getElementById('banner-close');

  if(banner && bannerClose){
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
        if(response.ok){
          if(successMsg){
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 5000);
          }
          form.reset();
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      }).catch(() => alert('Oops! There was a problem submitting your form.'));
    });
  });

  // ===============================
  // HAMBURGER MENU
  // ===============================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if(hamburger && navLinks){
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

});

document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // LANGUAGE TOGGLE
  // ===============================
  const enEls = document.querySelectorAll('.lang-en');
  const nlEls = document.querySelectorAll('.lang-nl');
  const enBtn = document.getElementById('lang-en');
  const nlBtn = document.getElementById('lang-nl');

  // Function to set language
  function setLanguage(lang) {
    if (lang === 'en') {
      enEls.forEach(el => el.style.display = 'inline');
      nlEls.forEach(el => el.style.display = 'none');
    } else {
      enEls.forEach(el => el.style.display = 'none');
      nlEls.forEach(el => el.style.display = 'inline');
    }
    // Save language preference
    localStorage.setItem('language', lang);
  }

  // Event listeners for buttons
  if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
  if (nlBtn) nlBtn.addEventListener('click', () => setLanguage('nl'));

  // Initialize language on page load
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage('en'); // default
  }
});