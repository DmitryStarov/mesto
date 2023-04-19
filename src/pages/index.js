import './index.css';
import {
    editButton,
    popupEditSelector,
    addButton,
    popupAddSelector,
    popupViewSelector,
    popupConfirmSelector,
//    popupEditForm,
    cardsContainerSelector,
    cardTemplate,
    validationSource,
    //initialCards,
    formValidators,
    userInfo
} from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';

const api =  new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '539ef681-b6e6-46ab-9803-a552b23b4170',
    'Content-Type': 'application/json'
  }
});

let cardList;
const cards = {};
let userId;

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([userData, cards]) => {
    console.log(cards);
    userId = userData._id;
    renderInitialCards(cards)
  })
  // .catch(error => console.log(`Ошибка: ${error}`));

const createCard = (data) => {
  const card = new Card(data, cardTemplate, userId, openViewPopup, handleCardDelete);
  cards[data._id] = card;
  return card.generateCard();
}

const renderCard = (data, isStart) => {
  const cardElement = createCard(data);
  cardList.addItem(cardElement, isStart);
}

const renderInitialCards = (data) => {
  cardList = new Section({items : data, renderer : renderCard}, cardsContainerSelector);
  cardList.renderItems();
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
  api.postCard(data)
  .then ((res) => {
  renderCard(res, true);
  popupAddImageForm.close();
  })
  .catch(error => console.log(`Ошибка: ${error}`));
}


const popupConfirm = new PopupWithForm(popupConfirmSelector, handleAddFormSubmit)
popupConfirm.setEventListeners();

const handleCardDelete = (cardId) => {
  popupConfirm.open();
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

enableValidation(validationSource);
