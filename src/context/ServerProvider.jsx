import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

const ServerProviders = createContext();

function ServerProvider({ children }) {
  const [webSiteData, setwebsiteData] = useState();
  const [slugs, setSlugs] = useState({});
  const [SeoData, setSeoData] = useState([]);
  const [IsNavBar, setIsNavBar] = useState({});
  const [pageTitles, setPageTitles] = useState({});
  const [sectionTitles, setSectionTitles] = useState([]);
  const [dataToArrange, setDataToArrange] = useState([]);
  const [menu, setMenu] = useState([]);
  const [services, setServices] = useState([]);
  const [roomsDetails, setRoomsDetails] = useState([]);
  const [reviewsArr, setReviewsArr] = useState([]);
  const [banner, setBanner] = useState([]);
  const [domain, setDomain] = useState("hotelawadhvilasayodhya");
  const [ndid, setNdid] = useState("e5502217-6505-41b7-8ee1-026401aff5f9");

  const fetchWebSiteDatas = async () => {
    const { data } = await axios.get(
      `https://nexon.eazotel.com/cms/get/website/${domain}`
    );
    if (data.Status) {
      setwebsiteData({ ...data.WebsiteData });
      setSlugs({ ...data.WebsiteData.Slugs });
      setSeoData([...data.WebsiteData.SeoOptimisation]);
      setIsNavBar({ ...data.WebsiteData.Navbar });
      setPageTitles({ ...data.WebsiteData.PagesTitles });
      setSectionTitles({ ...data.WebsiteData.SectionTitles });
      setServices([...data.WebsiteData.Services]);
      setBanner([...data.WebsiteData.Banner]);
      setDataToArrange([...data.WebsiteData.DataToarrange]);
      setMenu([...data.WebsiteData.Menu]);
    }
  };

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get(
        "https://nexon.eazotel.com/room/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImR2c2hhcm1hMDY0QGdtYWlsLmNvbSJ9.DSPxblxF07axwYg39Nq3LQwLrAuWiLNr2TKrszMxTTQ"
      );
      setRoomsDetails([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `https://nexon.eazotel.com/google/reviews/${ndid}`
      );
      setReviewsArr([...data.Reviews]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWebSiteDatas();
    fetchRooms();
    fetchReviews();
  }, []);

  return (
    <ServerProviders.Provider
      value={{
        webSiteData,
        slugs,
        SeoData,
        IsNavBar,
        pageTitles,
        sectionTitles,
        services,
        domain,
        ndid,
        roomsDetails,
        reviewsArr,
        banner,
        dataToArrange,
        menu,
      }}
    >
      {children}
    </ServerProviders.Provider>
  );
}

export default ServerProvider;

export const useServerProvidersContext = () => {
  return useContext(ServerProviders);
};
