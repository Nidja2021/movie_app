import MovieHome from "./MovieHome"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './movieshome.module.scss'


export default function Movies({movies, title}) {
  
  return (
    <div className={styles.movies}>
      <div className="container">
      <h2 className={styles.movies__title}>{title}</h2>
            <Swiper
              // grabCursor={true}
              // spaceBetween={50}
              breakpoints={{
                  270: {
                    width: 270,
                    slidesPerView: 2,
                    spaceBetween: 120
                  },
                  420: {
                    width: 420,
                    slidesPerView: 3,
                    spaceBetween: 120
                  },
                  720: {
                    width: 720,
                    slidesPerView: 4,
                    spaceBetween: 150
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
        
    </div>
  )
}

