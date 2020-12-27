import gallery from './gallery-items.js';
// Add gallery into html
const galleryPic = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxEl = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('.lightbox__button');
const overlayModal = document.querySelector('.lightbox__overlay');
const overlayContent = document.querySelector('.lightbox__content');

const galleryMarkup = galleryCreate();
galleryPic.insertAdjacentHTML('beforeend', galleryMarkup);

function galleryCreate() {
  let i = 0;
  const markup = gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index ="${(i += 1)}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');

  return markup;
}

//Делегування на галереї та отримання посилання на велике зображення
galleryPic.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
}

//Open modal 

galleryPic.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.classList.add('is-open');
  lightboxEl.src = event.target.dataset.source;
  lightboxEl.alt = event.target.alt;
  lightboxEl.dataset.index = event.target.dataset.index;

  document.addEventListener('keydown', onCloseModalByEsc);
}

closeModalBtn.addEventListener('click', onCloseModal);

//close modal

function onCloseModal(event) {
  lightbox.classList.remove('is-open');
  document.removeEventListener('keydown', onCloseModalByEsc);
  lightboxEl.src = '';
}

function onCloseModalByEsc(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

overlayModal.addEventListener('click', closeModalByOverlay);

function closeModalByOverlay(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

