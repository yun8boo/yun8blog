interface Props {
  content: any
}

const ListItem = ({content}: Props) => {
  const ogpImage = `https://res.cloudinary.com/yun8boo/image/upload/l_text:Sawarabi%20Gothic_45:${content.title},co_rgb:333,w_500,c_fit/v1628947657/ogp_qysqpg.png`
  return (
    <div className='shadow-md rounded-md w-full'>
      <div className='w-full sm:h-200px'>
        <img className='object-cover rounded-tl-md rounded-tr-md w-full h-full ' src={ogpImage} />
      </div>
      <div className='p-5'>
        <p>{content.title}</p>
      </div>
    </div>
  )
}

export default ListItem