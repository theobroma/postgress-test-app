import axios from 'axios';
const apiPrefix = '/api';
export default {
  listBooks() {
    return axios.get(`${apiPrefix}/books`);
  },
  bookByID(bookID) {
    return axios.get(`${apiPrefix}/books/${bookID}`);
  },
  listGenres() {
    return axios.get(`${apiPrefix}/genres`);
  },
  genreByName(genreName) {
    return axios.get(`${apiPrefix}/genres/${genreName}`);
  },
  listAuthors() {
    return axios.get(`${apiPrefix}/authors`);
  },
  authorByName(authorName) {
    return axios.get(`${apiPrefix}/authors/${authorName}`);
  },
  userSignupRequest(data) {
    return axios.post(`${apiPrefix}/users`, data);
  }
};
