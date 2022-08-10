import {
  body,
  modal,
  modalForm,
  closeModalButton
} from '../data.js';
import {maskHandler} from '../inputmask.js';

const inputName = modal.querySelector('input[name="name"]');
const header = body.querySelector('.header__container');

const modalFormTel = modalForm.querySelector('input[type="tel"]');

const modalFormTelHandler = (evt) => {
  evt.preventDefault();
  maskHandler(evt.target);
};

modalFormTel.addEventListener('input', modalFormTelHandler);

const modalHandler = (evt) => {
  evt.stopPropagation();
  if (evt.target === modal || evt.target === closeModalButton) {
    closeModal();
    modal.removeEventListener('click', modalHandler);
    modalForm.removeEventListener('submit', modalSubmitHandler);
  }
};

const modalSubmitHandler = (evt) => {
  evt.preventDefault();
  modalForm.submit();
  closeModal();

};


const showModal = () => {
  inputName.focus();
  modal.classList.remove('visually-hidden');
  header.classList.add('wrapper--header-show-modal');
  body.style.overflow = 'hidden';
  modal.addEventListener('click', modalHandler);
  modalForm.addEventListener('submit', modalSubmitHandler);
};

const closeModal = () => {
  modal.classList.add('visually-hidden');
  body.style.overflow = 'initial';
  header.classList.remove('wrapper--header-show-modal');
  modalForm.reset();
  modalForm.removeEventListener('input', modalFormTelHandler);
  modal.removeEventListener('click', modalHandler);
  modalForm.removeEventListener('submit', modalSubmitHandler);
};

export {
  showModal,
  closeModal
};
