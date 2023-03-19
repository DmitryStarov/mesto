import {
    editButton,
    popupEdit,
    addButton,
    popups,
    popupAdd,
    popupView,
    popupViewImage,
    popupViewImageTitle,
    userName,
    userAbout,
    popupEditForm,
    popupInputName,
    popupInputAbout,
    popupAddForm,
    popupInputImageName,
    popupInputImageLink,
    cardContainer,
    cardTemplate,
    validationSource,
    initialCards,
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const renderInitialCards = (item) => {
  const newCard = item.generateCard();
  cardContainer.append(newCard);
}

const renderNewCard = (item) => {
  const newCard = item.generateCard();
  cardContainer.prepend(newCard);
}

const handleEscDown = (evt) =>{
  if (evt.key === 'Escape') {
    const popupCurrent = document.querySelector('.popup_opened');
    closePopup(popupCurrent);
  ;}
}

export const openPopup = (item) => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscDown); //вешаем слушатель на попап при откытии
}

const closePopup = (item) => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscDown); //удаляем слушатель при закрытии
}

const openEditPopup = () =>{
  const validator = new FormValidator(validationSource, popupEditForm);
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  validator.enableValidation();
  openPopup(popupEdit);
}

const openViewPopup = (img) => {
  popupViewImage.src = img.src;
  popupViewImage.alt = img.alt;
  popupViewImageTitle.textContent = img.alt;
  openPopup(popupView);
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
  const card = new Card(imageItem, cardTemplate, openViewPopup);
  renderNewCard(card);
  closePopup(popupAdd);
  evt.target.reset();
}

initialCards.forEach( (item) => {
  const card = new Card(item, cardTemplate, openViewPopup);
  renderInitialCards(card);
});

addButton.addEventListener('click', () => {
  const validator = new FormValidator(validationSource, popupAddForm);
  validator.resetValidation();
  popupAddForm.reset();
  validator.enableValidation();
  openPopup(popupAdd);
});

editButton.addEventListener('click', openEditPopup);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', handleAddFormSubmit);

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__button-close')) {
      closePopup(popup)
    }
  })
})

