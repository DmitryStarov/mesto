export default class UserInfo {
  constructor ({ userNameSelector, userDescriptionSelector, userAvatarSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._about = document.querySelector(userDescriptionSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['name'] = this._name.textContent;
    this._userInfo['about'] = this._about.textContent;
    console.log(this._about)
    console.log(this._userInfo)
    return this._userInfo;
  }

  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._about.textContent = about
  }

   setAvatar({avatar}) {
    this._avatar.src = avatar;
  }

}
