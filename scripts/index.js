const editButton = document.querySelector('.profile__button-edit');
console.log(editButton);

const popup = document.querySelector('.popup');
console.log(popup);

const toggleOpenPopup = () =>{
  popup.classList.toggle("popup_opened");
}

editButton.addEventListener('click', toggleOpenPopup)
