const showInputError = (formElement, inputElement, errorMessage, source) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(source.inputError);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(source.errorMessageSelector);
};

const hideInputError = (formElement, inputElement, source) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(source.inputError);
  errorElement.classList.remove(source.errorMessageSelector);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, source) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, source);
  } else {
    hideInputError(formElement, inputElement, source);
  }
};

const setInputState = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}


const toggleButtonState = (inputList, buttonElement, disableButtonSave) => {
  if (setInputState(inputList)) {
    buttonElement.classList.add(disableButtonSave);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(disableButtonSave);
    buttonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (formElement, source) => {
  const inputList = Array.from(formElement.querySelectorAll(source.inputSelector));
  const buttonElement = formElement.querySelector(source.buttonSaveSelector);
  toggleButtonState(inputList, buttonElement, source.disableButtonSave);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, source);
      toggleButtonState(inputList, buttonElement, source.disableButtonSave);
    });
  });
};

const resetValidation = (formElement, source) => {
  const inputList = Array.from(formElement.querySelectorAll(source.inputSelector));
  const buttonElement = formElement.querySelector(source.buttonSaveSelector);
  toggleButtonState(inputList, buttonElement, source.disableButtonSave);
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, source);
    })
}

const enableValidation = (source) => {
  const formList = Array.from(document.querySelectorAll(source.formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
     evt.preventDefault();
    });
   const fieldsetList = Array.from(formElement.querySelectorAll(source.inputSectionSelector));
   fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet, source);
   });
      });
};
