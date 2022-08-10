import Link from "next/link"
import matter from "gray-matter"

const Blog = (props) => {
  return (
    <div>
      <h1>ぶろぐぺーじ</h1>
      {props.blogs.map((blog, index) =>
        <div key={index}>
          <h3>{blog.frontmatter.title}</h3>
          <p>{blog.frontmatter.date}</p>
          <Link href={`/blog/${blog.slug}`}>
            <a>Read More</a>
          </Link>
        </div>
      )}
    </div>
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
