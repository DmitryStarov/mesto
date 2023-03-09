const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit-user');
const addButton = document.querySelector('.profile__button-add');
const popups = document.querySelectorAll('.popup');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupView = document.querySelector('.popup_type_view-image');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewImageTitle = popupView.querySelector('.popup__image-description');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__about');
const popupEditForm = document.forms['form-user-edit'];
const popupInputName = popupEditForm.querySelector('.popup__input_type_name');
const popupInputAbout = popupEditForm.querySelector('.popup__input_type_about');
const popupAddForm = document.forms['form-add-image'];
const popupInputImageName = popupAddForm.querySelector('.popup__input_type_image-name');
const popupInputImageLink = popupAddForm.querySelector('.popup__input_type_image-link');
const cardContainer = document.querySelector('.cards');

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
