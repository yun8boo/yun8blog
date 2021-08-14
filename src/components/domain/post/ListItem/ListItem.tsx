import styles from '@/components/domain/post/ListItem/ListItem.module.css'

interface Props {
  content: any
}

const ListItem = ({content}: Props) => {
  const ogpImage = `https://res.cloudinary.com/yun8boo/image/upload/l_text:Sawarabi%20Gothic_45:${content.title},co_rgb:333,w_500,c_fit/v1628947657/ogp_qysqpg.png`
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img className={styles.thumbnail} src={ogpImage} />
      </div>
      <div className={styles.wrapper}>
        <p>{content.title}</p>
      </div>
    </div>
  )
}

export default ListItem