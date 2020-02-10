import { createStore, combineReducers } from "redux";

const ratingFilterReducer = (state = -1, action) => {
  if (action.type === "SET_RATING_FILTER") {
    return action.rating;
  }
  return state;
};

const titleFilterReducer = (state = "", action) => {
  if (action.type === "SET_TITLE_FILTER") {
    return action.title;
  }
  return state;
};

const movieList = [
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg",
    title: "Inception",
    year: 2010,
    rate: 4,
    id: 0,
    description: "The Inception"
  },
  {
    image:
      "https://media.senscritique.com/media/000005676799/source_big/Avengers.jpg",
    title: "Avengers",
    year: 2012,
    rate: 3,
    id: 1,
    description: "Avengers"
  },
  {
    image: "http://fr.web.img5.acsta.net/pictures/14/10/31/17/54/461500.jpg",
    title: "The theory of everything",
    year: 2014,
    rate: 5,
    id: 2,
    description: "The theory of everything"
  }
];

const moviesReducer = (state = [], action) => {
  if (action.type === "ADD_MOVIE") {
    return state.concat(action.movie);
  }
  if (action.type === "EDIT_MOVIE") {
    return state.map(m => {
      if (m.id === action.id) {
        return action.movie;
      }
      return m;
    });
  }
  if (action.type === "DELETE_MOVIE") {
    return state.filter(m => {
      if (m.id === action.id) {
        return false;
      }
      return true;
    });
  }
  return state;
};

const store = createStore(
  combineReducers({
    movies: moviesReducer,
    minRatingFilter: ratingFilterReducer,
    titleFilter: titleFilterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

movieList.forEach(el =>
  store.dispatch({
    type: "ADD_MOVIE",
    movie: {
      id: el.id,
      title: el.title,
      rate: el.rate,
      year: el.year,
      image: el.image,
      description: el.description
    }
  })
);

console.log(store.getState());

export default store;
