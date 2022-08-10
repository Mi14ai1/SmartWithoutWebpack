import {
  accordion,
  accordionControls,
  body,
  HIDESECTION,
  MOBILEVIEWPORT
} from './data.js';


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

export {
  makeAccordion,
  accordionHandler
};
