import React from "react";
import NavBar from "../../components/Navebar/NavBar";
import { useServerProvidersContext } from "../../context/ServerProvider";
import bgimg from "../../asserts/fernando.jpg";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../../components/testimonials/Testimonial";
import { Helmet } from "react-helmet";

function HomePage({SeoMetaData}) {
  const data = useServerProvidersContext();
  console.log(data);
  return (
    <>
      <Helmet>
        <meta name="description" content={SeoMetaData?.Description} />
        <title>{SeoMetaData?.Title}</title>
      </Helmet>
      <div>
        <main>
          <section
            className=""
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="flex items-center justify-center flex-col h-[90vh] w-[100%] bg-[rgba(0,0,0,0.6)]">
              <div className="max-w-[1320px] px-3 m-auto">
                <h1 className="font-semibold text-[3rem] text-white text-center">
                  Heading
                </h1>
                <p className="font-semibold text-[3rem] text-white text-center">
                  description
                </p>
              </div>
            </div>
          </section>
          <section>
            <Testimonial />
          </section>
        </main>
        
      </div>
    </>
  );
}
export default HomePage;
