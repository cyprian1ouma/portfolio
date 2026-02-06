// assets/js/main.min.js

document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Active navigation link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  function setActiveLink() {
      let scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute('id');
          
          if (scrollPosition >= sectionTop && 
              scrollPosition < sectionTop + sectionHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${sectionId}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  }
  
  window.addEventListener('scroll', setActiveLink);

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  
  function toggleBackToTop() {
      if (window.scrollY > 300) {
          backToTopBtn.style.display = 'flex';
          backToTopBtn.classList.add('show');
      } else {
          backToTopBtn.style.display = 'none';
          backToTopBtn.classList.remove('show');
      }
  }
  
  window.addEventListener('scroll', toggleBackToTop);
  
  backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const submitBtn = this.querySelector('button[type="submit"]');
          const originalText = submitBtn.innerHTML;
          
          // Show loading state
          submitBtn.innerHTML = `
              <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Sending...
          `;
          submitBtn.disabled = true;
          
          // Simulate API call
          setTimeout(() => {
              // Reset form
              this.reset();
              
              // Reset button
              submitBtn.innerHTML = originalText;
              submitBtn.disabled = false;
              
              // Show success message (in production, replace with actual notification)
              alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
          }, 2000);
      });
  }

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll('.progress-bar');
  const skillsSection = document.getElementById('skills');
  
  function animateSkillBars() {
      if (isElementInViewport(skillsSection)) {
          skillBars.forEach(bar => {
              const width = bar.style.width;
              bar.style.width = '0';
              
              setTimeout(() => {
                  bar.style.transition = 'width 1.5s ease-in-out';
                  bar.style.width = width;
              }, 100);
          });
          
          // Remove event listener after animation
          window.removeEventListener('scroll', animateSkillBars);
      }
  }
  
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
      );
  }
  
  window.addEventListener('scroll', animateSkillBars);
  
  // Initialize on page load
  setTimeout(animateSkillBars, 500);
  
  // Project card hover effect
  const projectCards = document.querySelectorAll('.project-card')
  projectCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px)'
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)'
      });
  });
  
  // Theme toggle (optional)
  const themeToggle = document.createElement('button')
  themeToggle.className = 'btn btn-outline-secondary btn-sm position-fixed'
  themeToggle.style.top = '20px'
  themeToggle.style.right = '20px'
  themeToggle.style.zIndex = '1000'
  themeToggle.innerHTML = '<i class="mdi mdi-theme-light-dark"></i>'
  
  themeToggle.addEventListener('click', function() {
      document.documentElement.setAttribute('data-bs-theme', 
          document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark'
      )
  })
  
})

// Load external content (if needed)
function loadExternalContent() {
  console.log('Portfolio loaded successfully');
}

window.addEventListener('load', loadExternalContent)

// Portfolio accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionButton = document.querySelector('#additionalProjects .accordion-button');
    const accordionBody = document.querySelector('#collapseAdditional');
    
    if (accordionButton && accordionBody) {
        // Track accordion state
        accordionBody.addEventListener('show.bs.collapse', function() {
            const icon = accordionButton.querySelector('.mdi');
            if (icon) {
                icon.classList.remove('mdi-plus-circle-outline');
                icon.classList.add('mdi-minus-circle-outline');
            }
        });
        
        accordionBody.addEventListener('hide.bs.collapse', function() {
            const icon = accordionButton.querySelector('.mdi');
            if (icon) {
                icon.classList.remove('mdi-minus-circle-outline');
                icon.classList.add('mdi-plus-circle-outline');
            }
        });
    }
    
    // Smooth scroll to additional projects when accordion opens
    const additionalProjects = document.getElementById('additionalProjects');
    additionalProjects.addEventListener('shown.bs.collapse', function() {
        setTimeout(() => {
            additionalProjects.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    });
});

// Portfolio accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const accordionButton = document.querySelector('#additionalProjects .accordion-button');
  const accordionBody = document.querySelector('#collapseAdditional');
  
  if (accordionButton && accordionBody) {
      // Track accordion state
      accordionBody.addEventListener('show.bs.collapse', function() {
          const icon = accordionButton.querySelector('.mdi');
          if (icon) {
              icon.classList.remove('mdi-plus-circle-outline');
              icon.classList.add('mdi-minus-circle-outline');
          }
      });
      
      accordionBody.addEventListener('hide.bs.collapse', function() {
          const icon = accordionButton.querySelector('.mdi')
          if (icon) {
              icon.classList.remove('mdi-minus-circle-outline')
              icon.classList.add('mdi-plus-circle-outline')
          }
      });
  }
  
  // Smooth scroll to additional projects when accordion opens
  const additionalProjects = document.getElementById('additionalProjects')
  additionalProjects.addEventListener('shown.bs.collapse', function() {
      setTimeout(() => {
          additionalProjects.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 300)
  })
})