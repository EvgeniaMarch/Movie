import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './MainPage.css';

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
    // получаем с сервера массив коктейлей
    fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming')
      .then((response) => response.json())
      .then((data) => {
        // кладём массив в переменную состояния drinks
        setMovies(data.results);
      });
  }, []);

  // };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <div>
            <b>{movie.titleText.text}</b>
          </div>
          <img
            width={movie.primaryImage.width}
            src={movie.primaryImage.url}
            alt=""
          />
          <div>
            {/* в случае если нужно что-то передать в функцию-обработчик, то делаем колбэк
            <button type="button" onClick={() => handleRemoveDrink(drink)}>
              удалить
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainPage;
