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
    <> 
    { movie.map(()=> (
      <div className="result-grid">
        <div className="movie-poster">
          <img src="medium-cover.jpg" alt="" />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">Guardins of the galaxy vol.2</h3>
          <ul className="movie-misc-info">
            <li className="year"> Year:2017</li>
            <li className="rated">Ratings: PG-13</li>
            <li className="released"> Released 05 May</li>
          </ul>
          <p className="genre">Action,adventure comdedy</p>
          <p className="writer">
            <b>Write :</b> James Gunn, Don abnett, andy Lanning
          </p>
          <p className="actors">
            <b>Actors:</b> Chriss Pratt, Zoe Saldana, Dave{" "}
          </p>
          <p className="plot">THe Guardins struggle to keep together</p>
          <p className="language">
            <b>language</b>ENglish
          </p>
          <p className="awards">
            {" "}
            <i className="fa-solid fa-award"></i> Nominated for 1 oscar
          </p>
        </div>
      </div>
      ))
      }
   
    </>
  );
};
export default Movie;
