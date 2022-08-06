import Image from 'next/image'
import {useRouter} from 'next/router'

import styles from './movielist.module.scss'

export default function MovieList({ movie }) {
    const router = useRouter()
    const BASE_URL = 'https://image.tmdb.org/t/p/w1280'
    
    const movie_data = {
        id: movie.id,
        title: movie.title,
        image: BASE_URL + movie.poster_path,
        rating: movie.vote_average
    }

    const handleMovieId = () => {
      router.push(`/movie/${movie_data.id}`)
    }

  return (
    <div onClick={handleMovieId} className={styles.movie}>
        <Image
                src={movie_data.image}
                alt={`${movie_data.title}`}
                // width={250}
                // height={400}
                layout='fill'
                // objectFit='cover'
            />
        
        <div className={styles.movie__description}>
          <p className={styles.movie__description__title}>{movie_data.title}</p>
        </div>
    </div>
  )
}
