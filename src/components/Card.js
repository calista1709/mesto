class Card {
  constructor(data, selector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._galleryPhoto = this._element.querySelector('.gallery__photo');
    this._galleryTitle = this._element.querySelector('.gallery__title');
    this._likeButton = this._element.querySelector('.gallery__like');
    this._likeCount = this._element.querySelector('.gallery__count');
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

  _setEventListenerLike() {
    this._likeButton.addEventListener('click', this._clickLike);
  }

  _setEventListenerDelete() {
    this._deleteButton.addEventListener('click', this._deleteCard);
  }

  _setEventListenerOpenFullImage() {
    this._galleryPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  generateCard() {
    this._setEventListenerLike();
    this._setEventListenerDelete();
    this._setEventListenerOpenFullImage();

    this._galleryPhoto.src = this._link;
    this._galleryPhoto.alt = this._name;
    this._galleryTitle.textContent = this._name;
    this._likeCount.textContent = this._likes.length;

    return this._element;
  }
}

export {Card};
