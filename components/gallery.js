import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
import Gall from "../gallery.json";

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="container">
        <h1 className="title"> Gallery </h1>

        <SRLWrapper>
          <div className="row mb-5">
            {Gall.gallery.map(({ img, alt, index }) => {
              return (
                <div className="col-md-3 mb-3 mx-auto" key={index}>
                  <Image
                    className="gallery-img"
                    src={img}
                    alt={alt}
                    width={360}
                    height={240}
                  />
                </div>
              );
            })}
          </div>
        </SRLWrapper>
      </div>
    </section>
  );
}
