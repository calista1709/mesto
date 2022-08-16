class Card {
  constructor(data, selector, handleCardClick, handleDeleteClick, deleteLikeFormServer, addLikeToServer, isOwn, isLikedByUser) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._deleteLikeFormServer = deleteLikeFormServer;
    this._addLikeToServer = addLikeToServer;
    this._isOwn = isOwn;
    this._isLikedByUser = isLikedByUser;
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

  _checkCardIsOwn() {
    if(this._isOwn) {
      this._deleteButton.classList.add('gallery__delete_active');
    }
  }

  _checkIsLikedByUser() {
    if(this._isLikedByUser) {
      this._likeButton.classList.add('gallery__like_active');
    }
  }

  _changeLikeCount(newCount) {
    this._likeCount.textContent = newCount;
  }

  _deleteLike(id) {
    this._deleteLikeFormServer(id)
      .then((res) => {
        this._likeButton.classList.remove('gallery__like_active');
        this._changeLikeCount(res.likes.length);
      })
      .catch(err => {
        console.log(err);
      })
  }

  _addLike(id) {
    this._addLikeToServer(id)
      .then((res) => {
        this._likeButton.classList.add('gallery__like_active');
        this._changeLikeCount(res.likes.length);
      })
      .catch(err => {
        console.log(err);
      })
  }

  _setEventListenerLike() {
    this._likeButton.addEventListener('click', () => {
      if(this._likeButton.classList.contains('gallery__like_active')) {
        this._deleteLike(this._id);
      } else {
        this._addLike(this._id);
      }
    });
  }

  _setEventListenerDelete() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._id, this._element);
    });
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
    this._checkCardIsOwn();
    this._checkIsLikedByUser();

    this._galleryPhoto.src = this._link;
    this._galleryPhoto.alt = this._name;
    this._galleryTitle.textContent = this._name;
    this._likeCount.textContent = this._likes.length;

    return this._element;
  }
}

export {Card};
