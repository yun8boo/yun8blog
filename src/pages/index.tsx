import { GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/libs/microcms/client'
import styles from '@/styles/Index.module.css'
import ListItem from '@/components/ListItem/ListItem';

export default function Home({ contents }: {contents: any[]}) {  
  console.log(contents);
  return (
    <div className={styles.container}>
      <ul>
        {contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/posts/${encodeURIComponent(content.id)}`}>
                <a>
                  <ListItem content={content} />
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<any>({endpoint: 'blog'})
  return {
    props: {
      contents: data.contents
    }
  }
}