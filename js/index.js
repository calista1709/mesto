const popupAddCard = document.querySelector('.popup_type_add-form');
const openAddButton = document.querySelector('.profile__add-button');
const closeAddFormButton = popupAddCard.querySelector('.popup__close');
const addFormElement = popupAddCard.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const openEditButton = document.querySelector('.profile__edit-button');
const closeEditFormButton = popupEditProfile.querySelector('.popup__close');
const editFormElement = popupEditProfile.querySelector('.popup__form');
const galleryList = document.querySelector('.gallery__list');
const galleryItemTemplate = document.querySelector('#gallery-item-template').content;
const photoPopup = document.querySelector('.popup_type_opened-photo');
const fullPhoto = photoPopup.querySelector('.popup__photo');
const fullPhotoTitle = photoPopup.querySelector('.popup__figcaption');
const fullImageCloseButton = photoPopup.querySelector('.popup__close');

const placeInput = addFormElement.querySelector('.popup__input_content_place-name');
const linkInput = addFormElement.querySelector('.popup__input_content_place-link');
const nameInput = editFormElement.querySelector('.popup__input_content_name');
const jobInput = editFormElement.querySelector('.popup__input_content_job');

const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция очистки полей ввода в попапе добавления фотографий
function resetAddPopupInputs() {
  placeInput.value = '';
  linkInput.value = '';
}

// Функция удаления всех показателей ошибки - спанов с ошибкой и подчеркивания инпутов
function resetErrorStates(popup) {
  const inputs = Array.from(popup.querySelectorAll('.popup__input'));
  const errorSpans = Array.from(popup.querySelectorAll('.popup__error'));
  inputs.forEach((input) => {
    input.classList.remove('popup__input_type_error');
  });
  errorSpans.forEach((errorSpan) => {
    errorSpan.classList.remove('popup__error_visible');
    errorSpan.textContent = '';
  });
}

// Функция открытия попапа редактирования профиля
function openEditPopup() {
  resetErrorStates(popupEditProfile);
  openPopup(popupEditProfile);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

// Функция открытия фотографии в полный размер
function openFullImage (photo, title) {
  fullPhoto.src = photo.src;
  fullPhoto.alt = photo.alt;
  fullPhotoTitle.textContent = title.textContent;
  openPopup(photoPopup);
}

// Функция включения-выключения лайка
function clickLike (evt) {
  evt.target.classList.toggle('gallery__like_active');
}

// Функция удаления карточки
function deleteCard (evt) {
  evt.target.parentElement.remove();
}

// Функция создания карточки
function createCard (title, src) {
  const galleryItemElement = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  const galleryPhoto = galleryItemElement.querySelector('.gallery__photo');
  const galleryTitle = galleryItemElement.querySelector('.gallery__title');
  const likeButton = galleryItemElement.querySelector('.gallery__like');
  const deleteButton = galleryItemElement.querySelector('.gallery__delete');

  galleryPhoto.src = src;
  galleryPhoto.alt = `Фотография: ${title}`;
  galleryTitle.textContent = title;


  likeButton.addEventListener('click', clickLike);
  deleteButton.addEventListener('click', deleteCard);
  galleryPhoto.addEventListener('click', function() {
    openFullImage(galleryPhoto, galleryTitle);
  });

  return galleryItemElement;
}

// Функция добавления карточки на страницу
function addCard (title, src) {
  const card = createCard(title, src);
  galleryList.prepend(card);
}

// Функция отправки формы добавления карточки
function submitAddCardForm (evt) {
  evt.preventDefault();
  if (placeInput.value !== '' && linkInput.value !== '') {
    addCard(placeInput.value, linkInput.value);
  }
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
initialCards.forEach((item) => addCard(item.name, item.link));

// Добавление обработчиков
openAddButton.addEventListener('click', function() {
  resetAddPopupInputs();
  resetErrorStates(popupAddCard);
  openPopup(popupAddCard);
});

closeAddFormButton.addEventListener('click', function() {
  closePopup(popupAddCard);
});

addFormElement.addEventListener('submit', submitAddCardForm);

openEditButton.addEventListener('click', openEditPopup);

closeEditFormButton.addEventListener('click', function() {
  closePopup(popupEditProfile);
});

editFormElement.addEventListener('submit', submitEditProfileForm);

fullImageCloseButton.addEventListener('click', function() {
  closePopup(photoPopup);
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closePopup(popupAddCard);
  }
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closePopup(popupEditProfile);
  }
});

popupEditProfile.addEventListener('click', function(evt) {
  closePopup(evt.target);
});

popupAddCard.addEventListener('click', function(evt) {
  closePopup(evt.target);
});
