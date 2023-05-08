// effet d'apparition des titres h2 et h3 des sections
const titles = document.getElementsByTagName('span') // on récupère l'élément qu'on souhaite observer
// on observe les changements d'intersection d'un élément cible avec un élément ancêtre
const observer = new IntersectionObserver(entries => {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('title_isvisible')
    } else {
      entry.target.classList.remove('title_isvisible')
    }
  })
  
},
{rootMargin: "0px 0px -300px 0px"}); // https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver

for (let i = 0; i < titles.length; i++) {
  const title = titles[i];
observer.observe(title) // indique à l'objet IntersectionObserver un nouvel élément à observer
}