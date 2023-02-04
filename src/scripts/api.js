export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  _checkServerResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status, res.ok}`);
  }

  getProfileData() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

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

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  placeLikeOnCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

  deleteLikeFromCard(id) {
    return fetch(`${this.url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
      .then(res => this._checkServerResponce(res))
  }

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



/**авторизация на сервере */

/**проверка ответа сервера */

/**получение данных профиля с сервера*/

/**получение карточек с сервера */

/**редактирование данных профиля на сервере*/
/**создание новой карточки на сервере*/
/**удаление карточки с сервера */
/**поставить лайк */
/**удалить лайк */

/**изменение аватара на сервере */
