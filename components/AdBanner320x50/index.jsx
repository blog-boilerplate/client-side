import { useEffect, useRef } from "react";

const Banner = () => {
  const banner = useRef(HTMLDivElement);

  useEffect(() => {
    if (!banner.current.firstChild) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//paltryheadline.com/{provideByadsterra}/invoke.js`;

      if (banner.current) {
        banner.current.append(script);
      }
    }
  }, []);

  return (
    <>
      <div ref={banner}></div>
      <div id={provideByadsterra}></div>
    </>
  );
};
