import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './MoviesList.css';
import star from './star.png'
import blackStar from './blackStar.png'
import { forEachChild } from 'typescript';

const pageNumbers = [1,2,3,4,5,6,7,8,9,10]



function MoviesList() {
  


  const [movies, setMovies] = useState<MovieTypes[]>([]);
const [ page, setPage] = useState(1)
 
  const handleChangePage = (toPage: number) => {
    
    setPage(toPage);
  };
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
    // star?.classList.toggle('hidden')
    // star.dataset.classList.toggle('hidden')
    // star?.classList.toggle('hidden')
    
    // const purplestar = document.querySelector('.purplestar')
    // star?.classList.add('hidden')
    // purplestar?.classList.remove('.hidden')
   }
  
  useEffect(() => {

 fetch(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=20&page=${page}`, {
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'b43102ef80msh328d5408e36820fp143997jsn538b2bc282cf',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }, method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        
        setMovies(data.results);
      });
  }, [page]);
console.log(movies);




  return (
    
        <>
        <div className='movie-container'>
      {movies.map((movie) => (
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
          <p className="release">Дата релиза: {movie.releaseDate.year}-{movie.releaseDate.month}-{movie.releaseDate.day}</p>
          <div>
            {/* в случае если нужно что-то передать в функцию-обработчик, то делаем колбэк
            <button type="button" onClick={() => handleRemoveDrink(drink)}>
              удалить
            </button> */}
          </div>
        </div>
      ))}

    </div>
    <div className="pagination">
      {pageNumbers.map((page, index) => (
        <div key={index} className='page-number' onClick={() => handleChangePage(page)}>{page}</div>
      ))}
    </div>
        </>
        


  );
}

export default MoviesList;