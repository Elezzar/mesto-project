export default class UserInfo {
  constructor(
    nameSelector,
    imageSelector,
    descriptionSelector
  ) {
    this._elementName = document.querySelector(nameSelector);
    this._elementImage = document.querySelector(imageSelector);
    this._elementDescription = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._elementName.textContent,
      about: this._elementDescription.textContent,
      avatar: this._elementImage.src
    }
    return userData
  }

  setUserInfo(data) {
    if(data.name) {
      this._elementName.textContent = data.name;
    }
    if(data.about) {
      this._elementDescription.textContent = data.about;
    }
    if(data.avatar) {
      this._elementImage.src = data.avatar;
    }
    if(data._id){
      this.userId = data._id;
    }
  }
}
