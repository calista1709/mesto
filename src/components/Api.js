class Api {
  constructor(host, token) {
    this._host = host;
    this._token = token;
  }

  _getHeaders(){
    return {
      authorization: `${this._token}`,
      'Content-Type': 'application/json'
    }
  }

  _getJsonOrError(res){
    if (res.ok){
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfoFromServer() {
    return fetch(`${this._host}/users/me`, {
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }

  setUserInfoToServer(newInfo) {
    return fetch(`${this._host}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
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
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(this._getJsonOrError);
  }

  getInitialCards() {
    return fetch(`${this._host}/cards`, {
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }

  setCard(newPhoto) {
    return fetch(`${this._host}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
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
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }

  setLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }

  deleteLike(id) {
    return fetch(`${this._host}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }
}

export {Api};
