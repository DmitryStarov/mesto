import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (popupSelectror, handleSubmitForm) {
    super(popupSelectror);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      console.log('11' + input.value);
      console.log('1' + this._formValues[input.name]);
    })
    return this._formValues;
  }

  close () {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      console.log('3' + this._getInputValues())
    })

  }
}
