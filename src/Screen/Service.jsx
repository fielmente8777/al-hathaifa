import React, { useEffect, useState } from "react";
import ServicePageCard from "../components/ServicePageCard";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Sales from "../assets/client-img/sales_2_11zon.jpg";
import Operation from "../assets/client-img/meeting_6_11zon.jpg";
import recruit from "../assets/client-img/recruitment_1_11zon.jpg";
import support from "../assets/client-img/support_4_11zon.jpg";
import indus from "../assets/client-img/delivery_9_11zon.jpeg";
import facility from "../assets/client-img/facilitymanagement_10_11zon.jpg";
import filed from "../assets/client-img/forcemangement_4_11zon.jpg";
import corpo from "../assets/client-img/coporate_8_11zon.jpg";


import img from "../assets/BannerImage/819e626f16.avif"
const Service = () => {



  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Set a timeout to delay stopping the loader
    const timer = setTimeout(() => {
      setLoader(false);
    }, 500); // 2000 milliseconds = 2 seconds

    // Cleanup the timeout if the component unmounts before the delay is over
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll the window to the top
  }, []);
  const data = [
    {
      image: Sales,
      heading: "Sales and Marketing",
      description1:
        "AL HATHAIFA offers Sales and Marketing services that are customized to boost growth and maximize market potential for your business.- We utilize our extensive industry knowledge and strategic insights to develop effective sales strategies that connect with your target audience and advance your brand.",
      description2:
        " Whether you are introducing a new product, entering new markets, or aiming to enhance sales performance, our team is prepared to deliver exceptional results.- Our marketing philosophy emphasizes the importance of building meaningful relationships with your audience, going beyond traditional methods to incorporate innovative digital strategies and experiential campaigns.",
      point1:
        "From managing social media to creating content, forming influencer partnerships to creating immersive brand experiences, we employ a variety of tactics to engage customers and foster brand loyalty.",
      point2:
        "With AL HATHAIFA as your partner, you can anticipate a proactive, data-driven approach that enables your business to succeed in today's competitive environment.",
    },

    {
      image: Operation,
      heading: "Operations Management",
      description1:
        "At AL HATHAIFA, we recognize that operational efficiency is the foundation of a thriving business. That's why our team of experienced professionals works tirelessly to identify inefficiencies, streamline workflows, and implement industry best practices that optimize your operations from start to finish.",
      point1:
        "From managing inventory to optimizing logistics, we utilize cutting-edge technology and proven methodologies to deliver exceptional results that surpass expectations.",
      point2:
        "Whether you're a small startup or a large enterprise, our expertise and resources are at your disposal to help you achieve operational excellence and drive long-term success.",
    },
    // {
    //   image: logis,
    //   heading: "Logistics Services",
    //   description1:
    //     "Our team at AL HATHAIFA utilizes advanced technology and top-notch strategies to guarantee the efficient and affordable transportation of your goods. Whether you are sending items domestically or internationally, you can trust us to manage all your logistics requirements with accuracy and expertise. With us supporting you, you can concentrate on your main operations while we manage the rest, giving you peace of mind and the assurance to expand your business effortlessly.            ",
    //   point1:
    //     "From warehousing and distribution to transportation and inventory management, our comprehensive suite of services is designed to streamline your operations and improve your bottom line.",
    //   point2:
    //     "Our goal is to optimize your supply chain and drive efficiency through end-to-end solutions.",
    // },
    // {
    //   image: Delivery,
    //   heading: "DELIVERY Services",
    //   description1:
    //     "Designed to cater to the diverse needs of businesses operating in different sectors, our comprehensive delivery solutions are equipped to handle a wide range of shipment sizes and types. Whether it's small parcels or heavy freight, our team is committed to delivering with precision and attention to detail. Stay updated throughout the entire process with our advanced tracking technology and instant updates.",
    //   point1:
    //     "Experience the convenience and reliability of AL HATHAIFA Delivery Services as we simplify the shipping process for you.",
    //   point2:
    //     " Experience the convenience and reliability of AL HATHAIFA Delivery Services today.",
    // },
    {
      image: recruit,
      heading: "Recruitment Services",
      description1:
        "AL HATHAIFA's Recruitment Services provide customized solutions to fulfill your staffing requirements with accuracy and effectiveness. With over ten years of expertise in talent acquisition, we have established a strong reputation for connecting organizations with exceptional candidates from diverse industries. Our team of recruitment specialists employs a strategic methodology to identify and attract individuals who not only possess the necessary skills and qualifications but also align with your company's values, culture, and specific needs.",
      point1:
        "Our thorough vetting process ensures that only the most qualified candidates are presented to you for consideration.",
      point2:
        "From executive-level positions to entry-level roles, we provide end-to-end recruitment services, including candidate sourcing, screening, and selection",
    },
    {
      image: support,
      heading: "F&B Support Services",
      description1:
        "With our team of seasoned professionals in the F&B industry, you can rely on us to offer invaluable guidance and assistance, enabling you to optimize your operations and deliver exceptional dining experiences that will leave a lasting impression on your customers. Whether you're in the restaurant, hotel, catering, or food service sector, we understand the importance of tailoring our services to suit your specific needs and goals.",
      point1:
        "Our expertise lies in streamlining processes, ensuring top-notch quality control, and maximizing profitability.",
      point2:
        "With our dedicated team by your side, you can trust us to drive excellence in your food and beverage operations, giving you a competitive edge in the market.",
    },
    {
      image: indus,
      heading: "Industrial Technical Services",
      description1:
        "At AL HATHAIFA, we understand the diverse demands of industrial clients in Oman, and our Industrial Technical Services are tailored precisely to meet these needs. With a team of skilled technicians and engineers, we are committed to delivering a broad spectrum of technical solutions that enhance operational efficiency, productivity, and safety within industrial settings. From the installation and maintenance of equipment to troubleshooting and repairs, we provide comprehensive technical support to ensure the uninterrupted operation of your industrial facilities.",
      point1:
        "At AL HATHAIFA, we understand the critical importance of reliable and efficient technical support in sustaining the smooth operation of industrial operations.",
      point2:
        "With an unwavering focus on quality, reliability, and customer satisfaction, AL HATHAIFA is dedicated to surpassing our clients' expectations.",
    },
    {
      image: facility,
      heading: "Facility Management Services",
      description1:
        "Our facility management approach is centered around efficiency, sustainability, and cost-effectiveness. By leveraging cutting-edge technology and implementing industry best practices, we are able to optimize operations and minimize operational expenses. Through our proactive maintenance strategies and responsive support, we guarantee that your facilities will always be in excellent condition.",
      point1:
        "At AL HATHAIFA, we understand that every client has unique facility management needs.",
      point2:
        " Our commitment to efficiency and sustainability sets us apart in the field of facility management.",
    },
    {
      image: filed,
      heading: "Field Force Management",
      description1:
        "AL HATHAIFA is dedicated to offering businesses advanced Field Force Management solutions that revolutionize their field operations and drive productivity to new heights. Our extensive range of services covers all aspects of field management, including workforce scheduling, route optimization, task assignment, performance tracking, and beyond.",
      point1:
        "By leveraging our cutting-edge technology platforms and adopting a data-driven approach, organizations can optimize their field operations, allocate resources more effectively, and enhance overall customer satisfaction.",
      point2:
        "Our team works closely with clients to develop customized solutions that align with their objectives.",
    },
    {
      image: corpo,
      heading: "corporate event Management",
      description1:
        "AL HATHAIFA is a leading provider of corporate event management services that are customized to suit the specific requirements and goals of each client. Our team is dedicated to delivering exceptional events that are meticulously planned and executed, leaving a lasting impact on attendees. With our innovative and detail-oriented approach, we transform your vision into a reality, creating seamless and unforgettable experiences.",
      point1:
        "Whether it's organizing conferences, seminars, product launches, or gala dinners, our experienced team takes care of every aspect of event planning and execution with utmost precision and professionalism.",
      point2:
        "Our commitment to excellence and attention to detail sets us apart, making us the preferred choice for corporate event management services.",
    },
  ];
  return (
    <div>

      {loader && <div className="fixed top-0 w-[100vw] h-screen z-30 flex items-center justify-center bg-black bg-opacity-100" role="status">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>}

      <Banner
        banner={img}
        heading="services"
        description="Shaping success stories through unique and personalized services."
      />

      {data.map((card, index) => (
        <ServicePageCard
          key={index}
          serviceData={card}
          imageOrder={index % 2 === 0 ? 1 : 2}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Service;
