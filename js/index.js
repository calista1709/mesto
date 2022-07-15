import {addCard, galleryList} from './Card.js';

const popupAddCard = document.querySelector('.popup_type_add-form');
const formAddCard = popupAddCard.querySelector('.popup__form');
const buttonToOpenAddForm = document.querySelector('.profile__add-button');
const buttonToCloseAddForm = popupAddCard.querySelector('.popup__close');
const buttonToSubmitAddForm = popupAddCard.querySelector('.popup__save');
const elementAddForm = popupAddCard.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
const buttonToCloseEditForm = popupEditProfile.querySelector('.popup__close');
const elementEditForm = popupEditProfile.querySelector('.popup__form');
const popupPhoto = document.querySelector('.popup_type_opened-photo');
const buttonToCloseFullImage = popupPhoto.querySelector('.popup__close');

const nameInput = elementEditForm.querySelector('.popup__input_content_name');
const jobInput = elementEditForm.querySelector('.popup__input_content_job');
const placeInput = elementAddForm.querySelector('.popup__input_content_place-name');
const linkInput = elementAddForm.querySelector('.popup__input_content_place-link');

const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEscape);
  popup.addEventListener('mousedown', closePopupByClickOnOverlay);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEscape);
  popup.removeEventListener('mousedown', closePopupByClickOnOverlay);
}

// Функция закрытия попапа при нажатии на ESC
function closePopupByEscape(evt) {
  if(evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// Функция закрытия попапа при нажатии на оверлей
function closePopupByClickOnOverlay(evt) {
  if(evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}

// Функция открытия попапа редактирования профиля
function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

// Функция отправки формы добавления карточки
function submitAddCardForm (evt) {
  evt.preventDefault();
  const userAddedCard = {
    name: placeInput.value,
    link: linkInput.value
  }
  addCard(userAddedCard, galleryList);
  closePopup(popupAddCard);
}

// Функция отправки формы редактирования профиля
function submitEditProfileForm (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Добавление обработчиков
buttonToOpenAddForm.addEventListener('click', function() {
  formAddCard.reset();
  disableButton(buttonToSubmitAddForm, 'popup__button_disabled');
  openPopup(popupAddCard);
});

buttonToCloseAddForm.addEventListener('click', function() {
  closePopup(popupAddCard);
});

elementAddForm.addEventListener('submit', submitAddCardForm);

buttonToOpenEditForm.addEventListener('click', openEditPopup);

buttonToCloseEditForm.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

elementEditForm.addEventListener('submit', submitEditProfileForm);

buttonToCloseFullImage.addEventListener('click', function() {
  closePopup(popupPhoto);
});

export {openPopup};
