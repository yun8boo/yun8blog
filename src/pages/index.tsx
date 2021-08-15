import { GetStaticProps } from 'next'
import Link from 'next/link'
import { client } from '@/libs/microcms/client'
import ListItem from '@/components/domain/post/ListItem/ListItem';

export default function Home({ contents }: {contents: any[]}) {  
  return (
    <div>
      <ul className='block sm:flex'>
        {contents.map(content => {
          return (
            <li key={content.id} className='w-full p-2 sm:w-1/3'>
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