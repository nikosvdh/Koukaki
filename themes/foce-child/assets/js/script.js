// EFFET D'APPARITION DES TITRES DES SECTIONS

const titles = document.getElementsByTagName('span') // on récupère l'élément qu'on souhaite observer
// on observe les changements d'intersection d'un élément cible avec un élément ancêtre
const observer = new IntersectionObserver(entries => {
 // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) { // si l'élément est visible
      entry.target.classList.add('title_isvisible') // on ajoute la classe
    } else {
      entry.target.classList.remove('title_isvisible') // // on supprime la classe
    }
  })
  
},
{rootMargin: "0px 0px -300px 0px"}); // https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
observer.observe(title) // on indique à l'observer le nouvel élément à tracker
}


// EFFET DE PARALLAX DU TITRE SUR LA VIDEO

let title = document.getElementById('title');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // console.log('value');
    title.style.marginTop = value / 2 + "px";
});

