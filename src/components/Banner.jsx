import React from 'react';
import { Link } from 'react-router-dom';

export default function App({ heading, description }) {
    return (
        <div className="banner flex overflow-hidden w-full relative flex-col justify-center text-lg font-semibold leading-7 text-white mt-0">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbf6e79de79090ba08abbd79a7f927c4cc1b11bd6a9b1090d2fd1e041a758c6c?apiKey=c81aa461ed88497c9715fa37b92c8996&"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col items-center  py-24 max-md:py-0 w-full bg-black bg-opacity-40 max-md:px-5 max-md:max-w-full">
                <div className="mt-40 max-md:mt-20 uppercase whitespace-nowrap tracking-[4px]">
                    <p>Welcome to al HATHAIFA</p>
                </div>
                <div className="mt-3 text-5xl max-w-[1224px]  font-outline-2 text-[#A52323] text-center uppercase leading-[60px]  max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    <h1>{heading}</h1>
                </div>
                <div className="mt-3 text-[16px] text-center leading-[167%] max-md:max-w-full">
                    <p>{description}</p>
                </div>
                <Link to="/contact">
                    <div className="justify-center px-8 py-4 mt-8 mb-32 text-base font-bold tracking-normal text-right uppercase whitespace-nowrap bg-[#a52323] max-md:px-5 max-md:mb-10">
                        contact us
                    </div>
                </Link>
            </div>
        </div>
    );
}
