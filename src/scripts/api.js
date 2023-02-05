export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  /**проверка ответа сервера */
  _checkServerResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status, res.ok}`);
  }

  /**получение данных профиля с сервера*/
  getProfileData() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  /**получение карточек с сервера */
  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  /**редактирование данных профиля на сервере*/
  sendProfileData({ name, description }) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
      .then(res => this._checkServerResponce(res))
  }

  /**создание новой карточки на сервере*/
  addNewCard({ name, link }) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => this._checkServerResponce(res))
  }

  /**удаление карточки с сервера */
  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  /**поставить лайк */
  placeLikeOnCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  /**удалить лайк */
  deleteLikeFromCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  /**изменение аватара на сервере */
  changeUserAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar
      }),
    })
      .then(res => this._checkServerResponce(res));
  }
}


















