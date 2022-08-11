import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import Image from 'next/image'
import {useRouter} from 'next/router'
import styles from './carousel.module.scss'

SwiperCore.use([Autoplay]);

export default function Carousel({movies}) {
    const router = useRouter();

    const movies_slice = movies.slice(0, 5)
    const BASE_URL = 'https://image.tmdb.org/t/p/w1280'

  return (
    <div className={styles.carousel}>
        <Swiper
            grabCursor={true}
            spaceBetween={0}
            autoplay={{delay: 3000}}
        >
            {movies_slice.map(movie => (
            <SwiperSlide key={movie.id}>
                <div className={styles.carousel__image}>
                    <Image 
                        src={BASE_URL + movie.backdrop_path}
                        alt={movie.title}
                        layout='fill'
                        quality={100}
                        className={styles.carousel__image__img}
                    />
                    <div className={styles.carousel__image__description}>
                        <h2 className={styles.carousel__image__description__title}>{movie.title}</h2>
                        <p className={styles.carousel__image__description__overview}>{movie.overview}</p>
                        <button onClick={() => router.push(`/movie/${movie.id}`)} className={styles.carousel__image__description__button}>See movie</button>
                    </div>
                </div>
                
            </SwiperSlide> 
            ))}
        </Swiper>
    </div>
  )
}
