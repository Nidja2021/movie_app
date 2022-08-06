import axios from 'axios'

export default function MovieDetail({data}) {
    console.log(data);
    const backdrop_path = 'https://image.tmdb.org/t/p/w1280'
  return (
    <>
        <img 
        src={backdrop_path + data.poster_path} 
        alt={data.title}
        width={500}
        height={400}
        />
        <h2>{data.title}</h2>
        {/* {data.genres.map(genre => (
            <h4>{genre.name}</h4>
        ))} */}
    </>
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
    
    // const url = 'https://api.themoviedb.org/3/find/' + id
    const url = 'https://api.themoviedb.org/3/movie/' + id

    const {data} = await axios.get(url, {
        params: {
            api_key: process.env.API_KEY,
            external_source: 'imdb_id'
        }
    })

    return {
        props: {
            data
        }
    }
}