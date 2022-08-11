import MovieList from './MovieList'
import styles from './movieslist.module.scss'

export default function MoviesList({movies, title}) {
  return (
    <div className={`${styles.movieslist} container`}>
    <p className={styles.movieslist__title}>{title}</p>
    <div className={styles.movieslist__movies}>
    {movies && movies.map(movie => (
            <MovieList key={movie.id} movie={movie}/>
        ))}
    </div>
        
    </div>
  )
}
