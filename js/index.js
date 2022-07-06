const popupAddCard = document.querySelector('.popup_type_add-form');
const formAddCard = popupAddCard.querySelector('.popup__form');
const buttonToOpenAddForm = document.querySelector('.profile__add-button');
const buttonToCloseAddForm = popupAddCard.querySelector('.popup__close');
const elementAddForm = popupAddCard.querySelector('.popup__form');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const buttonToOpenEditForm = document.querySelector('.profile__edit-button');
const buttonToCloseEditForm = popupEditProfile.querySelector('.popup__close');
const elementEditForm = popupEditProfile.querySelector('.popup__form');
const galleryList = document.querySelector('.gallery__list');
const galleryItemTemplate = document.querySelector('#gallery-item-template').content;
const popupPhoto = document.querySelector('.popup_type_opened-photo');
const photoFull = popupPhoto.querySelector('.popup__photo');
const titleFullPhoto = popupPhoto.querySelector('.popup__figcaption');
const buttonToCloseFullImage = popupPhoto.querySelector('.popup__close');

const placeInput = elementAddForm.querySelector('.popup__input_content_place-name');
const linkInput = elementAddForm.querySelector('.popup__input_content_place-link');
const nameInput = elementEditForm.querySelector('.popup__input_content_name');
const jobInput = elementEditForm.querySelector('.popup__input_content_job');

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

// Функция открытия фотографии в полный размер
function openFullImage (photo, title) {
  photoFull.src = photo.src;
  photoFull.alt = photo.alt;
  titleFullPhoto.textContent = title.textContent;
  openPopup(popupPhoto);
}

// Функция включения-выключения лайка
function clickLike (evt) {
  evt.target.classList.toggle('gallery__like_active');
}

// Функция удаления карточки
function deleteCard (evt) {
  evt.target.closest('li').remove();
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
  addCard(placeInput.value, linkInput.value);
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
buttonToOpenAddForm.addEventListener('click', function() {
  formAddCard.reset();
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
