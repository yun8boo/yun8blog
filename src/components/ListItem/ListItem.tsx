import styles from '@/components/ListItem/ListItem.module.css'

interface Props {
  content: any
}

const ListItem = ({content}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img className={styles.thumbnail} src={content.thumbnail.url} />
      </div>
      <div className={styles.wrapper}>
        <p>{content.title}</p>
      </div>
    </div>
  )
}

export default ListItem