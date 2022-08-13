class Api {
  constructor(host, token) {
    this._host = host;
    this._token = token;
  }

  getUserInfo() {
    return fetch(`${this._host}/users/me`, {
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setUserInfo(newInfo) {
    return fetch(`${this._host}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newInfo.name,
        about: newInfo.about
      })
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this._host}/cards`, {
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  setCard(newPhoto) {
    return fetch(`${this._host}/cards`, {
      method: 'POST',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newPhoto.name,
        link: newPhoto.link
      })
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export {Api};
