const fetchTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=d3e8a787d9b4dc35185152e0bafc0774`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No Movie'));
  });
};
const fetchSearchMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&query=${query}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No Movie'));
  });
};
const fetchMoviesInfo = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No Movie'));
  });
};
const fetchMoviesCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No Movie'));
  });
};
const fetchMoviesReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('No Movie'));
  });
};

const api = {
  fetchTrending,
  fetchSearchMovies,
  fetchMoviesInfo,
  fetchMoviesCredits,
  fetchMoviesReviews,
};

export default api;

// kay = d3e8a787d9b4dc35185152e0bafc0774;
// https://api.themoviedb.org/3/trending/all/day?api_key=d3e8a787d9b4dc35185152e0bafc0774  тренд

// https://api.themoviedb.org/3/search/movie?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&page=1&include_adult=false   поиск фильмов
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US инфо о фильме
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US  актерский состав

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=d3e8a787d9b4dc35185152e0bafc0774&language=en-US&page=1   запрос обзоров для страницы кинофильма
