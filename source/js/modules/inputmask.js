import {REGION} from './data.js';

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

export {maskHandler};
