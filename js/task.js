import gallery from './gallery-items.js';
const refs = {
  ul: document.querySelector('.gallery'),
  div: document.querySelector('.lightbox'),
  lightboxImg: document.querySelector('.lightbox__image'),
  lightbox: document.querySelector('.lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxContent: document.querySelector('.lightbox__content'),
};
// создаем разметку галереи
const galleryMarkup = galleryItems.reduce((acc, item) => {
  const itemMarkup = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
  </li>`;

  acc += itemMarkup;

  return acc;
}, '');

refs.ul.insertAdjacentHTML('beforeend', galleryMarkup);