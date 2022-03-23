import Link from "next/link";
import Image from "next/image"; 

export default function Header() { 

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Link href="/">
        <a className="navbar-brand" >
          <Image
             src="/ggsslogo.svg"
            alt="GGSS"
            width={60}
            height={60}
            placeholder="blurred"
          />
          <h2 className="d-none">GGSS</h2>
        </a>
        </Link>
        

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="text-center ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  justify-content-end">
              <li className="nav-item">
                <Link  href="/">
                <a className="nav-link active" aria-current="page">
                 HOME
                </a>
                </Link>
               
              </li>
              <li className="nav-item">
              <Link href="/#gallery">
              <a className="nav-link" >
                   GALLERY
                </a>
                </Link>
                
              </li> 
              <li className="nav-item">
              <Link  href="/#team">
              <a className="nav-link">
                 TEAM
                </a>
                </Link>
               
              </li>
               
              <li className="nav-item">
              <Link href="/#contact">
              <a className="nav-link" >
                CONTACT
                </a>
                </Link>
              
              </li>
              {/* <li className="nav-item mx-auto">
              <select className="nav-link"  onChange={changeLanguage} defaultValue={locale}>
                  <option   value="en">
                    ENG
                  </option>
                  <option value="de">
                    DEU
                  </option>
                </select>
              </li> */}
            </ul>
          </div>
        </div>
      </div> 
    </nav>
  );
}
