import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'





const Search = () => {

const navigate = useNavigate()
const [loading, setLoading] = useState(false)
const [moives, setMoives] = useState([])
const [movie, setMovie] = useState({})
const [searchterm, setSearchterm] = useState()

function onSearch() {
    fetchMoives(searchterm)
    
}

useEffect(() =>{
    fetchMoives(()=>searchterm(""))
},[])


async function fetchMoives(moiveId){
const {data} = await axios.get(`https://omdbapi.com/?s=${searchterm}&apikey=32588a38`)
console.log(data.Search)
setMoives(data.Search)


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
        onKeyPress={(event)=> event.key === 'Enter' && onSearch()}
        />
        <div className="glass__wrap">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      </div>
        <div id="search__title">
        <h2> Search Results for:</h2>
          </div>
          <div className= "books">
             <i className="fa-solid fa-spinner books__loading--spinner" ></i>

         
           </div>
              <select id="filter" defaultValue="sort">
            <option value="sort" disabled >Sort</option>
            <option value="Old_To_New">Old to New</option>
            <option value="New_to_Old">New to Old</option>
          </select>
      <div className="user-list">

{ searchterm === undefined ? 

 <div class="user-card">
            <div class="user-card__container">
              <h3>There are no Movies that match that title </h3>
                <p>Please Look at the search and try again</p>
      
            </div>
          </div> 
: 
moives.map((movie)=>(
            (
        <div className="user">
          <div className="user-card"
           onClick={()=> navigate(`/${movie.imdbID}`)}>
            <div className="user-card__container">
              <h3>{movie.Title}</h3>
                 <p><b>Year:</b> {movie.Year}</p>
                
                  <img src={movie.Poster} alt="" className="poster__img" />
      
            </div>
          </div>
        </div>
            )
        )
    ).slice(0,6)}
       
      </div>
    </div>
  </div>
  )
}

export default Search
