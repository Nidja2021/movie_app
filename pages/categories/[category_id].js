import axios from "axios";
import MoviesList from "../../components/movies/MoviesList";
import { API_KEY } from "../../utils/util";

export default function Category({ data }) {
//   console.log(data);
  return (
    <MoviesList movies={data} title="Popular Movies"/>
  )
}

// export async function getStaticPaths() {
//   const {data} = await axios.get(process.env.BASE_URL + 'genre/movie/list', {
//       params: {
//           api_key: process.env.API_KEY
//       }
//   })

//   const paths = data.genres.map(category => {
//       return {
//           params: {category_id: category.id.toString()}
//       }
//   })

//   return {
//       paths,
//       fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const id = context.params.category_id

//   const url = 'https://api.themoviedb.org/3/discover/movie'

//   const {data} = await axios.get(url, { 
//       params: {
//           api_key: process.env.API_KEY,
//           sort_by: 'popularity.desc',
//           page: 1,
//           with_genres: id
//       }
//   })

//   return {
//       props: {
//           data: data.results
//       }
//   }
// }

export async function getServerSideProps(context) {
    const { category_id } = context.query;
    
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
          data: data.results
      }
    }
}