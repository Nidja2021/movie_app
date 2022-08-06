import axios from 'axios'
import MovieDetails from '../../components/movies/MovieDetails';

export default function MovieDetail({movie, credits}) {
    console.log(movie);
    console.log(credits);
    
  return (
    <MovieDetails movie={movie} credits={credits} />
  )
}

export async function getStaticPaths() {
    const {data} = await axios.get(process.env.BASE_URL + process.env.DISCOVER_MOVIE_URL, {
        params: {
            api_key: process.env.API_KEY
        }
    })

    const paths = data.results.map(movie => {
        return {
            params: {movie_id: movie.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const id = context.params.movie_id

    const API_KEY = process.env.API_KEY

    const [movieRes, creditsRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    ])

    const [movie, credits] = await Promise.all([
        movieRes.json(),
        creditsRes.json()
    ])

    return {
        props: {
            movie,
            credits: credits.cast
        }
    }
}