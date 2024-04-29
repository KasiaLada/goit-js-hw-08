import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

// Funkcja do zapisywania stanu formularza w localStorage
const saveFormData = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Opóźnienie funkcji zapisującej dane do local storage
const throttledSaveFormData = throttle(saveFormData, 500);

// Ustawienie wartości formularza przy ładowaniu strony
const populateForm = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.elements.email.value = parsedData.email || '';
    form.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email;
    formData.message = parsedData.message;
  }
};

form.addEventListener('input', ev => {
  formData[ev.target.name] = ev.target.value;
  throttledSaveFormData();
});

form.addEventListener('submit', ev => {
  ev.preventDefault();
  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });
  localStorage.removeItem('feedback-form-state');
  form.reset();
});

populateForm();
