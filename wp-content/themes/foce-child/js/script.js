// Crée une instance de l'IntersectionObserver avec une fonction de rappel
let observer = new IntersectionObserver(function(entries, observer) {
  // La fonction de rappel est exécutée chaque fois que les éléments observés entrent ou sortent de la zone d'intersection
  entries.forEach(function(entry) {
    // Vérifie si l'élément est en train d'entrer dans la zone d'intersection
    if (entry.isIntersecting) {
      // Ajoute la classe 'fadeIn' à l'élément cible
      entry.target.classList.add('fadeIn');

        // Recherche le premier titre (balise h2 ou h3) dans l'élément cible
        const title = entry.target.querySelector('h2, h3');

        // Vérifie si un titre existe et s'il contient du texte
        if (title && title.textContent) {
          // Divise le texte du titre en mots
          const words = title.textContent.split(' ');

          // Remplace le texte du titre par une chaîne vide
          title.textContent = ' ';

          // Pour chaque mot, crée un élément span et ajoute-le au titre
          words.forEach((word) => {
            const span = document.createElement('span');
            span.classList.add('animation-title');
            span.textContent = word;
            title.appendChild(span);
          });

          // Sélectionne tous les éléments spans créés
          const spans = title.querySelectorAll('.animation-title');

          // Pour chaque span, ajoute progressivement la classe 'visibility' avec un délai différent
          spans.forEach((span, index) => {
            const delay = (index === 0) ? 400 : index * 600;

            setTimeout(function () {
              span.classList.add('visibility');
            }, delay);
          });
        }
      // Cesse d'observer l'élément cible une fois qu'il est apparu dans la zone d'intersection
      observer.unobserve(entry.target);
    }
  });
}, {
  // Définit une marge pour la zone d'intersection (haut, droite, bas, gauche)
  rootMargin: '-100px 0px -100px 0px'
});

// Sélectionne tous les éléments correspondant aux sélecteurs CSS donnés
let sections = document.querySelectorAll('#characters, .story, #place, #studio, .nomination-oscar , .site-footer');

// Pour chaque section sélectionnée, observe les changements d'intersection
sections.forEach(function(section) {
  observer.observe(section);
});




// parallax vidéo avec la bibliothèque simpleParallax

document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.banner__video');

  new simpleParallax(video, {
      orientation: 'right',
      scale: 1.15,
      delay: 0.5,
      transition: 'ease-in-out'
  });
});



// Ajoute un écouteur d'événement qui détecte le défilement de la fenêtre.

window.addEventListener('scroll', function () {

  // Selection des éléments
  const bigCloud = document.querySelector('.big-cloud');
  const littleCloud = document.querySelector('.little-cloud');
  const placeSection = document.querySelector('#place');

  // Récuperation de la position verticale (offsetTop) de la section "place" par rapport au haut de la page
  // ainsi que la position de défilement verticale actuelle de la fenêtre.
  const sectionOffsetTop = placeSection.offsetTop;
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Verification si la position de défilement actuelle est supérieure ou égale à la position verticale
  if (scrollPosition >= sectionOffsetTop) {

      // calcule la valeur de défilement, détermine l'intensité du déplacement des nuages
      const parallaxValue = (scrollPosition - sectionOffsetTop) / 2;

      // Math.min() limite la valeur de déplacement à 300px
      const translationX = Math.min(parallaxValue, 300);

      // Utilisation de la propriété CSS transform pour modifier la position des nuages avec translateX
      // Le -translationX (distance de déplacement vers la gauche), 'px' pour utiliser le pixel.
      bigCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
      littleCloud.style.transform = 'translateX(' + (-translationX) + 'px)';
  }
});