export const config = {
  host: 'https://mesto.nomoreparties.co/v1/cohort-47',
  token: 'fb096cda-3fa8-438f-8ed5-03045e014a70'
}

export const setup = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const userInfoObj = {
  userNameSelector: '.profile__title',
  userJobSelector: '.profile__subtitle'
}

export const elementAddForm = document.querySelector('.popup_type_add-form').querySelector('.popup__form');
export const elementEditForm = document.querySelector('.popup_type_edit-profile').querySelector('.popup__form');
export const nameInput = elementEditForm.querySelector('.popup__input_content_name');
export const jobInput = elementEditForm.querySelector('.popup__input_content_job');
export const buttonToOpenAddForm = document.querySelector('.profile__add-button');
export const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
