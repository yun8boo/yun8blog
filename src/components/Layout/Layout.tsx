import styles from '@/components/Layout/Layout.module.css'
import Header from "./Header"

const Layout = ({children}: any) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout