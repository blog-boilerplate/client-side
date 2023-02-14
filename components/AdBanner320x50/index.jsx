import { useEffect, useRef } from "react";
export default function Banner() {
  const banner3 = useRef();

  const atOptions = {
    key: "9fe468c76f63bf2fe88fea293281e12a",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };
  useEffect(() => {
    if (!banner3.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.effectivecreativeformat.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner3.current) {
        banner3.current.append(conf);
        banner3.current.append(script);
      }
    }
  }, []);

  return (
    <>
      <div ref={banner3}></div>
    </>
  );
}
