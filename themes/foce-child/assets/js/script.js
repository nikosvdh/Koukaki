// effet d'apparition des titres des sections h2 et h3
const sectionsTitles = document.getElementsByTagName('span')
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('titleVisibility')

    } else {
      entry.target.classList.remove('titleVisibility')
    }
    
  })
  
},
{rootMargin: "0px 0px -300px 0px"});

for (let i = 0; i < sectionsTitles.length; i++) {
  const sectionsTitle = sectionsTitles[i];
  observer.observe(sectionsTitle)
}