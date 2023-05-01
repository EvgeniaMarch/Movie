import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './FavoritesPage.css';
//import star from './star.png'

function FavoritesPage() {
 

const [favorites, setFavorites] = useState <MovieTypes[]>([])

useEffect(()=> {
for(let i =0; i < localStorage.length; i++) {
  
    let iu = (localStorage.key(i))
    if(iu) {
      let a = localStorage.getItem(iu)
      if(a) {
        let b = JSON.parse(a)
        setFavorites((prev) => [...prev, b])
      }
      
    }
}

  }, [])


  const handleRemoveMovie = (movie: MovieTypes) => {
    // удаляем коктейль из массива
    window.localStorage.removeItem(`"${movie.id}"`)
    setFavorites(favorites.filter((x) => x !== movie));
    

  };
  


  return (
    <>
    <div className='favorites'>
        <h2>Избранное</h2>
       
        <div className='movie-container'>
      {favorites.map((movie) => (
        <div key={movie.id} className="movie-card" data-id={movie.id}>
          {/* <div className='favorites-container'><img src={star} alt="zzz" className="favorites" onClick={() => handleAddToFavorite(movie)}/></div> */}
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
            {/* в случае если нужно что-то передать в функцию-обработчик, то делаем колбэк */}
            <button type="button" onClick={() => handleRemoveMovie(movie)}>
              удалить
            </button>
          </div>
        </div>
      ))}

    </div>
    </div>
   

    </>
    
  );
}

export default FavoritesPage;