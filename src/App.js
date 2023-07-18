import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import { Routes,Route } from 'react-router-dom';

const API_URL = 'https://www.omdbapi.com/?apikey=56c5892d';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        // const response = await fetch(`https://www.omdbapi.com/?apikey=56c5892d&s=spiderman`);
        const data = await response.json();
        setMovies(data.Search);
        // console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    let bookMarkList = {}




    return (
        <div className='app'>
            <h1>MovieMania</h1>
            <Routes>
                <Route path="/">
                    <div>
                    <div className='search'>
                        <input
                            placeholder="Search for movies"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <img
                            src={SearchIcon}
                            alt='search'
                            onClick={() => (searchMovies(searchTerm))}
                        />
                    </div>
                    {
                        movies?.length > 0 ? (
                            <div className="container">
                                {
                                    movies.map((movie) => (
                                        <MovieCard movie={movie} bookMark={bookMarkList} />
                                    ))}
                            </div>
                        ) : (
                            <div className="empty">
                                <h2>no movie</h2>
                            </div>
                        )}
                        </div>
                </Route>
            </Routes>
        </div>
    );

};


export default App;