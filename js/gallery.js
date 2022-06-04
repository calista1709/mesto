const galleryList = document.querySelector('.gallery__list');

function addGalleryItem (title, src) {
  const galleryItemTemplate = document.querySelector('#gallery-item-template').content;
  const galleryItemElement = galleryItemTemplate.querySelector('.gallery__item').cloneNode(true);
  const galleryPhoto = galleryItemElement.querySelector('.gallery__photo');
  const galleryTitle = galleryItemElement.querySelector('.gallery__title');
  const galleryLike = galleryItemElement.querySelector('.gallery__like');

  galleryPhoto.src = src;
  galleryPhoto.alt = `Фотография: ${title}`;
  galleryTitle.textContent = title;

  function clickLike () {
    galleryLike.classList.toggle('gallery__like_active');
  }

  galleryLike.addEventListener('click', clickLike);

  galleryList.prepend(galleryItemElement);
}

initialCards.forEach((item) => addGalleryItem(item.name, item.link));
