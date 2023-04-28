import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './MainPage.css';

const pageNumbers = [1,2,3,4,5,6,7,8,9,10]

function MainPage() {
  // массив коктейлей, который будет меняться - переменная состояния
  // const [drinks, setDrinks] = useState(initialDrinks);

  // так как TypeScript не знает, что это за массив, мы зададим тип Cocktail[] явно
  const [movies, setMovies] = useState<MovieTypes[]>([]);

  // эти переменные состяния связаны с полями формы
  // const [drinkTitle, setDrinkTitle] = useState('');
  // const [drinkImage, setDrinkImage] = useState('');

  // если нужно сделать фетч при загрузке компонента
  useEffect(() => {

    // `https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=20&page=${page}`
    // получаем с сервера массив коктейлей
    fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=20', {
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'b43102ef80msh328d5408e36820fp143997jsn538b2bc282cf',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }, method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // кладём массив в переменную состояния drinks
        setMovies(data.results);
      });
  }, []);
console.log(movies);

  // };

  return (
    <div className='main'>

    
    <div className='movie-container'>
      {movies.map((movie) => (
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
      ))}

    </div>
    <div className="pagination">
{pageNumbers.map((page) => (
  <div className='page-number'>{page}</div>
))}
</div>
    </div>
  );
}

export default MainPage;
