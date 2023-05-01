import React, { useEffect, useState } from 'react';
import MovieTypes from '../../types/MovieTypes';
import './MainPage.css';
import star from './star.png'
import SearchPage from '../SearchPage/SearchPage';
import MoviesList from '../MoviesList/MoviesList';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
const pageNumbers = [1,2,3,4,5,6,7,8,9,10]



function MainPage() {

type pageType = 'search' | 'favorites' | 'list'
const [pageChange, setPageChange] = useState('list')
  
  
let content;

if (pageChange === 'list') {
  content = <MoviesList />
} else if (pageChange === 'search') {
  content = <SearchPage />
} else if (pageChange === 'favorites') {
  content = <FavoritesPage />
}

const changePageToMain = () => {
  setPageChange('list')
}

const changePageToSearch =() => {
  setPageChange('search')
}

const changePageToFavorites =() => {
  setPageChange('favorites')
}

 

  return (
    <div className='main'>
      <div className="container">
        <div className="navigate-buttons">
          <button className='navigate-button' onClick ={changePageToMain}>Главная</button>
          <button className='navigate-button' onClick ={changePageToSearch}>Поиск</button>
          <button className='navigate-button' onClick ={changePageToFavorites}>Избранное</button>
          
        </div>
       
   
</div>
{/* {pageChange === 'list' ? <MoviesList/> : 'search' ? <SearchPage /> : 'favorites'? <FavoritesPage/> }


{pageChange === 'favorites' ? <MoviesList/> : <SearchPage />} */}
{content}
    </div>
  );
}

export default MainPage;
