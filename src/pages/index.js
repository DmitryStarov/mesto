import './index.css';
import {
    editButton,
    popupEditSelector,
    addButton,
    popupAddSelector,
    popupViewSelector,
    popupEditForm,
    cardsContainerSelector,
    cardTemplate,
    validationSource,
    initialCards,
    formValidators,
    userInfo
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const createCard = (data) => {
  const card = new Card(data, cardTemplate, openViewPopup);
  return card.generateCard();
}

const renderCard = (data) => {
  const cardElement = createCard(data);
  cardList.addItem(cardElement);
}

const openEditPopup = () =>{
  popupUserForm.setInputValues(user.getUserInfo());
  formValidators['form-user-edit'].resetValidation();
  popupUserForm.open();
}

const handleEditFormSubmit = (data) => {
  user.setUserInfo(data);
  popupUserForm.close();
}

const openViewPopup = (img) => {
  popupWithImage.open(img);
}


const handleAddFormSubmit = (data) => {
  renderCard(data);
  popupAddImageForm.close();
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

const cardList = new Section({items : initialCards, renderer : renderCard}, cardsContainerSelector);
cardList.renderItems();

const user = new UserInfo(userInfo);

const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

const popupUserForm = new PopupWithForm(popupEditSelector, handleEditFormSubmit)
popupUserForm.setEventListeners();

const popupAddImageForm = new PopupWithForm(popupAddSelector, handleAddFormSubmit)
popupAddImageForm.setEventListeners();


addButton.addEventListener('click', () => {
  formValidators['form-add-image'].resetValidation();
  popupAddImageForm.open();
});

editButton.addEventListener('click', openEditPopup);

enableValidation(validationSource);
