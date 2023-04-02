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
      this._formValues[input.name] = input.values;
    })
    return this._formValues;
  }

  close () {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListeners('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })

  }
}
