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

  getUserInfo() {
    return fetch(`${this._host}/users/me`, {
      headers: this._getHeaders()
    })
    .then(this._getJsonOrError);
  }

  setUserInfo(newInfo) {
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
}

export {Api};
