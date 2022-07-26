import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Section} from './Section.js';
import {Popup} from './Popup.js';
import {PopupWithImage} from './PopupWithImage.js';


const buttonToOpenAddForm = document.querySelector('.profile__add-button');
const elementAddForm = document.querySelector('.popup_type_add-form').querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
const elementEditForm = popupEditProfile.querySelector('.popup__form');

const nameInput = elementEditForm.querySelector('.popup__input_content_name');
const jobInput = elementEditForm.querySelector('.popup__input_content_job');
const placeInput = elementAddForm.querySelector('.popup__input_content_place-name');
const linkInput = elementAddForm.querySelector('.popup__input_content_place-link');

const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

const editFormValidator = new FormValidator(setup, elementEditForm);
const addFormValidator = new FormValidator(setup, elementAddForm);
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#gallery-item-template', handleCardClick);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, '.gallery__list');


const popupAddCard = new Popup('.popup_type_add-form');


// Функция открытия попапа редактирования профиля
// function openEditPopup() {
//   editFormValidator.resetValidation();
//   editFormValidator.activateButton();
//   openPopup(popupEditProfile);
//   nameInput.value = nameElement.textContent;
//   jobInput.value = jobElement.textContent;
// }

// Функция открытия попапа добавления карточки
function openAddCardPopup() {
  elementAddForm.reset();
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
  popupAddCard.open();
}

// Функция, которая будет получать на вход данные карточки и открывать попап с большой фотографией
function handleCardClick(name, link) {
  const popupPhoto = new PopupWithImage(name, link, '.popup_type_opened-photo');
  popupPhoto.open();
}

// Функция отправки формы добавления карточки
function submitAddCardForm (evt) {
  evt.preventDefault();

  const userAddedCard = [{
    name: placeInput.value,
    link: linkInput.value
  }];

  const userCard = new Section({
    data: userAddedCard,
    renderer: (item) => {
      const card = new Card(item, '#gallery-item-template', handleCardClick);
      const cardElement = card.generateCard();
      userCard.addItem(cardElement);
    }
  }, '.gallery__list');

  userCard.renderItems();
  closePopup(popupAddCard);
}

// Функция отправки формы редактирования профиля
function submitEditProfileForm (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// Отрисовка базовых шести карточек на странице
defaultCardList.renderItems();

// Валидация форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// Добавление обработчиков
buttonToOpenAddForm.addEventListener('click', openAddCardPopup);

// buttonToOpenEditForm.addEventListener('click', openEditPopup);

elementAddForm.addEventListener('submit', submitAddCardForm);

elementEditForm.addEventListener('submit', submitEditProfileForm);
