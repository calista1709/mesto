import { Popup } from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor({handlerSubmitForm}, popupSelector) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
  }

  open(id, card) {
    super.open();
    this._id = id;
    this._card = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm(this._id, this._card);
    });
  }
}

export { PopupWithConfirmation };
