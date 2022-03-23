import Image from "next/image";
import Form from "./form";

const Formdata = {
  banktitle: "Banking Details",
  accountname: "Shri Guru Gobind Singh Ji Sarv Dharam Parkastha Sewa Sanshtan",
  accountnumber: "0357000103612226",
  ifsc: "PUNB0035700",
  swift: "PUNBINBBASC",
  bank: "Punjab National Bank",
  branch: " Najibabad, Bijnor, Uttar Pradesh",
  contacttitle: "Get in touch",
  email: "gurugobindsewa@gmail.com",
  phone: "+91 895 871 6386",
  whatsapp: "+91 971 963 3319",
  formtitle: "Write to us",
  button: "SUBMIT",
};

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container ">
          <h1 className="title">CONTACT</h1>
          <div className="row mx-auto">
            <div className="col-lg-6">
              <h5 className="sub-title">{Formdata.contacttitle} </h5>
              <h6 className="contact-text">
                <a href={`tel:${Formdata.contacttitle}`}>
                  <Image
                    className="contact-icon"
                    src="/icons/call.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  &emsp; {Formdata.phone}
                </a>
              </h6>

              <h6 className="contact-text"> 
                  <a href={`https://wa.me/${Formdata.whatsapp}`}>
                  <Image
                    className="contact-icon"
                    src="/icons/whatsapp.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  &emsp; {Formdata.whatsapp}
                </a>
              </h6>

              <h6 className="contact-text">
                <a href={`mailto:${Formdata.email}`}>
                  <Image
                    className="contact-icon"
                    src="/icons/mail.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                  &emsp; {Formdata.email}
                </a>
              </h6>
            </div>

            <div className="col-lg-6">
              <h5 className="sub-title">{Formdata.banktitle} </h5>
              <p className="banking-text">
                <small className="text-muted">Account Holder Name: </small>
                {Formdata.accountname} <br />
                <small className="text-muted">Bank Account No: </small> 
                {Formdata.accountnumber} <br />
                <small className="text-muted">IFSC Code: </small> 
                {Formdata.ifsc} <br />
                <small className="text-muted">Swift Code: </small> 
                {Formdata.swift} <br />
                <small className="text-muted">Bank Name: </small> 
                {Formdata.bank} <br />
                <small className="text-muted">Branch: </small> 
                {Formdata.branch}
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 mx-auto">
              <h5 className="sub-title">{Formdata.formtitle} </h5>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
