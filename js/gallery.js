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

  function clickLike (evt) {
    evt.target.classList.toggle('gallery__like_active');
  }

  function deleteCard (evt) {
    evt.target.parentElement.remove();
  }

  function openFullImage () {
    const photoPopup = document.querySelector('.popup_type_opened-photo');
    const fullPhoto = photoPopup.querySelector('.popup__photo');
    const fullPhotoTitle = photoPopup.querySelector('.popup__figcaption');
    const fullImageCloseButton = photoPopup.querySelector('.popup__close');

    fullPhoto.src = galleryPhoto.src;
    fullPhoto.alt = galleryPhoto.alt;
    fullPhotoTitle.textContent = galleryTitle.textContent;

    fullImageCloseButton.addEventListener('click', function() {
      photoPopup.classList.remove('popup_opened');
    });

    photoPopup.classList.add('popup_opened');
  }

  likeButton.addEventListener('click', clickLike);
  deleteButton.addEventListener('click', deleteCard);
  galleryPhoto.addEventListener('click', openFullImage);

  galleryList.prepend(galleryItemElement);
}

initialCards.forEach((item) => addGalleryItem(item.name, item.link));
