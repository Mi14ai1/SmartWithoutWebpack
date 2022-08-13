import {
  MOBILEVIEWPORT,
  WIDEVIEWPORT,
  body
} from './data.js';

const MIDDLERATIO = 25 / 67;
const MOBILERATIO = 25 / 27;
const WIDERATIO = 13 / 7;


const adaptCard = () => {
  const card = document.querySelector('.services-card');
  const cards = document.querySelectorAll('.services-card');
  const bodyWidth = body.clientWidth;
  const viewportWidth = window.screen.width;
  const scrollWidth = viewportWidth - bodyWidth;
  const currentViewport = viewportWidth - scrollWidth;

  let ratio = 1;

  if (currentViewport < (MOBILEVIEWPORT - scrollWidth)) {
    ratio = MOBILERATIO;
  }
  if (currentViewport < (WIDEVIEWPORT - scrollWidth) && currentViewport > (MOBILEVIEWPORT - scrollWidth)) {
    ratio = MIDDLERATIO;
  }
  if (currentViewport >= (WIDEVIEWPORT - scrollWidth)) {
    ratio = WIDERATIO;
  }
  cards.forEach((element) => {
    element.style.height = `${card.clientWidth * ratio}px`;
  });

};

export {adaptCard};
