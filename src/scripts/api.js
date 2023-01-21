/**авторизация на сервере */
const serverAuthorization = {
  serverUrl: 'https://nomoreparties.co/v1/plus-cohort-17',
  headers: {
    authorization: 'f024cd52-7e5f-4d9c-952d-ed65a4f031f6',
    'Content-Type': 'application/json',
  },
};

/**проверка ответа сервера */
function checkResponseServer (res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status, res.ok}`);
};

/**получение данных профиля с сервера*/
function getProfile () {
  return fetch(`${serverAuthorization.serverUrl}/users/me`, {
    headers: serverAuthorization.headers
  })

  .then(res => checkResponseServer(res))
}

/**получение карточек с сервера */
function getCards () {
  return fetch(`${serverAuthorization.serverUrl}/cards`, {
    headers: serverAuthorization.headers
  })
  .then(res => checkResponseServer(res))
};

/**редактирование данных профиля на сервере*/
function editProfile (name, about) {
  return fetch(`${serverAuthorization.serverUrl}/users/me`, {
    method: 'PATCH',
    headers: serverAuthorization.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })

  .then(res => checkResponseServer(res))
}

/**создание новой карточки на сервере*/
function createNewCard (name, link) {
  return fetch(`${serverAuthorization.serverUrl}/cards`, {
    method: 'POST',
    headers: serverAuthorization.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })

  .then(res => checkResponseServer(res))
}

/**удаление карточки с сервера */
function deleteCard (cardId) {
  return fetch(`${serverAuthorization.serverUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: serverAuthorization.headers
    })

    .then(res => checkResponseServer(res))
  }

/**поставить лайк */
function putLike (cardId) {
  return fetch(`${serverAuthorization.serverUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: serverAuthorization.headers
    })
  
    .then(res => checkResponseServer(res))
}

/**удалить лайк */
function deleteLike (cardId) {
  return fetch(`${serverAuthorization.serverUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: serverAuthorization.headers
    })

    .then(res => checkResponseServer(res))
}

/**изменение аватара на сервере */
function changeUserAvatar (avatar) {
  return fetch(`${serverAuthorization.serverUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: serverAuthorization.headers,
    body: JSON.stringify({
      avatar: avatar
    }),
  })
  .then(res => checkResponseServer(res));
}




  export { serverAuthorization, getProfile, getCards, editProfile, createNewCard, changeUserAvatar, deleteCard, putLike, deleteLike }