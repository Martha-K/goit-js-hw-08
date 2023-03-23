// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const items = galleryItems
  .map((item) => {
    return `
   <a class="gallery__item" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
       alt="${item.description}"
     />
   </a>
 </div> `;
  })
  .join("");

const gallery = document.querySelector(".gallery");

gallery.innerHTML = items;

const galleryBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryBox.on("shown.simplelightbox", function () {});
