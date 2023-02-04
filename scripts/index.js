const editButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__about');
let popupForm = document.querySelector('.popup__container');
let popupInputName = popupForm.querySelector('.popup__input_type_name');
let popupInputAbout = popupForm.querySelector('.popup__input_type_about');


const handleOverlyClick = (event) => {
  if (event.target === event.currentTarget) {
    toggleOpenPopup();
  }
};

const handleCloseButtonClick = () => {
  toggleOpenPopup();
};


const handleFormSubmit = (event) => {
  event.preventDefault();
  userName.textContent = popupInputName.value;
  userAbout.textContent = popupInputAbout.value;
  popup.classList.toggle("popup_opened");
}

const toggleOpenPopup = () =>{
  popupInputName.value = userName.innerText;
  popupInputAbout.value = userAbout.innerText;
  popup.classList.toggle("popup_opened");
  popup.addEventListener("click", handleOverlyClick);
}



editButton.addEventListener("click", toggleOpenPopup);
popupForm.addEventListener("submit", handleFormSubmit);
popupCloseButton.addEventListener("click", handleCloseButtonClick );
