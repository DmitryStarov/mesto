export default class FormValidator {

  constructor(validationSource, formElement) {
    this._validationSource = validationSource;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSource.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationSource.buttonSaveSelector);
  }

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validationSource.inputError);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._validationSource.errorMessageSelector);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validationSource.inputError);
    errorElement.classList.remove(this._validationSource.errorMessageSelector);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setInputState = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState = () => {
    if (this._setInputState(this._inputList)) {
      this._buttonElement.classList.add(this._validationSource.disableButtonSave);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._validationSource.disableButtonSave);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input',  () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetValidation = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
      })
  }

  enableValidation = () => {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
    }
}
export {FormValidator}
