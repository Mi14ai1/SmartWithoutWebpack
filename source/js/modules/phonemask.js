let phoneInputs = document.querySelectorAll('input[data-tel-input]');

const formatPhoneNumber = (val) => {
  let formattedStr = '+7 (';
  let numbersStr = val.replace(/\D/g, '');

  if (!numbersStr) {
    numbersStr = '7';
  }
  numbersStr = numbersStr.substring(0, 11);

  if (numbersStr.length === 1 && numbersStr[0] !== '7') {
    numbersStr = '7' + numbersStr;
  }

  if (numbersStr.length > 1) {
    formattedStr = '+7 (' + numbersStr.substring(1, 4);
  } else {
    formattedStr = '+7 ()';
  }
  if (numbersStr.length > 4) {
    formattedStr += ') ' + numbersStr.substring(4, 7);
  }
  if (numbersStr.length > 7) {
    formattedStr += '-' + numbersStr.substring(7, 9);
  }
  if (numbersStr.length > 9) {
    formattedStr += '-' + numbersStr.substring(9, 11);
  }
  return formattedStr;
};

const onPhonePaste = (e) => {
  let input = e.target;
  let resultText = '';
  let pasted = e.clipboardData || window.clipboardData;

  if (pasted) {
    let pastedText = pasted.getData('Text').replace(/\D/g, '');
    input.value = '';
    if (pastedText.length <= 10) {
      resultText = '7' + pastedText;
    } else {
      resultText = pastedText.replace(pastedText[0], '7');
    }
    input.value = resultText;
  }
};

let onPhoneKeyDown = (e) => {
  let inputValue = e.target.value.replace(/\D/g, '');
  if (e.keyCode === 8 || e.keyCode === 46) {
    if (inputValue.length === 1) {
      e.target.value = '';
    }
    return;
  }
};

let onPhoneInput = (e) => {
  e.target.maxLength = 18;
  e.target.pattern = '.+';

  let input = e.target;
  let position = input.selectionStart;


  if (input.value.length !== position) {
    input.value = formatPhoneNumber(input.value);
    input.selectionStart = position < 4 ? 4 : position;
    input.selectionEnd = position < 4 ? 4 : position;
    return;
  }


  let formattedValue = formatPhoneNumber(input.value);

  input.value = formattedValue;


  if (input.value === '+7 ()') {
    input.selectionStart = 4;
    input.selectionEnd = 4;
  }

};

for (let phoneInput of phoneInputs) {

  phoneInput.onfocus = () => {
    if (!phoneInput.value) {
      phoneInput.value = '+7 (';
    }
  };

  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('input', onPhoneInput, false);
  phoneInput.addEventListener('paste', onPhonePaste, false);
}
