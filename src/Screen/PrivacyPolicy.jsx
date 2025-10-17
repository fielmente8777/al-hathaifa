import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import DisclaimerCard from "../components/DisclaimerCard";
import img3 from "../assets/BannerImage/sultan-qaboos-grand-mosque-muscat-oman_11zon.jpg";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll the window to the top
  }, []);

  const data = [
    {
      heading: "al hathaifa group disclaimer",
      description1: `At Al Hathaifa Group, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://www.al-hathaifa.com or submit any form.`,
      description2: `Information We Collect: Name, email address, phone number, and any details you provide in the form.`,
      description3: `How We Use Your Information: To contact you regarding your enquiry, provide requested services, send updates, and improve our offerings`,
      description4: `Data Protection: We do not sell or share your information with third parties. Your data is stored securely and used only for the purposes described.`,
      description5: `Your Rights: You may request access, correction, or deletion of your data by contacting us at your email address.`,
    },
  ];
  return (
    <div>
      <Banner heading="Privacy Policy" description="" banner={img3} />
      {data.map((desData, index) => (
        <DisclaimerCard pageData={desData} />
      ))}

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
