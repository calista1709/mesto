import {Popup} from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._photoFull = this._popup.querySelector('.popup__photo');
    this._titleFullPhoto = this._popup.querySelector('.popup__figcaption');
  }

  open(name, link) {
    super.open();
    this._photoFull.src = link;
    this._photoFull.alt =  name;
    this._titleFullPhoto.textContent = name;
  }
}

export {PopupWithImage};
