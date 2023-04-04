import {
    editButton,
    //popupEdit,
    popupEditSelector,
    addButton,
    popups,
    popupAdd,
    popupView,
    popupViewSelector,
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
const user = new UserInfo(userInfo);

const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

const popupUserForm = new PopupWithForm (popupEditSelector, handleEditFormSubmit)
popupUserForm.setEventListeners();

addButton.addEventListener('click', () => {
  popupAddForm.reset();
  formValidators['form-add-image'].resetValidation();
  openPopup(popupAdd);
});

editButton.addEventListener('click', openEditPopup);

const cardList = new Section({items : initialCards, renderer : renderCard}, cardsContainerSelector);
cardList.renderItems();

enableValidation(validationSource);
