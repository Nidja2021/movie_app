import axios from "axios";
import MoviesList from "../../components/movies/MoviesList";
import { API_KEY } from "../../utils/util";

const genres = [
  {id: 28, name: "Action"},
  {id: 12, name: "Adventure"},
  {id: 16, name: "Animation"},
  {id: 35, name: "Comedy"},
  {id: 80, name: "Crime"},
  {id: 99, name: "Documentary"},
  {id: 18, name: "Drama"},
  {id: 10751, name: "Family"},
  {id: 14, name: "Fantasy"},
  {id: 36, name: "History"},
  {id: 27, name: "Horror"},
  {id: 10402, name: "Music"},
  {id: 9648, name: "Mystery"},
  {id: 10749, name: "Romance"},
  {id: 878, name: "Science Fiction"},
  {id: 10770, name: "TV Movie"},
  {id: 53, name: "Thriller"},
  {id: 10752, name: "War"},
  {id: 37, name: "Western"}
]

export default function Category({ data, title }) {
  return (
    <MoviesList movies={data} title={title} />
  )
}

export async function getServerSideProps(context) {
    const { category_id } = context.query;
    let title = ''
    genres.map(genre => {
      if (genre.id == category_id) {
        title = genre.name
      }
    })
    
    const url = 'https://api.themoviedb.org/3/discover/movie'

    const {data} = await axios.get(url, { 
      params: {
          api_key: API_KEY,
          sort_by: 'popularity.desc',
          page: 1,
          with_genres: category_id
      }
    })

    return {
      props: {
          data: data.results,
          title
      }
    }
}