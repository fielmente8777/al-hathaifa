import React from "react";
import NavBar from "../../components/Navebar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

function About({SeoMetaData}) {
  return (
    <>
    <Helmet>
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      
      <main>
        <section>
          <div>
            <h1>about</h1>
          </div>
        </section>
      </main>
     
    </>
  );
}

export default About;
