import Head from "next/head"; 
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Gallery from "../components/gallery";
import Team from "../components/team";
import Formmsg from "../components/formmsg";
import Footer from "../components/footer";
 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guru Gobind Sewa Sansthan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image"  content="/ggsslogo.png"/>
        <meta name="description" content="Guru Gobind Sewa Sansthan aims to educate poverty affected children living in slum areas so they can become useful members of society." />
        <link rel="icon" href="/ggsslogo.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <About />
        <Gallery />
        <Team />
        <Formmsg />
        <Footer/>
      </main>
    </div>
  );
}
