// Toggle Table of Contents untuk Mobile
document.addEventListener('DOMContentLoaded', function() {
  const tocToggle = document.querySelector('.toc-toggle');
  const tocNav = document.querySelector('.table-of-contents nav');
  
  if (tocToggle && tocNav) {
    // Toggle TOC saat tombol diklik
    tocToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Toggle clicked'); // Debug
      
      // Toggle class active di button
      this.classList.toggle('active');
      
      // Toggle class show di nav
      tocNav.classList.toggle('show');
    });
  }
  
  // Highlight active section saat scroll
  const sections = document.querySelectorAll('.content-section[id]');
  const navLinks = document.querySelectorAll('.table-of-contents a');
  
  function highlightActiveSection() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  
  // Jalankan saat scroll
  window.addEventListener('scroll', highlightActiveSection);
  
  // Smooth scroll ke section
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Tutup TOC di mobile setelah klik
        if (window.innerWidth <= 992 && tocNav && tocToggle) {
          tocNav.classList.remove('show');
          tocToggle.classList.remove('active');
        }
      }
    });
  });
  
  // Jalankan highlight saat load
  highlightActiveSection();
});