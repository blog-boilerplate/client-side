import * as S from "./style";
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
          <div>
            <div className="my-div"></div>
            <div dangerouslySetInnerHTML={{ __html: newP }}></div>
          </div>
        );
      } else if (index === 6) {
        return (
          <div>
            <div className="my-div"></div>
            <div dangerouslySetInnerHTML={{ __html: newP }}></div>
          </div>
        );
      } else if (index === 9) {
        return (
          <div>
            <div className="my-div"></div>
            <div dangerouslySetInnerHTML={{ __html: newP }}></div>
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
