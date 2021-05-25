
(() => {
    const refs = {
      navOpenBtn: document.querySelector('.nav-open'),
      closeMenuBtn: document.querySelector('.nav-close'),
      menu: document.querySelector('.mobile-nav'),
    };
  
    refs.navOpenBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();