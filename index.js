
/*travaux dynamiques */
let works = [];
const gallery = document.querySelector(".gallery");
const category = [];

/* récupération dynamique du back-end des
projets de l’architecte. */

async function getWorks() {
  const response = await fetch ('http://localhost:5679/api/works');
  works= await response.json();
  
  generateWorks ();
}
getWorks();
function generateWorks (){
  console.log ('affichage données');

  /* ajout des travaux de maniére dynamique du HTML */
  
  for (let i = 0; i < works.length; i++){
    let image = `<figure>
    <img src= ${works[i].imageUrl} >
    <figcaption>${works[i].title}</figcaption>
    </figure>`;
    gallery.innerHTML += image;
  
  console.log (works[i].id);
  }
  }

  /*filtre de la galerie par catégorie de projet */
  /*récupération du back-end du filtre*/
  /* ajout du filtre de maniére dynamique du HTML */
async function getCategories () {
  const r= await fetch('http://localhost:5679/api/categories')
  if (r.ok === true){
    return r.json();
  }
  throw new Error ('Impossible de contacter le serveur')
}
getCategories().then(categories => {
  const categoriesContainer = document.querySelector(".categories");

  if (categoriesContainer) {
    const categoriesHTML = `
      <ul class="categories-button">
        <li class="button">Tous</li>
        <li class="button">Objets</li>
        <li class="button">Appartements</li>
        <li class="button">Hôtel & restaurants</li>
      </ul>
    `;
    categoriesContainer.insertAdjacentHTML("beforeend", categoriesHTML);
  }
});

  

  
  



