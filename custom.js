document.addEventListener('DOMContentLoaded', () => {

  const intro = document.querySelector('.intro');
  const logoSpans = document.querySelectorAll('.intro-logo');

  if (intro && logoSpans.length > 0) {
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, (index + 1) * 400);
    });

    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300);
  }
  const navToggle = document.querySelector('.nav-toggle');
  const dashboardMenu = document.querySelector('.dashboard-menu');

  if (navToggle && dashboardMenu) {
    navToggle.addEventListener('click', () => {
      dashboardMenu.classList.toggle('active');
    });
  }
  const dropdownParent = document.querySelector('.nav-dropdown');

  if (dropdownParent) {
    const dropdownLink = dropdownParent.querySelector('a');

    dropdownLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdownParent.classList.toggle('active');
      }
    });
  }

});
