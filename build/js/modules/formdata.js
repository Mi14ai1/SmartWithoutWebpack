const getFormData = (element) => {
  const name = element.querySelector('#name').value;
  const phone = element.querySelector('#phone').value;
  const quest = element.querySelector('#question').value;
  localStorage.setItem('name', name);
  localStorage.setItem('phone', phone);
  localStorage.setItem('quest', quest);
};

export {getFormData};
