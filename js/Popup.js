class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close');

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  _handleEscClose(evt) {
    if(evt.key === 'Escape') {
      this.close(this._popup);
    }
  }

  _handleOverlayClose(evt) {
    if(evt.target.classList.contains('popup_opened')) {
      this.close(this._popup);
    }
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close(this._popup));
  }
}

export {Popup};
