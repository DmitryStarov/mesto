const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__form');
let popupInputName = popupForm.querySelector('.popup__input_type_name');
let popupInputAbout = popupForm.querySelector('.popup__input_type_about');
const popupCloseButton = document.querySelector('.popup__button-close');


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
