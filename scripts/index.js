const editButton = document.querySelector('.profile__button-edit');
const popupEdit = document.querySelector('.popup_type_edit-user');
const addButton = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popup_type_add-image');
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
console.log(initialCards);
const createCard = (item) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__title').textContent = item.name;
  cardElement.querySelector('.cards__image').src = item.link;
  cardElement.querySelector('.cards__image').alt = 'Изображение ' + item.name;
  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('cards__button-like_action');
  })
  cardElement.querySelector('.cards__button-remove').addEventListener('click', (evt) => {
    evt.target.closest('.cards__item').remove();
    //из брифа неясно удалять ли элемент из массива при удалении карточки. уточнить у наставника
    let indexElement = initialCards.indexOf(item);
    initialCards.splice(indexElement, 1);
  })
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
  //из брифа неясно нужно ли добавлять новую картинку в массив. уточнить у наставника
  initialCards.push(imageItem);
  createCard(imageItem);
  renderCard(imageItem);
  closePopup(popupAdd);
  popupInputImageLink.value = ''
  popupInputImageName.value = '';
}

addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', openEditPopup);
popupEditForm.addEventListener('submit', handleEditFormSubmit);
popupAddForm.addEventListener('submit', handleAddFormSubmit)
popupEditCloseButton.addEventListener('click', () => closePopup(popupEdit));
popupAddCloseButton.addEventListener('click', () => closePopup(popupAdd));
