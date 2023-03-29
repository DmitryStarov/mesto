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
    cardsContainerSelector,
    cardTemplate,
    validationSource,
    initialCards,
    formValidators
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from '../components/Section.js';


const renderCard = (data) => {
  const card = new Card(data, cardTemplate, openViewPopup);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

/*const renderInitialCards = (data) => {
  cardContainer.append(data);
}

const renderNewCard = (data) => {
  cardContainer.prepend(data);
}*/

const handleEscDown = (evt) =>{
  if (evt.key === 'Escape') {
    const popupCurrent = document.querySelector('.popup_opened');
    closePopup(popupCurrent);
  ;}
}

const openPopup = (item) => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscDown); //вешаем слушатель на попап при откытии
}

const closePopup = (item) => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscDown); //удаляем слушатель при закрытии
}

const openEditPopup = () =>{
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  formValidators['form-user-edit'].resetValidation();
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
  renderCard(imageItem);
  closePopup(popupAdd);
  evt.target.reset();
}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')
// вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    formValidators[formName].enableValidation();
  });
};


/*initialCards.forEach( (data) => {
  const newCard = createCard(data);
  renderInitialCards(newCard);
});*/

addButton.addEventListener('click', () => {
  popupAddForm.reset();
  formValidators['form-add-image'].resetValidation();
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
const cardList = new Section({items : initialCards, renderer : renderCard}, cardsContainerSelector);
cardList.renderItems();

enableValidation(validationSource);
