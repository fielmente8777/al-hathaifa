import React from 'react'
import NavBar from '../../components/Navebar/NavBar'
import { Helmet } from "react-helmet";

function PrivacyPolicy({SeoMetaData}) {
  return (
    <>
        <Helmet>
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
    </>
  )
}

export default PrivacyPolicy