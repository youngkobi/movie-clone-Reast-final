import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s_icon from "../assets/spyglass-icon.webp";

const Search = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState();

  function onSearch() {
    fetchMovies(searchterm);
  }

  function filterBooks(filter) {
    if (filter === "Old_To_New") {
      const sortedMovies = [...movies].sort(
        (a, b) => parseInt(a.year) - parseInt(b.year)
      );
      setMovies(sortedMovies);
    } else if (filter === "New_to_Old") {
      const sortedMovies = [...movies].sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
      setMovies(sortedMovies);
    }
  }

  useEffect(() => {
    fetchMovies(() => searchterm(""));
  }, []);

  async function fetchMovies(movieId) {
    setLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchterm}&apikey=32588a38`
    );
    console.log(data.Search);
    setMovies(data.Search);
    setLoading(false);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="searchbar">
          <div className="input__wrap">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie Title"
              id="movie-search-box"
              value={searchterm}
              onChange={(event) => setSearchterm(event.target.value)}
              onKeyPress={(event) => event.key === "Enter" && onSearch()}
            />
          </div>
          <img
            src={s_icon}
            alt=""
            width={20}
            onClick={() => onSearch()}
            className="search_icon"
          />
        </div>
        <div id="search__title">
          <h2> Search Results for: {searchterm}</h2>
        </div>
        <div className="books">
          <i className="fa-solid fa-spinner books__loading--spinner"></i>
        </div>
        <select
          id="filter"
          defaultValue="sort"
          onChange={(event) => filterBooks(event.target.value)}
        >
          <option value="sort" disabled>
            Sort
          </option>
          <option value="Old_To_New">Old to New</option>
          <option value="New_to_Old">New to Old</option>
        </select>
        <div className="user-list">
          {loading
            ? new Array(6).fill(0).map((element, index) => (
                <div className="user-card" key={index}>
                  <div className="user-card__container">
                    <h3>Loading</h3>
                    <p>Please Wait</p>
                  </div>
                </div>
              ))
            : movies
                .map((movie, index) => (
                  <div className="user" key={movie.imdbID}>
                    <div
                      className="user-card"
                      onClick={() => navigate(`/${movie.imdbID}`)}
                    >
                      <div className="user-card__container">
                        <h3>{movie.Title}</h3>
                        <p>
                          <b>Year:</b> {movie.Year}
                        </p>

                        <img
                          src={movie.Poster}
                          alt=""
                          className="poster__img"
                        />
                      </div>
                    </div>
                  </div>
                ))
                .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};

export default Search;
