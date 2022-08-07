import MovieHome from "./MovieHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './movieshome.module.scss'


export default function Movies({movies, title}) {
  
  return (
    <div className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
            <Swiper
              grabCursor={true}
              spaceBetween={10}
              breakpoints={{
                  250: {
                    width: 365,
                    slidesPerView: 2
                  },
                  420: {
                    width: 420,
                    slidesPerView: 3
                  },
                  720: {
                    width: 720,
                    slidesPerView: 5
                  }
              }}
            >
              {movies.map(movie => (
                <SwiperSlide key={movie.id}>
                  <MovieHome movie={movie}/>
                </SwiperSlide> 
              ))}
            </Swiper>
    </div>
  )
}

