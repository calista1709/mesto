import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({handlerSubmitForm}, popupSelector) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputValuesArray = {};
  }

  getInputValues() {
    this._popupForm.querySelectorAll('.popup__input').forEach((input) => {
      this._inputValuesArray[input.name] = input.value;
    });
    return this._inputValuesArray;
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
