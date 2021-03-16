import { galleryList, modalRef, modalImgRef, btnRef, overlayRef } from './dom.js';
import { createGalleryCardsMarkUp } from './fn-create.js';

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
  modalImgRef.alt = e.target.alt;
}

function isCloseModal () {
  modalRef.classList.remove('is-open');
  modalImgRef.removeAttribute('src');
  modalImgRef.removeAttribute('alt');

}

window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') {
    return;
  }
  isCloseModal();
})
