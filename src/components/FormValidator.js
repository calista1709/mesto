class FormValidator {
  constructor(setupObject, formElement) {
    this._formSelector = setupObject.formSelector;
    this._inputSelector = setupObject.inputSelector;
    this._submitButtonSelector = setupObject.submitButtonSelector;
    this._inactiveButtonClass = setupObject.inactiveButtonClass;
    this._inputErrorClass = setupObject.inputErrorClass;
    this._errorClass = setupObject.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  // Функция показа ошибок в инпутах
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // Функция удаления показа ошибок в инпутах
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // Функция блокировки кнопки
  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  // Функция разблокировки кнопки
  activateButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  // Функция проверки инпута на валидность с дальнейшим показом либо скрытием спанов с ошибкой
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Функция проверки формы на наличие инпута с ошибкой
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  // Функция изменения состояния кнопки отправки формы - блокировка/разблокировка -
  // в зависимости от результата валидации
  _toggleButtonState() {
    if(this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this.activateButton();
    }
  }

  // Функция навешивания всем инпутам слушателей состояния введения с дальнейшей проверкой на валидность и
  // блокировкой/разблокировкой кнопки отправки формы
  _setEventListeners() {
    const self = this;
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        self._checkInputValidity(inputElement);
        self._toggleButtonState();
      });
    });
  };

  // Функция очистки формы от сообщений об ошибках
  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  // Функция проверки всех форм на валидность
  enableValidation() {
    this._setEventListeners();
  };
}

export {FormValidator};
