import '../styles/index.css';
import {
  initialCards,
  setup,
  userInfoObj,
  elementAddForm,
  elementEditForm,
  nameInput,
  jobInput,
  buttonToOpenAddForm,
  buttonToOpenEditForm
} from './data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

const userInfo = new UserInfo(userInfoObj);
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


const popupAddCard = new PopupWithForm({
  handlerSubmitForm: (evt) => {
    evt.preventDefault();

    const userAddedCard = [popupAddCard.getInputValues()];
    const userCard = new Section({
      data: userAddedCard,
      renderer: (item) => {
        const card = new Card(item, '#gallery-item-template', handleCardClick);
        const cardElement = card.generateCard();
        userCard.addItem(cardElement);
      }
    }, '.gallery__list');

    userCard.renderItems();
    popupAddCard.close();
  }
},'.popup_type_add-form');


const popupEditProfile = new PopupWithForm({
  handlerSubmitForm: (evt) => {
    evt.preventDefault();
    const newUserInfo = popupEditProfile.getInputValues();
    userInfo.setUserInfo({name: newUserInfo['user-name'], job: newUserInfo['user-job']});
    popupEditProfile.close();
  }
}, '.popup_type_edit-profile');


// Функция открытия попапа редактирования профиля
function openEditPopup() {
  editFormValidator.resetValidation();
  editFormValidator.activateButton();
  popupEditProfile.open();
  const values = userInfo.getUserInfo();
  nameInput.value = values['user-name'];
  jobInput.value = values['user-job'];
}

// Функция открытия попапа добавления карточки
function openAddCardPopup() {
  addFormValidator.disableButton();
  addFormValidator.resetValidation();
  popupAddCard.open();
}

// Функция, которая будет получать на вход данные карточки и открывать попап с большой фотографией
function handleCardClick(name, link) {
  const popupPhoto = new PopupWithImage(name, link, '.popup_type_opened-photo');
  popupPhoto.open();
}

// Отрисовка базовых шести карточек на странице
defaultCardList.renderItems();

// Валидация форм
addFormValidator.enableValidation();
editFormValidator.enableValidation();

// Добавление обработчиков
buttonToOpenAddForm.addEventListener('click', openAddCardPopup);
buttonToOpenEditForm.addEventListener('click', openEditPopup);
