import {openPopup} from './index.js';

class Card {
  constructor(data, selector) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._element = this._getTemplate();
    this._galleryPhoto = this._element.querySelector('.gallery__photo');
    this._galleryTitle = this._element.querySelector('.gallery__title');
    this._likeButton = this._element.querySelector('.gallery__like');
    this._deleteButton = this._element.querySelector('.gallery__delete');
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.gallery__item')
    .cloneNode(true);

    return cardElement;
  }

  _clickLike(evt) {
    evt.target.classList.toggle('gallery__like_active');
  }

  _deleteCard (evt) {
    evt.target.closest('li').remove();
  }

  _openFullImage () {
    const popupPhoto = document.querySelector('.popup_type_opened-photo');
    const photoFull = popupPhoto.querySelector('.popup__photo');
    const titleFullPhoto = popupPhoto.querySelector('.popup__figcaption');

    photoFull.src = this.src;
    photoFull.alt =  this.alt;
    titleFullPhoto.textContent = this.alt;

    openPopup(popupPhoto);
  }

  _setEventListenerLike() {
    this._likeButton.addEventListener('click', this._clickLike);
  }

  _setEventListenerDelete() {
    this._deleteButton.addEventListener('click', this._deleteCard);
  }

  _setEventListenerOpenFullImage() {
    this._galleryPhoto.addEventListener('click', this._openFullImage);
  }

  generateCard() {
    this._setEventListenerLike();
    this._setEventListenerDelete();
    this._setEventListenerOpenFullImage();

    this._galleryPhoto.src = this._link;
    this._galleryPhoto.alt = this._name;
    this._galleryTitle.textContent = this._name;

    return this._element;
  }
}

export {Card};
