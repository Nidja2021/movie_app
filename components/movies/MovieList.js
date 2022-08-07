import Image from 'next/image'
import {useRouter} from 'next/router'

import styles from './movielist.module.scss'

export default function MovieList({ movie }) {
    const router = useRouter()
    const BASE_URL = 'https://image.tmdb.org/t/p/w1280'

    const handleMovieId = () => {
      router.push(`/movie/${movie.id}`)
    }

  return (
    <div onClick={handleMovieId} className={styles.movie}>
        <Image
                src={BASE_URL + movie.poster_path}
                alt={`${movie.title}`}
                // width={250}
                // height={400}
                layout='fill'
                // objectFit='cover'
            />
        
        <div className={styles.movie__description}>
          <p className={styles.movie__description__title}>{movie.title}</p>
        </div>
    </div>
  )
}
