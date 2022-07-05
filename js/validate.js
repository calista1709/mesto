// Функция показа ошибок в инпутах
const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

// Функция удаления показа ошибок в инпутах
const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
};

// Функция проверки инпута на валидность с дальнейшим показом либо скрытием спанов с ошибкой
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};

// Функция проверки формы на наличие инпута с ошибкой
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

// Функция блокировки кнопки
const disableButton = (button, disabledClass) => {
  button.classList.add(disabledClass);
  button.disabled = true;
}

// Функция разблокировки кнопки
const activateButton = (button, disabledClass) => {
  button.classList.remove(disabledClass);
  button.disabled = false;
}

// Функция изменения состояния кнопки отправки формы - блокировка/разблокировка - в зависимости от результата валидации
const toggleButtonState = (inputList, buttonElement, obj) => {
  if(hasInvalidInput(inputList)) {
    disableButton(buttonElement, obj.inactiveButtonClass);
  } else {
    activateButton(buttonElement, obj.inactiveButtonClass);
  }
}

// Функция навешивания всем инпутам слушателей состояния введения с дальнейшей проверкой на валидность и
// блокировкой/разблокировкой кнопки отправки формы
const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

// Функция проверки всех форм на валидность
const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));

  formList.forEach((formElement) => {
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    setEventListeners(formElement, obj);
    formElement.addEventListener('submit', function() {
      disableButton(buttonElement, obj.inactiveButtonClass);
    })
  });
};

// Вызов функции проверки форм на валидность
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
