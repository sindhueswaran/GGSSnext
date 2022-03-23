import Image from "next/image";

const Teamdata = {
  teamtitle: "Our Team",
  teammembers: [
    {
      name: "Shri Arjinder Singh",
      img: "/team/arjinder-singh.jpg",
      text: "Mr Arjinder Singh ji is from  Bijnor, Uttar Pradesh India and now lives in Canada. Mr Singh has the intent and provided the motivation to establish Guru Gobind Singh Ji Sarv Dharam Parkastha Sewa Sanshtan in order to serve slum areas of Uttar Pradesh State and remote interior villages of Uttarakhand through Medical and Educational Sewa (Selfless Service) welcoming and including people of all castes and religions equally.",
    },
    {
      name: "Dr. Atul Singh Negi",
      img: "/team/da.jpg",
      text: "Dr Atul Singh Negi has been working in a Government Ayurvedic Hospital in  Gaindkhal, Pauri Garhwal, India since 2013 providing health treatment to rural villagers. Dr Atul also provides free education to disadvantaged students and also promotes forest conservation, plantations and spreads awareness about the importance of caring for the environment.",
    },
  ],
};

export default function Team() {
  return (
    <>
      <section id="team">
        <div className="container  ">
          <h1 className="title">{Teamdata.teamtitle}</h1>
         
            <div className="team-items row">
              {Teamdata.teammembers.map(({ name, img, text, index }) => {
                return (
                  <div className="team-member col-lg-6" key={index}>
                    <Image
                      className="team-img "
                      src={img}
                      alt={name}
                      width={200}
                      height={200}
                    />
                    <div className="card-body">
                      <h4 className="card-text text-center">{name}</h4>
                      <p className="card-text text-center">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
    
      </section>
    </>
  );
}
