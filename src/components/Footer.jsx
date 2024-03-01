import * as React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };
    return (
        <>
            <div
                className=" flex flex-col items-center bg-neutral-800 max-md:mt-0"
                style={{ marginTop: "4rem" }}
            >
                <div className="max-w-[1224px]">
                    <div className="flex flex-col justify-center py-12 w-full  max-md:px-5 max-md:py-5 max-md:max-w-full">
                        <div className="my-8 max-md:my-0 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                                    <div className="grow max-md:mt-0 max-md:max-w-full">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                            <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col grow text-base font-medium leading-6 text-center text-white max-md:mt-0">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c75412367e19309ebb49bfe4fb19d7bce9443cbe49486b30aeacff8266d77cf?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                                                        className="self-center max-w-full aspect-[1.01] w-[257px] max-md:w-[150px]"
                                                        onClick={navigateToHome}
                                                    />
                                                    <div className="mt-4">
                                                        <p>
                                                            Al Hathaifa Group is committed in delivering
                                                            holistic business solutions to achieve
                                                            transformational success in all client endeavours.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col text-base font-medium leading-6 text-white max-md:mt-4">
                                                    <div className="text-2xl leading-9 text-justify text-red-800 uppercase">
                                                        <span className="text-white text-[24px]">Our</span>{" "}
                                                        <span className="text-red-800  text-[24px]">
                                                            SERVICES
                                                        </span>
                                                    </div>
                                                    <Link to="/service" className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>Sales And Marketing</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>Operations Management</p>
                                                    </Link>
                                                    {/* <div className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>Logistics Services</p>
                                                    </div>
                                                    <div className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>Delivery Services</p>
                                                    </div> */}
                                                    <Link to="/service" className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>Recruitment Services</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p>F&B Support Services</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4  hover:text-red-600 transition-colors duration-300">
                                                        <p> Industrial Technical Services</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4  hover:text-red-600 transition-colors duration-300">
                                                        <p> Facility Management Services</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4 hover:text-red-600 transition-colors duration-300">
                                                        <p> Field Force Management</p>
                                                    </Link>
                                                    <Link to="/service" className="mt-4  hover:text-red-600 transition-colors duration-300">
                                                        <p> Corporate Event Management</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                                    <div className="max-md:mt-4 max-md:max-w-full">
                                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                                            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col text-base font-medium leading-6 text-white max-md:mt-2">
                                                    <div className="text-2xl leading-9 text-justify text-red-800 uppercase ">
                                                        <span className="text-white  text-[24px]">
                                                            Useful
                                                        </span>{" "}
                                                        <span className="text-red-800  text-[24px]">
                                                            Links
                                                        </span>
                                                    </div>
                                                    <Link to="/">
                                                        <p className="mt-4 hover:text-red-600 transition-colors duration-300">Home</p>
                                                    </Link>
                                                    <Link to="/about">
                                                        <p className="mt-4 hover:text-[#A52323] transition-colors duration-300">About Us</p>
                                                    </Link>
                                                    <Link to="/service">
                                                        <p className="mt-4 hover:text-[#A52323] transition-colors duration-300">Services</p>
                                                    </Link>
                                                    <Link to="/careers">
                                                        <p className="mt-4 hover:text-[#A52323] transition-colors duration-300">Careers</p>
                                                    </Link>
                                                    <Link to="/contact">
                                                        <p className="mt-4 hover:text-[#A52323] transition-colors duration-300 ">Contact Us</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                                                <div className="flex flex-col grow max-md:mt-4">
                                                    <div className="text-2xl leading-9 text-justify text-red-800 uppercase">
                                                        <span className="text-white  text-[24px]">
                                                            CONTACT
                                                        </span>{" "}
                                                        <span className="text-red-800  text-[24px]">
                                                            US
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-3 justify-between mt-4 text-base font-medium leading-6 text-white">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a05062f11d0a999cff3119b06b706b06d8cf912b0edf38ce7bd123633053ac39?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                                                            className="self-start aspect-[0.71] fill-white w-[17px]"
                                                        />
                                                        <div>
                                                            <p>
                                                                {" "}
                                                                AL HATHAIFA GROUP , 3rd floor, Majan Tower,
                                                                Goubra, Near Spar Hyper Market, Muscat, Oman
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 justify-between mt-4 text-base font-medium leading-6 text-white">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0316f874f3a84e2e7c5b432fb43bfd0d2e58fa5e79565db8e7c722c71e9f2b6?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                                                            className="my-auto aspect-[0.71] fill-white w-[15px]"
                                                        />
                                                        <div className="flex-auto">
                                                            <Link to="tel:+968 2460 0572" className="hover:text-red-600 transition-colors duration-300"><p>+968 2460 0572</p></Link>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 justify-between mt-4 text-base font-medium leading-6 text-white whitespace-nowrap">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41b1bdc33e0fc065815d17a911ad1afbeff5467618b346d8703e9bf710672b28?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                                                            className="my-auto w-5 aspect-[1.25] fill-white"
                                                        />
                                                        <div className="flex-auto">
                                                            <Link to="mailto:hr@al-hathaifa.com" className="hover:text-red-600 transition-colors duration-300"><p>hr@al-hathaifa.com</p></Link>
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 text-2xl leading-9 text-justify text-red-800 uppercase">
                                                        <span className="text-white  text-[24px]">
                                                            FOLLOW
                                                        </span>{" "}
                                                        <span className="text-red-800  text-[24px]">
                                                            US
                                                        </span>
                                                    </div>
                                                    <div className="flex gap-4 pr-20 mt-4 max-md:pr-5">
                                                        <Link
                                                            to="" target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
                                                        >
                                                            <FaFacebookF className="text-lg font-medium" />
                                                        </Link>
                                                        <Link
                                                            to="" target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
                                                        >
                                                            <CiInstagram className="text-lg font-medium" />
                                                        </Link>
                                                        <Link
                                                            to="" target="_blank"
                                                            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#A52323]"
                                                        >
                                                            <FaLinkedinIn className="text-lg font-medium" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bg-red-800">
                <div className="flex gap-5 max-w-[1224px] justify-between max-md:justify-center py-5 w-full text-xs font-semibold tracking-wide leading-5 text-white bg-red-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-3 max-md:order-2">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d265a3b580bd5657bcc592a7fbb2d6ca4aa7a6a8aaa2ce70df5126fbda80b6e?apiKey=4f715c38c9a243509cd636cba1d41f1d&"
                            className="my-auto w-3 aspect-square fill-white"
                        />
                        <p className="flex-auto">Copyright <Link to="https://www.eazotel.com" target="_blank" className="flex-auto hover:opacity-50">Eazotel</Link></p>
                        <p className="grow whitespace-nowrap">All Rights Reserved</p>
                    </div>
                    <div className="flex gap-5 justify-between max-md:justify-evenly">
                        <Link to="/disclaimer">
                            <p className="flex-auto hover:opacity-50">Disclaimer</p>
                        </Link>
                        <Link to="/privacypolicy">
                            <p className="flex-auto hover:opacity-50">Privacy Policy</p>
                        </Link>
                        <Link to="/termscondition">
                            <p className="flex-auto hover:opacity-50">Terms & Conditions</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
