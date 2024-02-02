import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import TermsAndConditions from "./pages/Terms-and-conditions/TermsAndConditions";
import Cancellation from "./pages/Cancellation/Cancellation";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Gallery from "./pages/Gallery/Gallery";
import { useServerProvidersContext } from "./context/ServerProvider";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navebar/NavBar";
// import { Helmet } from "react-helmet";

function App() {
  const { slugs, SeoData } = useServerProvidersContext();

  const slug = Object.values(slugs).map((page) => page.Slug);
  const slugToPageName = Object.fromEntries(
    Object.values(slugs).map((slg) => {
      return [slg.Slug, slg.PageName];
    })
  );
  // console.log(slugToPageName);
  const transformedData = Object.fromEntries(
    SeoData.map((result) => {
      return [result.PageName, result.Data];
    })
  );

  const PageToComponent = {
    "about.html": <About SeoMetaData={transformedData["About"]} />,
    "contact.html": <Contact SeoMetaData={transformedData["Contact"]} />,
    // "restaurant.html": (
    //   <Restaurant SeoMetaData={transformedData["Restaurants"]} />
    // ),
    // "service.html": <Services SeoMetaData={transformedData["Services"]} />,
    // "rooms-category.html": <Rooms SeoMetaData={transformedData["Rooms"]} />,
    "terms.html": (
      <TermsAndConditions
        SeoMetaData={transformedData["Terms and condition"]}
      />
    ),
    "privacy.html": (
      <PrivacyPolicy SeoMetaData={transformedData["Terms and condition"]} />
    ),
    "cancellation.html": (
      <Cancellation SeoMetaData={transformedData["Cancellation"]} />
    ),
  };

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage SeoMetaData={transformedData["Home"]} />}
          />
          {slug.map((slug) => {
            return (
              <Route
                path={`/${slug}`}
                element={PageToComponent[slugToPageName[slug]]}
                key={slug}
              />
            );
          })}
          {/* 
          <Route path="/our_service" element={<OurService />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/contact_us" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
