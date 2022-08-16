class Api {
  constructor(options) {
    this._host = options.baseUrl;
    this._headers = options.headers;
  }

  _getJsonOrError(res){
    if (res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoFromServer() {
    return fetch(`${this._host}/users/me`, {
      headers: this._headers
    })
    .then(this._getJsonOrError);
  }

  setUserInfoToServer(newInfo) {
    return fetch(`${this._host}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newInfo.name,
        about: newInfo.about
      })
    })
    .then(this._getJsonOrError);
  }

  changeAvatar(url) {
    return fetch(`${this._host}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(this._getJsonOrError);
  }

  getInitialCards() {
    return fetch(`${this._host}/cards`, {
      headers: this._headers
    })
    .then(this._getJsonOrError);
  }

  setCard(newPhoto) {
    return fetch(`${this._host}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: newPhoto.name,
        link: newPhoto.link
      })
    })
    .then(this._getJsonOrError);
  }

  deleteCard(id) {
    return fetch(`${this._host}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._getJsonOrError);
  }

  setLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._getJsonOrError);
  }

  deleteLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._getJsonOrError);
  }
}

export {Api};
