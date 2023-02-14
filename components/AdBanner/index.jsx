import { useEffect, useRef } from "react";
export default function Banner() {
  const banner = useRef();

  const atOptions = {
    key: "ef586a90e010df50a4d583fde1621f70",
    format: "iframe",
    height: 250,
    width: 300,
    params: {},
  };
  useEffect(() => {
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.effectivecreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
  }, []);

  return <div ref={banner}></div>;
}
