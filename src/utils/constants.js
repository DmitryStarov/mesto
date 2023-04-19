const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const popupEditForm = document.forms['form-user-edit'];
const cardsContainerSelector = '.cards';
const popupViewSelector = '.popup_type_view-image';
const popupEditSelector = '.popup_type_edit-user';
const popupAddSelector = '.popup_type_add-image';
const popupConfirmSelector = '.popup_type_confirm';
const cardTemplate = document.querySelector('#card-template').content;

const userInfo = {
  userNameSelector : '.profile__name',
  userDescriptionSelector : '.profile__about'
};

const validationSource = {
  formSelector : '.popup__form',
  inputSectionSelector: '.popup__fieldset',
  inputSelector : '.popup__input',
  buttonSaveSelector : '.popup__button-save',
  disableButtonSave : 'popup__button-save_disable',
  inputError: '.popup__input_error',
  errorMessageSelector: 'popup__error-message_visible'
};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const formValidators = {};

export {
  editButton,
  popupEditSelector,
  addButton,
  popupAddSelector,
  popupViewSelector,
  popupConfirmSelector,
  popupEditForm,
  cardsContainerSelector,
  cardTemplate,
  validationSource,
  initialCards,
  formValidators,
  userInfo
};
