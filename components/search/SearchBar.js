import React, { useEffect, useRef, useState } from 'react'
import MoviesList from '../movies/MoviesList'
import axios from 'axios'
import {API_KEY} from '../../utils/util'
import styles from './search.module.scss'

export default function SearchBar() {
    const inputRef = useRef()
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState([])
    const URL = `https://api.themoviedb.org/3/search/movie`
 
    const getMovies = async () => {
        const {data} = await axios.get(URL, {
            params: {
                api_key: API_KEY,
                query: input || 'thor',
                page: 1
            }
        })
        setMovies(data.results)
    }

    useEffect(() => {
        getMovies()
        console.log(movies);
    }, [input])

    const handleMovie = (e) => {
        setInput(inputRef.current.value)
        console.log(input);
    }

  return (
    <div className={`${styles.search} container`}>
        <h1 className={styles.search__text}>Search Movie</h1>
        <input onChange={handleMovie} ref={inputRef} type="text" placeholder='Search movie...' className={styles.search__input}/>
        <MoviesList movies={movies}/>
    </div>
  )
}

