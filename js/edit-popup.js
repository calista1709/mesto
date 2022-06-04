let editPopup = document.querySelector('.popup_type_edit-profile');
let openEditButton = document.querySelector('.profile__edit-button');
let closeEditFormButton = editPopup.querySelector('.popup__close');
let editFormElement = editPopup.querySelector('.popup__form');

let nameInput = editFormElement.querySelector('.popup__input_content_name');
let jobInput = editFormElement.querySelector('.popup__input_content_job');

let nameElement = document.querySelector('.profile__title');
let jobElement = document.querySelector('.profile__subtitle');

function openEditPopup() {
  editPopup.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}

function closeEditPopup() {
  editPopup.classList.remove('popup_opened');
}

function editFormSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closeEditPopup();
}

openEditButton.addEventListener('click', openEditPopup);
closeEditFormButton.addEventListener('click', closeEditPopup);
editFormElement.addEventListener('submit', editFormSubmitHandler);
