// Language Switch
const enEls = document.querySelectorAll('.lang-en');
const nlEls = document.querySelectorAll('.lang-nl');
const enBtn = document.getElementById('lang-en');
const nlBtn = document.getElementById('lang-nl');

function setLanguage(lang) {
  if(lang === 'en') {
    enEls.forEach(el => el.style.display='block');
    nlEls.forEach(el => el.style.display='none');
  } else {
    enEls.forEach(el => el.style.display='none');
    nlEls.forEach(el => el.style.display='block');
  }
}

// Initialize default language
setLanguage('en');

enBtn.addEventListener('click', () => setLanguage('en'));
nlBtn.addEventListener('click', () => setLanguage('nl'));

// Portfolio Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const images = document.querySelectorAll('.portfolio-grid img');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => modal.style.display='none');
window.addEventListener('click', e => { if(e.target === modal) modal.style.display='none'; });
