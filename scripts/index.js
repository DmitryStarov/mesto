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

const createCard = (item) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__title').textContent = item.name;
  cardElement.querySelector('.cards__image').src = item.link;
  cardElement.querySelector('.cards__image').alt = item.name;
  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__button-like_action');
  })
  cardElement.querySelector('.cards__button-remove').addEventListener('click', (evt) => {
    evt.target.closest('.cards__item').remove();
  })
  cardElement.querySelector('.cards__image').addEventListener('click', (evt) => {
    popupViewImage.querySelector('.popup__image').src = evt.target.src;
    popupViewImage.querySelector('.popup__image-description').textContent = evt.target.alt;
    openPopup(popupViewImage);
  })
  return cardElement;
}

const renderInitialCards = (item) => {
  const newCard = createCard(item);
  const cardContainer = document.querySelector('.cards');
  cardContainer.append(newCard);
}

const renderNewCard = (item) => {
  const newCard = createCard(item);
  const cardContainer = document.querySelector('.cards');
  cardContainer.prepend(newCard);
}

const openPopup = (item) => {
  item.classList.add('popup_opened');
}

const closePopup = (item) => {
  item.classList.remove('popup_opened');
}

const openEditPopup = () =>{
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  openPopup(popupEdit);
}

const handleEditFormSubmit = (event) => {
  event.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;
  closePopup(popupEdit);
}

const handleAddFormSubmit = (event) => {
  event.preventDefault();
  let imageItem = {
    name: popupInputImageName.value,
    link: popupInputImageLink.value
  }
  createCard(imageItem);
  renderNewCard(imageItem);
  closePopup(popupAdd);
  popupInputImageLink.value = '';
  popupInputImageName.value = '';
  console.log(initialCards);
}

initialCards.forEach((item) => {
  renderInitialCards(item);
})

addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', openEditPopup);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', handleAddFormSubmit)
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
popupViewCloseButton .addEventListener('click', () => closePopup(popupViewImage));
