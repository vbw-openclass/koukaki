// Déclenchement de l'apparition des sections en Fade-in

let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  let sections = document.querySelectorAll('.banner, #characters, #story, #place, #studio, .nomination-oscar , .site-footer');
  
sections.forEach(function(section) {
    observer.observe(section);
});


