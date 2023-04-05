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
} from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';



const renderCard = (data) => {
  const card = new Card(data, cardTemplate, openViewPopup);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const openEditPopup = () =>{
  popupEditForm.name.value = user.getUserInfo().name;
  popupEditForm.about.value = user.getUserInfo().about;
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

const cardList = new Section({items : initialCards, renderer : renderCard}, cardsContainerSelector);
cardList.renderItems();

enableValidation(validationSource);
