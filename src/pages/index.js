import Link from 'next/link'
import Image from 'next/image'

const Index = () => {
  return (
    <>
      <div>
        <Image src="/images/index-hero.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
        <div>
          <h1>I'm Abe Hiroki!</h1>
          <h3>JavaScriptDeveloper</h3>
        </div>
      </div>

      <div>
        <div>
          <div>
            <h2>JavaScriptNerd</h2>
            <p>LoremIpsumissimplydummytextoftheprintingandtypesettingindustry.LoremIpsumhasbeentheindustry'sstandarddummytexteversincethe1500s,whenanunknownprintertookagalleyoftypeandscrambledittomakeatypespecimenbook.Ithassurvivednotonlyfivecenturies,butalsotheleapintoelectronictypesetting,remainingessentiallyunchanged.Itwaspopularisedinthe1960swiththereleaseofLetrasetsheetscontainingLoremIpsumpassages,andmorerecentlywithdesktoppublishingsoftwarelikeAldusPageMakerincludingversionsofLoremIpsum.</p>
          </div>
          <Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />
        </div>

        <div>
          <h2>Skills</h2>
          <div>
            <div>
              <img src="/images/javascript.svg" alt="javascript"/>
              <span>JavaScript/10years</span>
            </div>
            
            <div>
              <img src="/images/react.svg" alt="react"/>
              <span>React/5years</span>
            </div>

            <div>
              <img src="/images/gatsby.svg" alt="gatsby"/>
              <span>Gatsby/3years</span>
            </div>

            <div>
              <img src="/images/next.svg" alt="next"/>
              <span>Next.JS/3years</span>
            </div>
          </div>
        </div>

        <div>
          <Link href="/contact"><a>MakeItHappen!</a></Link>
        </div>
      </div>
    </>
  )
}

export default Index
