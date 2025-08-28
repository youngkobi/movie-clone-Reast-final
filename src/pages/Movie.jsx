import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetchMoive();
  }, []);

  async function fetchMoive(moiveId) {
    const {data} = await axios.get(
      `https://omdbapi.com/?apikey=32588a38&i=${id}`
    );
    console.log(data);
    setMovie(data);
  }

  return (
    <div> 
      <div className="result-grid">
        <div className="movie-poster">
          <img src={movie.Poster} alt="" />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <ul className="movie-misc-info">
            <li className="year"> Year: {movie.Year} </li>
            <li className="rated">Ratings: {movie.Rated} </li>
            <li className="released"> Released {movie.Released}</li>
          </ul>
          <p className="genre">{movie.Genre}</p>
          <p className="writer">
            <b>Write :</b> {movie.Writer}
          </p>
          <p className="actors">
            <b>Actors:</b> {movie.Actors}
          </p>
          <p className="plot"> {movie.Plot}</p>
          <p className="language">
            <b>language</b> {movie.Language}
          </p>
          <p className="awards"> {movie.Awards}
          </p>
        </div>
      </div>
   
    </div>
  );
};
export default Movie;
