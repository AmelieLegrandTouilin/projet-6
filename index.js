let works = [];
const imageElement = document.createElement("img");
const gallery = document.querySelector(".gallery");
const figure = document.createElement("figure");
const img = document.createElement("img");

function generateWorks (){
console.log ('affichage données');

for (let i = 0; i < works.length; i++){
  let image = `<figure>
  <img src= ${works[i].imageUrl} >
  <figcaption>${works[i].title}</figcaption>
  </figure>`;
  const figure =document.createTextNode(image);
 gallery.appendChild(figure);
 

console.log (works[i].id);

}
gallery.innerHTML = galleryContent;

}





async function getWorks() {
  const response = await fetch ('http://localhost:5678/api/works');
  works= await response.json();
  
  generateWorks ();
}
getWorks();


