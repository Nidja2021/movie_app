import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

import styles from './movie.module.scss'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Movie({ movie }) {
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
        <div className={styles.movie__image}>
        <Image
                src={movie_data.image}
                alt={`${movie_data.title}`}
                width={300}
                height={400}
                // layout='fill'
                objectFit='cover'
                className={styles.movie__image__img}
            />
        </div>
        
        <div className={styles.movie__description}>
          <p className={styles.movie__description__title}>{movie_data.title}</p>
          {/* <p className={styles.movie__description__rating}>Rating: {movie.vote_average}</p> */}
        </div>
    </div>
  )
}
