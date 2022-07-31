import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({handlerSubmitForm}, popupSelector) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInputs = this._popupForm.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const inputValues = {};
    this._popupInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export {PopupWithForm};
