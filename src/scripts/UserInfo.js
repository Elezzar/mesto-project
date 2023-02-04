export default class UserInfo {
    constructor({ name, description, image }, getUserData, sendUserData) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.getUserData = getUserData;
        this.sendUserData = sendUserData;
    }

    getUserInfo() {
        return this.getUserData().then(res => res.json()).then(res => { return res })
    }

    setUserInfo(data) {
        this.sendUserData(data)
        document.querySelector('.profile__name').textContent = data.name
        document.querySelector('.profile__person').textContent = data.description
    }
}