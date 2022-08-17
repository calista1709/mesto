import './index.css';
import {
  setup,
  userInfoObj,
  elementAddForm,
  elementEditForm,
  elementAvatarForm,
  nameInput,
  jobInput,
  buttonToOpenAddForm,
  buttonToOpenEditForm,
  buttonToOpenAvatarForm
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: 'fb096cda-3fa8-438f-8ed5-03045e014a70',
    'Content-Type': 'application/json'
  }
});
const userInfo = new UserInfo(userInfoObj);
const formEditValidator = new FormValidator(setup, elementEditForm);
const formAddValidator = new FormValidator(setup, elementAddForm);
const formAvatarValidator = new FormValidator(setup, elementAvatarForm);
const popupPhoto = new PopupWithImage('.popup_type_opened-photo');

const сardList = new Section({
  renderer: (item, userId) => {
    сardList.addItem(createCard(item, userId === item.owner._id, item.likes.find((like) => like._id === userId)));
  }
}, '.gallery__list');

const popupDeleteCard = new PopupWithConfirmation({
  handlerSubmitForm: (id, cardInstanse) => {
    api.deleteCard(id)
      .then(() => {
        cardInstanse.deleteCard();
      })
      .then(() => {
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
},'.popup_type_deleting-photo');

const popupAddCard = new PopupWithForm({
  handlerSubmitForm: (values) => {
    popupAddCard.renderSaving(true, 'Сохранение...');
    api.setCard(values)
      .then(newCard => {
        сardList.addNewItem(createCard(newCard, true, false));
      })
      .then(() => {
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderSaving(false, '');
      });
  }
},'.popup_type_add-form');

const popupEditProfile = new PopupWithForm({
  handlerSubmitForm: (values) => {
    popupEditProfile.renderSaving(true, 'Сохранение...');
    api.setUserInfoToServer({name: values['user-name'], about: values['user-job']})
      .then(serverUserInfo => {
        userInfo.setUserInfo(serverUserInfo);
      })
      .then(() => {
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderSaving(false, '');
      });
  }
}, '.popup_type_edit-profile');

const popupChangeAvatar = new PopupWithForm({
  handlerSubmitForm: (url) => {
    popupChangeAvatar.renderSaving(true, 'Сохранение...');
    api.changeAvatar(url['avatar-link'])
      .then(res => {
        userInfo.setUserPhoto(res);
      })
      .then(() => {
        popupChangeAvatar.close();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        popupChangeAvatar.renderSaving(false, '');
      });
  }
},'.popup_type_change-avatar');

// Функция по созданию элемента карточки
const createCard = function(item, isOwn, isLikedByUser) {
  const card = new Card(item, '#gallery-item-template', handleCardClick, handleDeleteClick, deleteLikeFromServer, addLikeToServer, isOwn, isLikedByUser);
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

// Функция открытия попапа изменения аватара
function openChangeAvatarPopup() {
  formAvatarValidator.disableButton();
  formAvatarValidator.resetValidation();
  popupChangeAvatar.open();
}

// Функция, которая будет получать на вход данные карточки и открывать попап с большой фотографией
function handleCardClick(name, link) {
  popupPhoto.open(name, link);
}

// Функция открытия попапа удаления карточки
function handleDeleteClick(id, cardInstanse) {
  popupDeleteCard.open(id, cardInstanse);
}

// Функция, чтобы удалить лайк с сервера
function deleteLikeFromServer(id) {
	return api.deleteLike(id);
}

// Функция, чтобы добавить лайк на сервер
function addLikeToServer(id) {
	return api.setLike(id);
}

// Валидация форм
formAddValidator.enableValidation();
formEditValidator.enableValidation();
formAvatarValidator.enableValidation();

// Добавление обработчиков для открытия форм
buttonToOpenAddForm.addEventListener('click', openAddCardPopup);
buttonToOpenEditForm.addEventListener('click', openEditPopup);
buttonToOpenAvatarForm.addEventListener('click', openChangeAvatarPopup);

// Добавление обработчиков для закрытия форм
popupPhoto.setEventListeners();
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
popupDeleteCard.setEventListeners();
popupChangeAvatar.setEventListeners();

// Отрисовка данных о пользователе и базовых карточек - с сервера
Promise.all([api.getUserInfoFromServer(), api.getInitialCards()])
  .then(res => {
    userInfo.setUserInfo(res[0]);
    userInfo.setUserPhoto(res[0]);
    сardList.renderItems(res[1], res[0]._id);
  })
  .catch((err) => {
    console.log(err);
  });
