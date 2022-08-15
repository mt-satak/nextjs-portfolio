import Image from "next/image"
import Layout from "../../components/layout"
import PrevNext from "../../components/prevNext"
import ReactMarkdown from "react-markdown"
import Seo from "../../components/seo"
import * as style from "../../styles/singleBlog.module.scss"
import { getAllBlogs, getSingleBlog } from "../../utils/mdQueries"

const SingleBlog = ({ frontmatter, markdownBody, prev, next }) => {
  const { image, title, date, excerpt } = frontmatter

  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <Image src={image} alt="blog-image" height="500" width="1000" />
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{title}</h1>
          <p>{date}</p>
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
        </div>
      </div>

      <PrevNext prev={prev} next={next} />
    </Layout>
  )
}

export default SingleBlog

export async function getStaticPaths() {
  const { orderedBlogs } = await getAllBlogs()

  const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)

  return {
    paths: paths,
    fallback: false, // pathsに入っているslug以外のパス名に対しては404ページを表示するため
  }
}

export async function getStaticProps(context) {
  const { singleDocument } = await getSingleBlog(context)

  // 前に戻る/次に進むボタン押下時のページ遷移先idを取得
  const { orderedBlogs } = await getAllBlogs()
  const prev = orderedBlogs.filter(orderedBlog => {
    return orderedBlog.frontmatter.id === singleDocument.data.id - 1
  })
  const next = orderedBlogs.filter(orderedBlog => {
    return orderedBlog.frontmatter.id === singleDocument.data.id + 1
  })

  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
      prev,
      next,
    },
  }
}
