const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');
let popupInputName = popupForm.querySelector('.popup__input_type_name');
let popupInputAbout = popupForm.querySelector('.popup__input_type_about');
const popupCloseButton = document.querySelector('.popup__button-close');



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
  console.log(cardTemplate);
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__title').textContent = item.name;
  cardElement.querySelector('.cards__image').src = item.link;
  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__button-like_action');
  })
  console.log(cardElement);
  return cardElement;
}

const renderCard = (item) => {
  const newCard = createCard(item);
  const cardContainer = document.querySelector('.cards');
  cardContainer.prepend(newCard);
}

initialCards.forEach((item) => {
  renderCard(item);
})

const openPopup = () => {
  popup.classList.add('popup_opened');
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

const openEditPopup = () =>{
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  openPopup();
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;
  closePopup();
}


editButton.addEventListener('click', openEditPopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupCloseButton.addEventListener('click', closePopup);

