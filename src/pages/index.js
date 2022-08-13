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

// Функция по созданию элемента карточки
const createCard = function(item) {
  const card = new Card(item, '#gallery-item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const сardList = new Section({
  renderer: (item) => сardList.addItem(createCard(item))
}, '.gallery__list');

const api = new Api(config.host, config.token);
api.getInitialCards()
  .then(cards => {
      сardList.renderItems(cards);
  });

const userInfo = new UserInfo(userInfoObj);
const formEditValidator = new FormValidator(setup, elementEditForm);
const formAddValidator = new FormValidator(setup, elementAddForm);
const popupPhoto = new PopupWithImage('.popup_type_opened-photo');

const popupAddCard = new PopupWithForm({
  handlerSubmitForm: (values) => {
    сardList.addItem(createCard(values));
    popupAddCard.close();
  }
},'.popup_type_add-form');


const popupEditProfile = new PopupWithForm({
  handlerSubmitForm: (values) => {
    userInfo.setUserInfo({name: values['user-name'], job: values['user-job']});
    popupEditProfile.close();
  }
}, '.popup_type_edit-profile');


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
