import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'><a className={styles.navbar__links}>home</a></Link>
      <Link href='/categories'><a className={styles.navbar__links}>categories</a></Link>
    </nav>
  )
}
