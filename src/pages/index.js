import './index.css';
import {
  config,
  setup,
  userInfoObj,
  elementAddForm,
  elementEditForm,
  nameInput,
  jobInput,
  buttonToOpenAddForm,
  buttonToOpenEditForm
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

const api = new Api(config.host, config.token);
const сardList = new Section({
  renderer: (item) => сardList.addItem(createCard(item))
}, '.gallery__list');
const userInfo = new UserInfo(userInfoObj);
const formEditValidator = new FormValidator(setup, elementEditForm);
const formAddValidator = new FormValidator(setup, elementAddForm);
const popupPhoto = new PopupWithImage('.popup_type_opened-photo');
const popupAddCard = new PopupWithForm({
  handlerSubmitForm: (values) => {
    api.setCard(values)
      .then(newCard => {
        сardList.addNewItem(createCard(newCard));
      })
      .then(() => {
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
},'.popup_type_add-form');
const popupEditProfile = new PopupWithForm({
  handlerSubmitForm: (values) => {
    api.setUserInfo({name: values['user-name'], about: values['user-job']})
      .then(serverUserInfo => {
        userInfo.setUserInfo(serverUserInfo);
      })
      .then(() => {
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}, '.popup_type_edit-profile');

// Функция по созданию элемента карточки
const createCard = function(item) {
  const card = new Card(item, '#gallery-item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

// Функция открытия попапа редактирования профиля
function openEditPopup() {
  formEditValidator.resetValidation();
  formEditValidator.activateButton();
  popupEditProfile.open();
  const values = userInfo.getUserInfo();
  nameInput.value = values['user-name'];
  jobInput.value = values['user-job'];
}

// Функция открытия попапа добавления карточки
function openAddCardPopup() {
  formAddValidator.disableButton();
  formAddValidator.resetValidation();
  popupAddCard.open();
}

// Функция, которая будет получать на вход данные карточки и открывать попап с большой фотографией
function handleCardClick(name, link) {
  popupPhoto.open(name, link);
}

// Отрисовка данных о пользователе - с сервера
api.getUserInfo()
  .then(serverUserInfo => {
    userInfo.setUserInfo(serverUserInfo);
    userInfo.setUserPhoto(serverUserInfo);
  })
  .catch((err) => {
    console.log(err);
  });

// Отрисовка базовых карточек - с сервера
api.getInitialCards()
  .then(cards => {
    сardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

// Валидация форм
formAddValidator.enableValidation();
formEditValidator.enableValidation();

// Добавление обработчиков для открытия форм
buttonToOpenAddForm.addEventListener('click', openAddCardPopup);
buttonToOpenEditForm.addEventListener('click', openEditPopup);

// Добавление обработчиков для закрытия форм
popupPhoto.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
