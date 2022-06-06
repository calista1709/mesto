const editPopup = document.querySelector('.popup_type_edit-profile');
const openEditButton = document.querySelector('.profile__edit-button');
const closeEditFormButton = editPopup.querySelector('.popup__close');
const editFormElement = editPopup.querySelector('.popup__form');

const nameInput = editFormElement.querySelector('.popup__input_content_name');
const jobInput = editFormElement.querySelector('.popup__input_content_job');

const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

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
