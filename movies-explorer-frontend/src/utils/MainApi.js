export const BASE_URL = 'http://localhost:3001';
//'//api.moviesapp.nomoredomains.sbs';

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
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
  })
      .then(checkResponse)
};

export const authorize = ( {password, email} ) => {
  return fetch(`${BASE_URL}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
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
export function saveMovies({
  country, director, duration, year, description, image, trailerLink, thumbnail, owner, movieId, nameRU, nameEN
}) {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailerLink: trailerLink,
      thumbnail:thumbnail,
      owner: owner,
      movieId: movieId,
      nameRU: nameRU,
      nameEN:nameEN
    })
  }).then(checkResponse);
}*/

export function saveMovies(data) {
  return fetch(`${BASE_URL}/movies`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkResponse)
}

export const deleteMovies = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    credentials: 'include',
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(checkResponse)
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
  })
      .then(checkResponse)
};

/*



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
