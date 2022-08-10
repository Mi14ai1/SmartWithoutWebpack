const REGION = '+7';
const HIDESECTION = 'accordion__control--hide-section';
const MOBILEVIEWPORT = '768';
const WIDEVIEWPORT = '1024';

const body = document.querySelector('body');
const header = body.querySelector('header');
const callButton = body.querySelector('.callback-button');
const modal = body.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close-button');
const modalArea = modal.querySelector('.modal__feedback');
const modalForm = modal.querySelector('.modal__feedback-form');
const modalSubmitButton = modalForm.querySelector('.modal__feedback-submit');
const checkbox = modalForm.querySelector('input[type="checkbox"]');
const aboutText = document.querySelector('.about__text-container');
const mainForm = body.querySelector('.feedback__form');
const mainSubmitButton = mainForm.querySelector('.feedback-form__submit');
const about = body.querySelector('.about');
const aboutButton = about.querySelector('.about__button');
const accordionControls = body.querySelectorAll('.accordion__control');
const accordion = body.querySelector('.accordion');

export {
  body,
  header,
  callButton,
  modal,
  closeModalButton,
  modalArea,
  modalSubmitButton,
  checkbox,
  aboutText,
  REGION,
  modalForm,
  mainForm,
  mainSubmitButton,
  aboutButton,
  HIDESECTION,
  MOBILEVIEWPORT,
  WIDEVIEWPORT,
  accordionControls,
  accordion
};
