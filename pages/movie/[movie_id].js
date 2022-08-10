import axios from 'axios'
import MovieDetails from '../../components/movies/MovieDetails';
import {API_KEY} from '../../utils/util'

function MovieDetail({movie, credits}) {
// console.log('movie', movie);
// console.log('credits', credits);
  return (
    // <p>hello</p>
    <MovieDetails movie={movie} credits={credits} />
  )
}

export default MovieDetail

export async function getServerSideProps(context) {
    const { movie_id } = context.query;

    const [movieRes, creditsRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`)
    ])

    const [movie, credits] = await Promise.all([
        movieRes.json(),
        creditsRes.json()
    ])
  
    return {
      props: {
        movie: movie || null,
        credits: credits.cast || null,
      },
    };
  }