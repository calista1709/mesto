class UserInfo {
  constructor(userInfoObj) {
    this._userNameSelector = userInfoObj.userNameSelector;
    this._userJobSelector = userInfoObj.userJobSelector;
    this._userPhotoSelector = userInfoObj.userPhotoSelector;
    this._userNameElement = document.querySelector(this._userNameSelector);
    this._userJobElement = document.querySelector(this._userJobSelector);
    this._userPhotoElement = document.querySelector(this._userPhotoSelector);
  }

  getUserInfo() {
    return {
      'user-name': this._userNameElement.textContent,
      'user-job': this._userJobElement.textContent
    }
  }

  setUserInfo(data) {
    this._userNameElement.textContent = data.name;
    this._userJobElement.textContent = data.about;
  }

  setUserPhoto(data) {
    this._userPhotoElement.src = data.avatar;
  }
}

export {UserInfo};
