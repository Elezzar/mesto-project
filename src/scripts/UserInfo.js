export default class UserInfo {
  constructor(
    nameSelector,
    imageSelector,
    descriptionSelector,
    getProfileData,
    sendProfileData
  ) {
    this._elementName = nameSelector;
    this._elementImage = imageSelector;
    this._elementDescription = descriptionSelector;
    this._getProfileData = getProfileData;
    this._sendProfileData = sendProfileData;
  }

  getUserInfo() {
    return this._getProfileData().then((res) => {
      return res;
    });
  }

  setUserInfo(data) {
    this._sendProfileData(data);
    document.querySelector(this._elementName).textContent = data.name;
    document.querySelector(this._elementDescription).textContent = data.about;
    document.querySelector(this._elementImage).src = data.avatar;
    document.querySelector(this._elementImage).alt = data.name;
  }
}
