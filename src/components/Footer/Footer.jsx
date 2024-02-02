import React from "react";
import Image from "../Image";
import { Link } from "react-router-dom";

import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Nav_Links from "../Navebar/navLink";
import { useServerProvidersContext } from "../../context/ServerProvider";

function Footer() {
    const navigation = Nav_Links();
    const { webSiteData } = useServerProvidersContext();
  const contact = [
    {
      contact: "+91-4455661234",
      icon: <BiSolidPhoneCall />,
      title: "call",
      link: "tel:+914455661234",
    },
    {
      contact: "info@thejamuntree.com",
      icon: <CiMail />,
      title: "mail",
      link: "mailto:info@thejamuntree.com",
    },
  ];

  const socialContact = [
    { icon: <FiLinkedin />, title: "Linkedin", link: "" },
    { icon: <AiFillInstagram />, title: "Instagram", link: "" },
    { icon: <FaFacebookF />, title: "Facebook", link: "" },
    { icon: <FaTripadvisor />, title: "Tripadvisor", link: "" },
  ];

  const pageLink = [
    {name:"terms & condition |",link:"/terms-and-conditions"},
    {name:"Privacy policy |",link:"/privacy-policy"},
    {name:"cancellation",link:"/cancellation"}
  ]
  return (
    <footer className="">
      <section className="max-w-[1320px] m-auto px-3 py-2">
        <div className="w-[100%] flex items-start justify-evenly">
          <div>
            <Image />
            <h2 className="text-amber-900 font-semibold uppercase">
              The jamun tree
            </h2>
          </div>
          <div>
            <h2 className="uppercase text-amber-900 font-normal">links</h2>
            <ul>
              {navigation.map((item, i) => (
                <li key={i}>
                  <Link to={item.src}>{item.linkName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <h2 className="uppercase text-amber-900 font-normal">contact</h2>
            </div>
            <div>
              <p className="font-normal capitalize">
                CP Enclave,Bibi Ganj,NH-28,Muzaffarpur,Bihar 842001,Bihar
              </p>
              <ul>
                {contact.map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="flex gap-2 items-center">
                      {" "}
                      <span className="sr-only">{item.title}</span>
                      {item.icon} {item.contact}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center gap-1">
                {socialContact.map((item, i) => (
                  <li className="" key={i}>
                    <Link to={item.link}>{item.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <div className="flex items-center justify-between max-w-[1320px] px-3 m-auto">
          <div>
            <ul className="flex items-center justify-center gap-2">
              {pageLink.map((item,i)=>(
                <li>
                    <Link to={item.link} className="capitalize text-2xl">{item.name} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="capitalize text-2xl">
              {" "}
              2023 Eazotel | All right reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
