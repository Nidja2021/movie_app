import Category from './Category'

import styles from './categories.module.scss'

export default function Categories({ data }) {
  return (
    <div className={styles.categories}>
    <h1 className={styles.categories__title}>Categories</h1>
        {data && data.map(category => (
            <Category key={category.id} data={category}/>
        ))}
    </div>
  )
}
