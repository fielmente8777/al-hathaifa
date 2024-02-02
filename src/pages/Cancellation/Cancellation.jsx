import React from "react";
import NavBar from "../../components/Navebar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

function Cancellation({ SeoMetaData }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      
    </>
  );
}

export default Cancellation;
