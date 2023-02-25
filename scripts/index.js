const createCard = (item) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.cards__image');
  const cardElementTitle = cardElement.querySelector('.cards__title');
  cardElementTitle.textContent = item.name;
  cardElementImage.src = item.link;
  cardElementImage.alt = item.name;
  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__button-like_action');
  })
  cardElement.querySelector('.cards__button-remove').addEventListener('click', (evt) => {
    evt.target.closest('.cards__item').remove();
  })
  cardElementImage.addEventListener('click', (evt) => {
    popupViewImage.src = evt.target.src;
    popupViewImage.alt = evt.target.alt;
    popupViewImageTitle.textContent = evt.target.alt;
    openPopup(popupView);
  })
  return cardElement;
}

const renderInitialCards = (item) => {
  const newCard = createCard(item);
  cardContainer.append(newCard);
}

const renderNewCard = (item) => {
  const newCard = createCard(item);
  cardContainer.prepend(newCard);
}

const openPopup = (item) => {
  item.classList.add('popup_opened');
}

const closePopup = (item) => {
  item.classList.remove('popup_opened');
}

const openEditPopup = () =>{
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  openPopup(popupEdit);
}

const handleEditFormSubmit = (evt) => {
  evt.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;
  closePopup(popupEdit);
}

const handleAddFormSubmit = (evt) => {
  evt.preventDefault();
  const imageItem = {
    name: popupInputImageName.value,
    link: popupInputImageLink.value
  }
  renderNewCard(imageItem);
  closePopup(popupAdd);
  console.log(imageItem);
  evt.target.reset();
  console.log(imageItem);
}

initialCards.forEach(renderInitialCards);
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', openEditPopup);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', handleAddFormSubmit);
popupCloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
