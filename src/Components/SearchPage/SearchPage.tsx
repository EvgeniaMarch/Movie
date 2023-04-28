import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './SearchPage.css';

function SearchPage() {
  // массив коктейлей, который будет меняться - переменная состояния
  // const [drinks, setDrinks] = useState(initialDrinks);

  // так как TypeScript не знает, что это за массив, мы зададим тип Cocktail[] явно
  const [search, setSearch] = useState<MovieTypes[]>([]);

  // эти переменные состяния связаны с полями формы
  // async (params:type) => {
    const [searchInput, setSearchInput] = useState('');
  
  // const [drinkImage, setDrinkImage] = useState('');


  const handleSearchMovie: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value)
  }
  // если нужно сделать фетч при загрузке компонента
  useEffect(() => {
    // получаем с сервера массив коктейлей
    fetch(`https://moviesdatabase.p.rapidapi.com/titles/search/title/${searchInput}&page=${page}`, {
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': 'b43102ef80msh328d5408e36820fp143997jsn538b2bc282cf',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }, method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
      
        setSearch(data.results);
      });
  }, [searchInput, page]);


  // };

  return (
    <div className='search'>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="search..." onChange={handleSearchMovie}/>
<button >Искать</button>
        </form>
      
    </div>
  );
}

export default SearchPage;