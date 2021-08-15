import { GetStaticPaths, GetStaticProps } from "next"
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import Seo from "@/components/Seo"
import { client } from "@/libs/microcms/client"

import 'highlight.js/styles/night-owl.css';

const post = ({blog, ogpImage, highlightedBody}: any) => {
  return (
    <div>
      <Seo pageTitle={blog.title} pageImg={ogpImage} />
      <h1>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${highlightedBody}`,
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
  const data: any = await client.get({ endpoint: "blog", contentId: id as string });
  const $ = cheerio.load(data.body);    // data.bodyはmicroCMSから返されるリッチエディタ部分
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  
  const ogpImage = `https://res.cloudinary.com/yun8boo/image/upload/l_text:Sawarabi%20Gothic_45:${data.title},co_rgb:333,w_500,c_fit/v1628947657/ogp_qysqpg.png`

  return {
    props: {
      blog: data,
      ogpImage,
      highlightedBody: $.html()
    },
  };
};