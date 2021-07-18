import { GetStaticProps } from 'next'
import { client } from '@/libs/microcms/client'
import styles from '@/styles/Index.module.css'

export default function Home(props: any) {
  console.log(props);
  
  return (
    <div className={styles.container}>
      <p>blog</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'blog'})
  return {
    props: {
      data,
      blog: data.contents
    }
  }
}