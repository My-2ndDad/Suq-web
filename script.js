// ============================================================================
// Navigation Toggle
// ============================================================================
const navToggle = document.getElementById('navToggle');
const navShell = document.getElementById('navShell');

if (navToggle && navShell) {
  navToggle.addEventListener('click', function () {
    navShell.classList.toggle('open');
    navToggle.textContent = navShell.classList.contains('open') ? '×' : '☰';
  });

  // Close menu when a link is clicked
  navShell.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', function () {
      navShell.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });
}

// ============================================================================
// Scroll Reveal Animation
// ============================================================================
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
      rootMargin: '0px 0px -50px 0px'
    }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

// ============================================================================
// Animated Counter for Metrics
// ============================================================================
function animateCounter(element) {
  const target = parseInt(element.dataset.value, 10);
  let current = 0;
  const increment = Math.ceil(target / 50);
  const duration = 2000;
  const stepTime = duration / (target / increment);

  // Format large numbers with abbreviations
  if (target >= 1000000) {
    const formatted = (target / 1000000).toFixed(1) + 'M';
    element.textContent = formatted;
  } else if (target >= 1000) {
    const formatted = (target / 1000).toFixed(0) + 'k';
    element.textContent = formatted;
  } else {
    element.textContent = target;
  }
}

// Trigger counter animation when in view
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.animate-counter').forEach((el) => {
    counterObserver.observe(el);
  });
}

// ============================================================================
// Smooth Scroll Behavior
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ============================================================================
// FAQ Accordion Enhancement
// ============================================================================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const summary = item.querySelector('summary');
  if (summary) {
    summary.addEventListener('click', () => {
      // Close other items
      faqItems.forEach((other) => {
        if (other !== item && other.hasAttribute('open')) {
          other.removeAttribute('open');
        }
      });
    });
  }
});

// ============================================================================
// Newsletter Form Submission
// ============================================================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input[type="email"]');
    const button = this.querySelector('button');
    
    if (input.value) {
      const originalText = button.textContent;
      button.textContent = '✓ Subscribed!';
      button.style.background = 'var(--success)';
      
      setTimeout(() => {
        input.value = '';
        button.textContent = originalText;
        button.style.background = '';
      }, 2000);
    }
  });
}

// ============================================================================
// Navbar Scroll Effect
// ============================================================================
let lastScrollTop = 0;
const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
      header.style.top = '8px';
    } else {
      header.style.top = '12px';
    }
    
    lastScrollTop = scrollTop;
  });
  
}
const founderCards = document.querySelectorAll('.founder-card');

const founderObserver = new IntersectionObserver(
(entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('active');

        }
    });
},
{
    threshold:0.25
});

founderCards.forEach(card=>{
    founderObserver.observe(card);
});