import Image from "next/image";
import Link from "next/link"; 

const Herodata = {
  herotitle: "GURU GOBIND SEWA SANSTHAN",
  herosubtitle: "",
  herobutton: "DONATE",
  herourl: "#contact",
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <Image src="/gshero.jpg" alt="GGSS" layout="fill" objectFit="cover"/>
      <div className="hero-text">
        <h1 className="title">{Herodata.herotitle}</h1>
        {/* <h2 className="title">{Herodata.herosubtitle}</h2> */}
        <Link  href="#contact">
          <a className="btn btn-primary btn-lg" role="button">
            {Herodata.herobutton}
          </a>
        </Link>
      </div>
    </section>
  );
}
