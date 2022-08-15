import matter from "gray-matter"

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

  const orderedBlogs = blogs.sort((a, b) => b.frontmatter - a.frontmatter)

  const allBlogs = {
    orderedBlogs: JSON.parse(JSON.stringify(orderedBlogs))
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