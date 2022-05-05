import React, { useEffect } from "react";
import '../styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import SimpleReactLightbox from 'simple-react-lightbox' 
import TagManager from "react-gtm-module";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-M4Q7ZZV" });
  }, []);
 

  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
