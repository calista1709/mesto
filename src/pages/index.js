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
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

const api = new Api(config.host, config.token);
const сardList = new Section({
  renderer: (item) => {
    api.getUserInfoFromServer()
      .then((res) => {
        if(res._id === item.owner._id) {
          сardList.addItem(createCard(item, true));
        } else {
          сardList.addItem(createCard(item, false));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, '.gallery__list');
const userInfo = new UserInfo(userInfoObj);
const formEditValidator = new FormValidator(setup, elementEditForm);
const formAddValidator = new FormValidator(setup, elementAddForm);
const popupPhoto = new PopupWithImage('.popup_type_opened-photo');
const popupDeleteCard = new PopupWithConfirmation('.popup_type_deleting-photo');
const popupAddCard = new PopupWithForm({
  handlerSubmitForm: (values) => {
    api.setCard(values)
      .then(newCard => {
        сardList.addNewItem(createCard(newCard, true));
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
    api.setUserInfoToServer({name: values['user-name'], about: values['user-job']})
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
const createCard = function(item, isOwn) {
  const card = new Card(item, '#gallery-item-template', handleCardClick, popupDeleteCard, isOwn);
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
api.getUserInfoFromServer()
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
popupDeleteCard.setEventListeners();
