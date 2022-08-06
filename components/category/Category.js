import { useRouter } from 'next/router'

import styles from './category.module.scss'

export default function Category({ data }) {
    const router = useRouter()

    const handleCategoryId = () => {
        router.push(`/categories/${data.id}`)
    }
  return (
    <div className={styles.category} onClick={handleCategoryId}>{data.name}</div>
  )
}
