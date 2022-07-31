import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({handlerSubmitForm}, popupSelector) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupInputs = this._popupForm.querySelectorAll('.popup__input');
  }

  getInputValues() {
    const inputValues = {};
    this._popupInputs.forEach((input) => {
      nputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', this._handlerSubmitForm);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

export {PopupWithForm};
