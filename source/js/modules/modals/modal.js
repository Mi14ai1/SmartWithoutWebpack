import {
  body,
  modal,
  modalForm,
  closeModalButton,
  MAXTELLENGTH,
  INTERECTIVESELECTORS
} from '../data.js';
import {getFormData} from '../formdata.js';

const interactiveElements = document.querySelectorAll(INTERECTIVESELECTORS);
const modalInteractiveElements = modal.querySelectorAll(INTERECTIVESELECTORS);

const header = body.querySelector('.header__container');
const inputName = modal.querySelector('input[name="name"]');

const modalFormTel = modalForm.querySelector('input[type="tel"]');

modalFormTel.maxLength = MAXTELLENGTH;

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
  getFormData(modalForm);
  modalForm.submit();
  closeModal();
};

const escUpHandler = (evt)=> {
  if (evt.key === 'Escape') {
    closeModal();
  }
};

const showModal = () => {
  inputName.focus();
  document.addEventListener('keyup', escUpHandler);
  modal.classList.remove('visually-hidden');
  header.classList.add('wrapper--header-show-modal');
  body.style.overflow = 'hidden';
  modal.addEventListener('click', modalHandler);
  modalForm.addEventListener('submit', modalSubmitHandler);
  interactiveElements.forEach((element) => element.setAttribute('tabindex', '-1'));
  modalInteractiveElements.forEach((element) => element.setAttribute('tabindex', '1'));
};

const closeModal = () => {
  modal.classList.add('visually-hidden');
  body.style.overflow = 'initial';
  header.classList.remove('wrapper--header-show-modal');
  modalForm.reset();
  modal.removeEventListener('click', modalHandler);
  modalForm.removeEventListener('submit', modalSubmitHandler);
  document.removeEventListener('keyup', escUpHandler);
  interactiveElements.forEach((element) => element.setAttribute('tabindex', '1'));
  modalInteractiveElements.forEach((element) => element.setAttribute('tabindex', '-1'));
};

export {
  showModal,
  closeModal
};
