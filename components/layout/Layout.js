import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'

import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
        <Navbar />
        <main className={styles.layout__main}>{children}</main>
        <Footer />
    </div>
  )
}
