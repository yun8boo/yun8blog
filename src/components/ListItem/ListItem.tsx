import styles from '@/styles/components/ListItem.module.css'

interface Props {
  content: any
}

const ListItem = ({content}: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={content.thumbnail.url} />
      <div className={styles.wrapper}>
        <p>{content.title}</p>
        <time>{content.createdAt}</time>
      </div>
    </div>
  )
}

export default ListItem