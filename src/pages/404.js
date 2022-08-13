import Layout from "../components/layout"

// TODO: テキストではなく画像で404表示させたい
const NotFoundPage = () => (
  <Layout>
    <div style={{textAlien: "center", height: "70vh"}}>
      <h1>404: Not Found</h1>
      <p>ページが見つかりません</p>
    </div>
  </Layout>
)

export default NotFoundPage
