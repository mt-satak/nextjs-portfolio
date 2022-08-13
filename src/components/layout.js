import Header from "./header"
import Footer from "./footer"

// NOTE: アロー関数の引数、{ children } は props.choldrenの意
// NOTE: → propsで受け取ってもchildrenしか使わないため分割代入による取得に変更
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
