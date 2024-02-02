import React from "react";

function Image({ url, alt, width, height,className }) {
  return (
    <>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        className={className}
        // sizes="(max-width: 600px) 100vw, 800px"
        // srcset={${icon} "800w", ${icon2x} "1600w"} // Specify different image sizes for responsiveness
      />
    </>
  );
}

export default Image;
