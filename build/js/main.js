import '../js/modules/data.js';
import '../js/modules/modals/modal.js';
import '../js/modules/accordion.js';
import '../js/modules/phonemask.js';

import {
  showModal
} from '../js/modules/modals/modal.js';

import {
  makeAccordion,
  accordionHandler
} from '../js/modules/accordion.js';

import {
  callButton,
  aboutText,
  mainForm,
  aboutButton,
  WIDEVIEWPORT,
  MOBILEVIEWPORT,
  accordion,
  body
} from '../js/modules/data.js';

import {getFormData} from '../js/modules/formdata.js';
import {adaptCard} from './modules/adaptive.js';

const hiddenText = aboutText.querySelector('.about-text--hidden');
const mobileHiddenText = aboutText.querySelector('.about-text__mobile-hidden');
const aboutOpenButtonText = aboutButton.querySelector('.about__open');
const aboutCloseButtonText = aboutButton.querySelector('.about__close');

hiddenText.classList.add('visually-hidden');
aboutButton.classList.toggle('visually-hidden');

adaptCard();

if (MOBILEVIEWPORT > body.clientWidth) {
  if (!mobileHiddenText.classList.contains('visually-hidden')) {
    mobileHiddenText.classList.add('visually-hidden');
  }
}

const callButtonHandler = (evt) => {
  evt.preventDefault();
  showModal();
};

if (WIDEVIEWPORT <= body.clientWidth) {
  callButton.addEventListener('click', callButtonHandler);
}

mainForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  getFormData(mainForm);
  mainForm.submit();
  mainForm.reset();
});

aboutButton.addEventListener('click', ()=> {
  hiddenText.classList.toggle('visually-hidden');
  aboutCloseButtonText.classList.toggle('visually-hidden');
  aboutOpenButtonText.classList.toggle('visually-hidden');
});


makeAccordion();

window.addEventListener('resize', ()=> {
  const currentViewport = body.clientWidth;

  adaptCard();

  if (WIDEVIEWPORT <= currentViewport) {
    callButton.removeEventListener('click', callButtonHandler);
    callButton.addEventListener('click', callButtonHandler);
  }
  if (MOBILEVIEWPORT > body.clientWidth) {
    if (!mobileHiddenText.classList.contains('visually-hidden')) {
      mobileHiddenText.classList.add('visually-hidden');
    }
  } else {
    if (mobileHiddenText.classList.contains('visually-hidden')) {
      mobileHiddenText.classList.remove('visually-hidden');
    }
  }
  accordion.removeEventListener('click', accordionHandler);
  makeAccordion();

});

