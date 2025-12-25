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

  let lastScroll = 0;
  const dashboard = document.querySelector('.dashboard');

  if (dashboard) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 80) {
        dashboard.classList.add('hide');
      } else {
        dashboard.classList.remove('hide');
      }

      lastScroll = currentScroll;
    });
  }

});
