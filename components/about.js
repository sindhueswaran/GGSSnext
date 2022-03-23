import Image from "next/image"; 

const Aboutdata = {
  abouttitle: "About",
  aboutimg: "/ggsslogo.png",
  aboutdescription:
    "Our trust Shri Guru Gobind Singh Ji Sarv Dharam Parkashta Sewa Sanshtan was founded in 2015 with the inspiration of Shri Arjinder Singh living in Canada. Guru Gobind Sewa Sansthan aims to educate poverty affected children living in slum areas so they can become useful members of society. Our Trust's main focus is to serve all regardless of religion or caste through education and health.",
};

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <h1 className="title"> {Aboutdata.abouttitle} </h1>

          <div className="container">
            <div className="row ">
              <div className="col-xl-3 offset-xl-1 d-none d-xl-block d-xxl-block ">
                <Image
                  src={Aboutdata.aboutimg}
                  alt="logo"
                  width={250}
                  height={250}
                /> 
              </div>

              <div className="col-xl-7 ">
                <h5 className="about-text lh-lg">
                  {Aboutdata.aboutdescription}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
