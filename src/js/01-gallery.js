// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');

initGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: "alt" });

function createItem(galleryItem) {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img 
            class="gallery__image"
            src="${galleryItem.preview}"
            alt="${galleryItem.description}" />
        </a>
    </li>`;
}

function initGallery(galleryItems) {
    const galleryItemsMarkup = galleryItems.map(galleryItem => {
       return createItem(galleryItem);
         
    })
    .join("");
    
    galleryItemsRef.innerHTML = galleryItemsMarkup;
    
}

console.log(galleryItems);
