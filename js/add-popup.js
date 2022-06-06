const addPopup = document.querySelector('.popup_type_add-form');
const openAddButton = document.querySelector('.profile__add-button');
const closeAddFormButton = addPopup.querySelector('.popup__close');
const addFormElement = addPopup.querySelector('.popup__form');

const placeInput = addFormElement.querySelector('.popup__input_content_place-name');
const linkInput = addFormElement.querySelector('.popup__input_content_place-link');


function openAddPopup() {
  addPopup.classList.add('popup_opened');
}

function closeAddPopup() {
  addPopup.classList.remove('popup_opened');
}

function addFormSubmitHandler (evt) {
  evt.preventDefault();

  if (placeInput.value !== '' && linkInput.value !== '') {
    addGalleryItem(placeInput.value, linkInput.value);
  }

  closeAddPopup();

  placeInput.value = '';
  linkInput.value = '';
}

openAddButton.addEventListener('click', openAddPopup);
closeAddFormButton.addEventListener('click', closeAddPopup);
addFormElement.addEventListener('submit', addFormSubmitHandler);
