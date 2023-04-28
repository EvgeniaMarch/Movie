import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './OneMovie.css';

function OneMovie({movie}) {
  

  return (
  
        <div key={movie.id} className="movie-card">
          <div>
            <b>{movie.titleText.text}</b>
          </div>
          {movie.primaryImage && <img
            width={200}
            src={movie.primaryImage.url}
            alt=""
            
          />}
          <p>Дата релиза: {movie.releaseDate.year}-{movie.releaseDate.month}-{movie.releaseDate.day}</p>
          <div>
            {/* в случае если нужно что-то передать в функцию-обработчик, то делаем колбэк
            <button type="button" onClick={() => handleRemoveDrink(drink)}>
              удалить
            </button> */}
          </div>
        </div>
     
   
  );
}

export default OneMovie;