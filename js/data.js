import gallery from "./gallery-items.js";
 

const galleryList = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const modalImgRef = document.querySelector('.lightbox__image');
const btnRef = document.querySelector('.lightbox__button');
const overlayRef = document.querySelector('.lightbox__overlay');

const createGalleryCardsMarkUp = gallery.map(({ original, preview, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}"
          data-source="${original}" alt="${description}" />
      </a>
    </li>` });

    console.log(createGalleryCardsMarkUp);
galleryList.insertAdjacentHTML('afterbegin', createGalleryCardsMarkUp.join(''));

galleryList.addEventListener('click', onOpenModal);
btnRef.addEventListener('click', isCloseModal);
overlayRef.addEventListener('click', isCloseModal);

function onOpenModal(e)  {
  e.preventDefault();
  console.dir(e.target);
  if (e.target.nodeName !== 'IMG') {
    return
  }
  modalRef.classList.add('is-open');
  modalImgRef.src = e.target.dataset.source;
  modalImgRef.alt = e.target.dataset.alt;
}

function isCloseModal () {
  modalRef.classList.remove('is-open');
}

window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  isCloseModal();
})
