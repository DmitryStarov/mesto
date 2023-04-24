const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const popupEditForm = document.forms['form-user-edit'];
const cardsContainerSelector = '.cards';
const popupViewSelector = '.popup_type_view-image';
const popupEditSelector = '.popup_type_edit-user';
const popupAddSelector = '.popup_type_add-image';
const popupEditAvatarSelector = '.popup_type_edit-avatar'
const popupConfirmSelector = '.popup_type_confirm';
const cardTemplate = document.querySelector('#card-template').content;
const userAvatarEdit = document.querySelector('.profile__edit-image');

const userInfo = {
  userNameSelector : '.profile__name',
  userDescriptionSelector : '.profile__about',
  userAvatarSelector: '.profile__image'
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

const formValidators = {};

export {
  editButton,
  popupEditSelector,
  addButton,
  popupAddSelector,
  popupViewSelector,
  popupConfirmSelector,
  popupEditForm,
  popupEditAvatarSelector,
  cardsContainerSelector,
  cardTemplate,
  validationSource,
  formValidators,
  userInfo,
  userAvatarEdit
};
