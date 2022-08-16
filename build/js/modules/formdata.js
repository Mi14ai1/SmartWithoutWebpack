const getFormData = (element) => {
  const name = element.querySelector('input[name=name]').value;
  const phone = element.querySelector('input[name=phone]').value;
  const quest = element.querySelector('textarea[name=question]').value;
  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone);
  localStorage.setItem('quest', quest);
};

export {getFormData};
