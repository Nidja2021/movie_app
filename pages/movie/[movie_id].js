import axios from 'axios'
import MovieDetails from '../../components/movies/MovieDetails';
import {API_KEY} from '../../utils/util'

function MovieDetail({movie, credits, videos}) {
// console.log('movie', movie);
// console.log('credits', credits);
console.log('videos', videos);
  return (
    // <p>hello</p>
    <MovieDetails movie={movie} credits={credits} videos={videos}/>
  )
}

export default MovieDetail

export async function getServerSideProps(context) {
    const { movie_id } = context.query;

    const [movieRes, creditsRes, videosRes] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}`),
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${API_KEY}`)
    ])

    const [movie, credits, videos] = await Promise.all([
        movieRes.json(),
        creditsRes.json(),
        videosRes.json()
    ])

    const trailerVideos = videos.results.filter(video => video.type === 'Trailer')
  
    return {
      props: {
        movie: movie || null,
        credits: credits.cast || null,
        videos: trailerVideos || null
      },
    };
  }