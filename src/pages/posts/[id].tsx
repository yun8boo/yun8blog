import Seo from "@/components/Seo"
import { client } from "@/libs/microcms/client"
import { GetStaticPaths, GetStaticProps } from "next"

const post = ({blog}: any) => {
  const ogpImage = `https://res.cloudinary.com/yun8boo/image/upload/l_text:Sawarabi%20Gothic_45:${blog.title},co_rgb:333,w_500,c_fit/v1626787515/ogp_vfmvjh.png`
  return (
    <div>
      <Seo pageTitle={blog.title} pageImg={ogpImage} />
      <h1>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </div>
  )
}

export default post

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get<any>({endpoint: "blog"})
  const paths = data.contents.map((content: any) => `/posts/${content.id}`);
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const data = await client.get({ endpoint: "blog", contentId: id as string });

  return {
    props: {
      blog: data,
    },
  };
};