import Category from './Category'

import styles from './categories.module.scss'

export default function Categories({ data }) {
  return (
    <div className={styles.categories}>
        {data && data.map(category => (
            <Category data={category}/>
        ))}
    </div>
  )
}
