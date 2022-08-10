
const REGION = '+7';
const HIDESECTION = 'accordion__control--hide-section';
const MOBILEVIEWPORT = '768';
const WIDEVIEWPORT = '1024';

const body = document.querySelector('body');
const header = body.querySelector('header');
const callButton = body.querySelector('.callback-button');
const modal = body.querySelector('.modal');
const closeModalButton = modal.querySelector('.modal__close-button');
const modalForm = modal.querySelector('.modal__feedback-form');
const aboutText = document.querySelector('.about__text-container');
const mainForm = body.querySelector('.feedback__form');
const about = body.querySelector('.about');
const aboutButton = about.querySelector('.about__button');
const accordionControls = body.querySelectorAll('.accordion__control');
const accordion = body.querySelector('.accordion');
const hiddenText = aboutText.querySelector('.about-text--hidden');
const mobileHiddenText = aboutText.querySelector('.about-text__mobile-hidden');
const aboutOpenButtonText = aboutButton.querySelector('.about__open');
const aboutCloseButtonText = aboutButton.querySelector('.about__close');
const mainFormTel = mainForm.querySelector('input[type="tel"]');

const inputName = modal.querySelector('input[name="name"]');
const headerContainer = header.querySelector('.header__container');

const modalFormTel = modalForm.querySelector('input[type="tel"]');

const fillNumber = (val) => {
  let swapValue = '';
  swapValue = val.replace(/\D/gm, '');
  swapValue = swapValue[0] !== '7' ? `${REGION}${swapValue}` : `+${swapValue}`;
  swapValue = swapValue.replace(swapValue.substring(0, 2), (str)=> str + '(');
  if (swapValue.length >= 6) {
    swapValue = swapValue.replace(swapValue.substring(0, 6), (str) => str + ')');
  }
  if (swapValue.length >= 14) {
    swapValue = swapValue.substring(0, 14);
  }

  return swapValue;
};

let prev = '';

const maskHandler = (input) => {
  prev = input.value.length > prev.length ? input.value : prev;

  if (prev.length <= input.value.length) {
    input.value = fillNumber(input.value);
  }

  prev = input.value;
};

const hideAccordionSection = () => {
  accordionControls.forEach((element) => {
    if (!element.classList.contains(HIDESECTION)) {
      element.classList.add(HIDESECTION);
    }
  });
};

const accordionHandler = (evt)=>{

  const button = evt.target.closest('button');
  if (button) {
    accordionControls.forEach((element) => {
      if (element !== button && !element.classList.contains(HIDESECTION)) {
        element.classList.add(HIDESECTION);
      }
    });
    button.classList.toggle(HIDESECTION);
  }
};

const makeAccordion = () => {
  if (body.clientWidth < MOBILEVIEWPORT) {
    hideAccordionSection();

    accordion.addEventListener('click', accordionHandler);
  }
};

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
  headerContainer.classList.add('wrapper--header-show-modal');
  body.style.overflow = 'hidden';
  modal.addEventListener('click', modalHandler);
  modalForm.addEventListener('submit', modalSubmitHandler);
};

const closeModal = () => {
  modal.classList.add('visually-hidden');
  body.style.overflow = 'initial';
  headerContainer.classList.remove('wrapper--header-show-modal');
  modalForm.reset();
  modalForm.removeEventListener('input', modalFormTelHandler);
  modal.removeEventListener('click', modalHandler);
  modalForm.removeEventListener('submit', modalSubmitHandler);
};

hiddenText.classList.add('visually-hidden');
aboutButton.classList.toggle('visually-hidden');


if (MOBILEVIEWPORT > body.clientWidth) {
  if (!mobileHiddenText.classList.contains('visually-hidden')) {
    mobileHiddenText.classList.add('visually-hidden');
  }
}

const mainFormTelHandler = (evt) => {
  evt.preventDefault();
  maskHandler(evt.target);
};

mainFormTel.addEventListener('input', mainFormTelHandler);


const callButtonHandler = (evt) => {
  evt.preventDefault();
  showModal();
};

if (WIDEVIEWPORT <= body.clientWidth) {
  callButton.addEventListener('click', callButtonHandler);
}

mainForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
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
