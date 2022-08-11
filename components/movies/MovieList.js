import Image from 'next/image'
import {useRouter} from 'next/router'

import styles from './movielist.module.scss'

export default function MovieList({ movie }) {
    const router = useRouter()
    
    const BASE_URL = 'https://image.tmdb.org/t/p/w1280'
    const image_path = movie.poster_path ? BASE_URL + movie.poster_path : '/assets/error_pic.png'

    const handleMovieId = () => {
      router.push(`/movie/${movie.id}`)
    }

  return (
    <div onClick={handleMovieId} className={styles.movie}>
    <div className={styles.movie__image}>
      <Image
            src={image_path}
            alt={movie.title}
            layout='fill'
        />
    </div>
      <p className={styles.movie__title}>{movie.title}</p>
    </div>
  )
}
