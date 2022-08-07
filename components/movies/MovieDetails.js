import Image from "next/image"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './moviedetails.module.scss'

export default function MovieDetails({movie, credits}) {
    const backdrop_path = 'https://image.tmdb.org/t/p/w1280'
    const CAST_BASE_URL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
    const credit_slice = credits?.slice(0, 10)
  return (
    
    <div className={styles.movieDetail}>
        <div className={styles.movieDetail__image}>
            <Image 
                src={backdrop_path + movie.backdrop_path} 
                alt={movie.title}
                layout='fill'
                quality={100}
                objectFit='cover'
                className={styles.movieDetail__image__img}
            />
        </div>
        <div className={styles.movieDetail__description}>
            <h1>{movie.title}</h1>
            <div className={styles.movieDetail__description__genres}>
                {movie?.genres?.map(genre => (
                    <p key={genre.id}>{genre.name}</p>
                ))}
            </div>
            <p className={styles.movieDetail__description__rating}>{movie.vote_average.toFixed(1)}</p>
            <p className={styles.movieDetail__description__overview}>{movie.overview}</p>
            <div className={styles.movieDetail__description__casts}>
                <h3 className={styles.movieDetail__description__casts__text}>casts</h3>
                <Swiper
                    // grabCursor={true}
                    // spaceBetween={5}
                    className={styles.movieDetail__description__casts__swiper}
                    
                    breakpoints={{
                        350: {
                            width: 350,
                            slidesPerView: 3
                        },
                        640: {
                            width: 640,
                            slidesPerView: 4
                        },
                        748: {
                            width: 748,
                            slidesPerView: 6
                        },
                        960: {
                            width: 960,
                            slidesPerView: 8
                        }
                    }}
                >
                    {credit_slice?.map(cast => (
                        <SwiperSlide key={cast.id}>
                            <div className={styles.movieDetail__description__casts__cast}>
                                <Image 
                                    src={cast.profile_path ? CAST_BASE_URL + cast.profile_path : CAST_BASE_URL + ''}
                                    alt={cast.name}
                                    width={100}
                                    height={100}
                                    quality={100}
                                    objectFit='cover'
                                    className={styles.movieDetail__description__casts__cast__img}
                                />
                                <h6>{cast.name}</h6>
                            </div>
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>

            <Link href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
                <a target="_blank">Go to IMDB</a>
            </Link>

        </div>
    </div>
  )
}
