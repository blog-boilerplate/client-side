import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import { Outstream } from "exoclick-react";

export default function SlugPage({ post }) {
  // useEffect(() => {
  //   if (!banner2.current.firstChild) {
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.src = `//www.effectivecreativeformat.com/ef586a90e010df50a4d583fde1621f70/invoke.js`;
  //     script.onload = () => {
  //       setScriptsLoaded(true);
  //     };

  //     if (banner2.current) {
  //       banner2.current.append(script);
  //     }
  //   }
  // }, []);

  const paragraphs = post.content.split(/<\/p>/);
  // const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const contentWithDiv = paragraphs
    .map((p, index) => {
      const newP = `${p}</p>`;
      if (index === 1) {
        return (
          <div className="my-div">
            <iframe
              src="//a.exdynsrv.com/iframe.php?idzone=4914860&size=300x250"
              width="300"
              height="250"
              scrolling="no"
              marginwidth="0"
              marginheight="0"
              frameborder="0"
            ></iframe>
          </div>
        );
      } else if (index === 6) {
        return (
          <div class="my-div">
            <Outstream zoneId="4914948" maxWidth={300} />
          </div>
        );
      } else if (index === 9) {
        return (
          <div class="my-div">
          <iframe
            src="//a.exdynsrv.com/iframe.php?idzone=4914860&size=300x250"
            width="300"
            height="250"
            scrolling="no"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
          ></iframe>
        </div>
        );
      } else {
        return <div dangerouslySetInnerHTML={{ __html: newP }}></div>;
      }
    })
    .reduce((acc, curr) => [...acc, curr], []);

  // const banner2 = useRef();

  return (
    <>
      {/* ... */}
      {/* <div ref={banner2}></div> */}
      <S.Article>{contentWithDiv}</S.Article>
      {/* <div ref={banner2}></div> */}
      {/* ... */}
    </>
  );
}
