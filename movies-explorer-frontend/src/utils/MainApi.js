export const BASE_URL = '//api.moviesapp.nomoredomains.sbs';

  function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
      return Promise.reject(`Ошибка: ${res.status}`);
  }

export const register = ( {password, email, name} ) => {
  return fetch(`${BASE_URL}/signup`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: password,
      email: email,
      name: name,
      })
  }).then((res) => {
    console.log(res);
    return checkResponse(res);
  });
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
      credentials: 'include',
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
  })
      .then(checkResponse)
};

export const authorize = ( password, email ) => {
  return fetch(`${BASE_URL}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
  })
      .then(checkResponse)
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
      .then(checkResponse)
};

export const changeUserInfo = ( userData ) => {
  return fetch(`${BASE_URL}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userData.name,
        email: userData.email })
  })
      .then(checkResponse)
};
/*
 getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method:'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

  setUserInfo(userData) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about
      })
    })
    .then(this._checkResponse);
  }


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      credentials: 'include',
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
  })
      .then(checkResponse)
};*/