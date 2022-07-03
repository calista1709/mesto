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


function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function resetAddPopupInputs() {
  placeInput.value = '';
  linkInput.value = '';
}

function openEditPopup() {
  openPopup(popupEditProfile);
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

function openFullImage (photo, title) {
  fullPhoto.src = photo.src;
  fullPhoto.alt = photo.alt;
  fullPhotoTitle.textContent = title.textContent;
  openPopup(photoPopup);
}

function clickLike (evt) {
  evt.target.classList.toggle('gallery__like_active');
}

function deleteCard (evt) {
  evt.target.parentElement.remove();
}

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

function addCard (title, src) {
  const card = createCard(title, src);
  galleryList.prepend(card);
}

function submitAddCardForm (evt) {
  evt.preventDefault();

  if (placeInput.value !== '' && linkInput.value !== '') {
    addCard(placeInput.value, linkInput.value);
  }

  closePopup(popupAddCard);
}

function submitEditProfileForm (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

initialCards.forEach((item) => addCard(item.name, item.link));

openAddButton.addEventListener('click', function() {
  resetAddPopupInputs();
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
