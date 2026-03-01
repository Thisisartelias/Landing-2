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
    e.preventDefault(); // prevent normal submission
    const action = form.getAttribute('action');
    const formData = new FormData(form);
    const successMsg = form.nextElementSibling; // assumes <div class="form-success"> right after form

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        if(successMsg){
          successMsg.style.display = 'block'; // show success div
          setTimeout(() => { successMsg.style.display = 'none'; }, 5000); // hide after 5s
        }
        form.reset(); // clear the form
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    }).catch(() => {
      alert('Oops! There was a problem submitting your form.');
    });
  });
});
