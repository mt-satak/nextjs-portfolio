import Link from "next/link"
import Image from "next/image"
import Layout from "../components/layout"
import matter from "gray-matter"
import * as style from "../styles/blog.module.scss"

const Blog = (props) => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Blog</h1>
          <p>エンジニアの日常生活をお届けします</p>
          {props.blogs.map((blog, index) => {
            return(
              <div key={index} className={style.blogCard}>
                <div className={style.textContainer}>
                  <h3>{blog.frontmatter.title}</h3>
                  <p>{blog.frontmatter.excerpt}</p>
                  <p>{blog.frontmatter.date}</p>
                  <Link href={`/blog/${blog.slug}`}><a>Read More</a></Link>
                </div>
                <div className={style.cardImg}>
                  <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} />
                </div>  
              </div>
            )}
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  // mdファイル記事データの読み込み
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/,'').slice(0,-3)
      const value = values[index]
      const document = matter(value.default)

      return {
        frontmatter: document.data,
        slug: slug,
      }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  /**
   * 記事の並びを作成順(idの降順)にソートする関数
   */
  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id
  })

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(orderedBlogs)),
    },
  }
}
