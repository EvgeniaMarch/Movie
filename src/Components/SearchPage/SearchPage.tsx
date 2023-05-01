import React, { useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './SearchPage.css';
import star from './star.png'
import blackStar from './blackStar.png'

function SearchPage() {
 
  const [search, setSearch] = useState<MovieTypes[]>([]);

 
    const [searchInput, setSearchInput] = useState('');
  
  


  const handleSearchMovie: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value)
  }

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> =(event) => {
    event.preventDefault()
    console.log(searchInput);

    fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${searchInput}?limit=20`, {
      headers: {
        'X-RapidAPI-Key': 'b43102ef80msh328d5408e36820fp143997jsn538b2bc282cf',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }, method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
      
        console.log(data.results);
        setSearch(data.results);
        
        
      });
      setSearchInput('')
    };
    console.log(search);
  
    const handleAddToFavorite = (MovieCard: MovieTypes) => {
    
   localStorage.setItem(JSON.stringify(MovieCard.id), JSON.stringify(MovieCard))
   const id = `${MovieCard.id}`
    const star = document.getElementById(id)
    const stars = document.querySelectorAll('.favorites')
    console.log(star);

    stars.forEach((star) => {
      if(MovieCard.id === star.id) {
      star.classList.toggle('hidden')
    }
    })
       
      }

  return (
    <>
    <div className='search'>
        <h2>Найти по ключевому слову</h2>
        <form onSubmit={handleFormSubmit} className='searchForm'>
            <input type="text" placeholder="search..." onChange={handleSearchMovie}/>
<button >Искать</button>
        </form>
      
    </div>
    <div className='movie-container'>
      {search.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className='favorites-container'>
          <img src={star} alt="zzz" className="favorites purplestar hidden" id={movie.id} onClick={() => handleAddToFavorite(movie)}/>
          <img src={blackStar} alt="zzz" className="favorites blackstar" onClick={() => handleAddToFavorite(movie)} id={movie.id}/>
          </div>
          <div>
            <b>{movie.titleText.text}</b>
          </div>
          {movie.primaryImage ? (<img
            width={200}
            src={movie.primaryImage.url}
            alt=""
            
          />) : (<img
            width={150}
            height={220}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/1200px-Question_mark.svg.png"
            alt="quest"
            
          />) }
          {movie.releaseDate && <p className="release">Дата релиза: {movie.releaseDate.year}-{movie.releaseDate.month}-{movie.releaseDate.day}</p>}
          <div>
      
          </div>
        </div>
      ))}

    </div>

    </>
    
  );
}

export default SearchPage;

