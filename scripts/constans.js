const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit-user');
const addButton = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add-image');
const popupViewImage = document.querySelector('.popup_type_view-image');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');
let popupEditForm = popupEdit.querySelector('.popup__form');
let popupInputName = popupEditForm.querySelector('.popup__input_type_name');
let popupInputAbout = popupEditForm.querySelector('.popup__input_type_about');
let popupAddForm = popupAdd.querySelector('.popup__form');
let popupInputImageName = popupAddForm.querySelector('.popup__input_type_image-name');
let popupInputImageLink = popupAddForm.querySelector('.popup__input_type_image-link');
const popupEditCloseButton = popupEdit.querySelector('.popup__button-close');
const popupAddCloseButton = popupAdd.querySelector('.popup__button-close')
const popupViewCloseButton = popupViewImage.querySelector('.popup__button-close')


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
