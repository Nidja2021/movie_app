import MovieList from './MovieList'
import styles from './movieslist.module.scss'

export default function MoviesList({movies}) {
  return (
    <div className={styles.movieslist}>
        {movies && movies.map(movie => (
            <MovieList key={movie.id} movie={movie} className={styles.movieslist__movie}/>
        ))}
    </div>
  )
}
