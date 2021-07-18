import Link from "next/link"
import styles from '@/components/Layout/Layout.module.css'

const Layout = ({children}: any) => {
  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <a>🤖 yun8blog</a>
        </Link>
        </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout