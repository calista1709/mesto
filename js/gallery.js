const galleryList = document.querySelector('.gallery__list');

function addGalleryItem (title, src) {
  const galleryItemTemplate = document.querySelector('#gallery-item-template').content;
  const galleryItemElement = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  const galleryPhoto = galleryItemElement.querySelector('.gallery__photo');
  const galleryTitle = galleryItemElement.querySelector('.gallery__title');
  const likeButton = galleryItemElement.querySelector('.gallery__like');
  const deleteButton = galleryItemElement.querySelector('.gallery__delete');

  galleryPhoto.src = src;
  galleryPhoto.alt = `Фотография: ${title}`;
  galleryTitle.textContent = title;

  function clickLike () {
    likeButton.classList.toggle('gallery__like_active');
  }

  function deleteCard (evt) {
    evt.target.parentElement.remove();
  }

  likeButton.addEventListener('click', clickLike);
  deleteButton.addEventListener('click', deleteCard);

  galleryList.prepend(galleryItemElement);
}

initialCards.forEach((item) => addGalleryItem(item.name, item.link));
