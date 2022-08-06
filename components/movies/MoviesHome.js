import Movie from "./MovieHome"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './movieshome.module.scss'


export default function Movies({movies, title}) {
  
  return (
    <div className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
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

