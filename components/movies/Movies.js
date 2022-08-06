import Movie from "./Movie"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './movies.module.scss'

export default function Movies({movies, title}) {
  
  return (
    <div className={styles.movies}>
        <h1>{title}</h1>
        <div className={styles.movies__row}>
            <Swiper
              grabCursor={true}
              spaceBetween={10}
              slidesPerView={2}
            >
              {movies.map(movie => (
                <SwiperSlide key={movie.id}>
                  <Movie movie={movie}/>
                </SwiperSlide> 
              ))}
            </Swiper>
        </div>
        
        
        
    </div>
  )
}

