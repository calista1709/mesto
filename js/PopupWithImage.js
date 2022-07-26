import {Popup} from './Popup.js';

class PopupWithImage extends Popup {
  constructor(name, link, popupSelector) {
    super(popupSelector);
    this._link = link;
    this._name = name;
    this._photoFull = this._popup.querySelector('.popup__photo');
    this._titleFullPhoto = this._popup.querySelector('.popup__figcaption');
  }

  open() {
    super.open();
    this._photoFull.src = this._link;
    this._photoFull.alt =  this._name;
    this._titleFullPhoto.textContent = this._name;
  }
}

export {PopupWithImage};
