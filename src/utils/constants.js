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
  userJobSelector: '.profile__subtitle',
  userPhotoSelector: '.profile__avatar'
}

export const elementAddForm = document.querySelector('.popup_type_add-form').querySelector('.popup__form');
export const elementEditForm = document.querySelector('.popup_type_edit-profile').querySelector('.popup__form');
export const elementAvatarForm = document.querySelector('.popup_type_change-avatar').querySelector('.popup__form');
export const nameInput = elementEditForm.querySelector('.popup__input_content_name');
export const jobInput = elementEditForm.querySelector('.popup__input_content_job');
export const buttonToOpenAddForm = document.querySelector('.profile__add-button');
export const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
export const buttonToOpenAvatarForm = document.querySelector('.profile__photo-wrap');
