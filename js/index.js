import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Section} from './Section.js';

const popupAddCard = document.querySelector('.popup_type_add-form');
const formAddCard = popupAddCard.querySelector('.popup__form');
const buttonToOpenAddForm = document.querySelector('.profile__add-button');
const elementAddForm = popupAddCard.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
const elementEditForm = popupEditProfile.querySelector('.popup__form');
const popupPhoto = document.querySelector('.popup_type_opened-photo');
const photoFull = popupPhoto.querySelector('.popup__photo');
const titleFullPhoto = popupPhoto.querySelector('.popup__figcaption');
const galleryList = document.querySelector('.gallery__list');
const closeButtons = document.querySelectorAll('.popup__close');

const nameInput = elementEditForm.querySelector('.popup__input_content_name');
const jobInput = elementEditForm.querySelector('.popup__input_content_job');
const placeInput = elementAddForm.querySelector('.popup__input_content_place-name');
const linkInput = elementAddForm.querySelector('.popup__input_content_place-link');

const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

const editFormValidator = new FormValidator(setup, elementEditForm);
const addFormValidator = new FormValidator(setup, elementAddForm);

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
  editFormValidator.resetValidation();
  editFormValidator.activateButton();
  openPopup(popupEditProfile);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

// Функция открытия попапа добавления карточки
function openAddCardPopup() {
  formAddCard.reset();
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
  openPopup(popupAddCard);
}

// Функция, которая будет получать на вход данные карточки и открывать попап с большой фотографией
function handleCardClick(name, link) {
  photoFull.src = link;
  photoFull.alt =  name;
  titleFullPhoto.textContent = name;

  openPopup(popupPhoto);
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
const defaultCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#gallery-item-template', handleCardClick);
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, '.gallery__list');
defaultCardList.renderItems();

// Валидация форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// Добавление обработчиков
buttonToOpenAddForm.addEventListener('click', openAddCardPopup);

buttonToOpenEditForm.addEventListener('click', openEditPopup);

elementAddForm.addEventListener('submit', submitAddCardForm);

elementEditForm.addEventListener('submit', submitEditProfileForm);

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

export {handleCardClick};
