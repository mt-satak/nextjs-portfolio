import Link from 'next/link'
import * as style from "../styles/Index.module.css"

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link href="/contact"><a>こんたくとに移動</a></Link>
    </>
  )
}

export default Index
