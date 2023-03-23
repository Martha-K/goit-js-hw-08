import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmission);
refs.form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmission(e) {
  e.preventDefault();

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(formData);
}

function onFillingBlanks() {
  const fillingBlanks = localStorage.getItem(STORAGE_KEY);
  const parsedFillingBlanks = JSON.parse(`${fillingBlanks}`);
  if (fillingBlanks) {
    refs.input.value = parsedFillingBlanks.email;
    refs.textarea.value = parsedFillingBlanks.message;
  }
}
onFillingBlanks();
