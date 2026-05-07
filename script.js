const navToggle = document.getElementById('navToggle');
const navShell = document.getElementById('navShell');

if (navToggle && navShell) {
  navToggle.addEventListener('click', function () {
    navShell.classList.toggle('open');
    navToggle.textContent = navShell.classList.contains('open') ? '×' : '☰';
  });

  navShell.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', function () {
      navShell.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}
