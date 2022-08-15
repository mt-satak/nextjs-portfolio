import matter from "gray-matter"

// 1ページあたりの記事表示件数
export const blogsPerPage = 5

export async function getAllBlogs() {
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)

      return {
        frontmatter: document.data,
        slug: slug,
      }
    })

    return data
  })(require.context('../data', true, /\.md$/))

  // idの降順にソートした全記事を取得
  const orderedBlogs = blogs.sort((a, b) => b.frontmatter.id - a.frontmatter.id)

  // 全記事数に対して必要なページ数を計算
  const numberPages = Math.ceil(orderedBlogs.length / blogsPerPage)

  const allBlogs = {
    orderedBlogs: JSON.parse(JSON.stringify(orderedBlogs)),
    numberPages,
  }

  return allBlogs
}

export async function getSingleBlog(context) {
  const { slug } = context.params
  const data = await import(`../data/${slug}.md`)
  const singleDocument = matter(data.default)

  return {
    singleDocument: singleDocument
  }
}
