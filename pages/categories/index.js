import axios from 'axios'
import Categories from '../../components/category/Categories';

export default function CategoriesData({data}) {
    console.log(data);
  return (
    <>
        <Categories data={data}/>
    </>
  )
}

export async function getStaticProps(context) {
    const BASE_URL = process.env.BASE_URL
    // const url = "
    
    const {data} = await axios.get(BASE_URL + 'genre/movie/list', {
        params: {
            api_key: process.env.API_KEY
        }
    })

    return {
        props: {
            data: data.genres
        }
    }
}