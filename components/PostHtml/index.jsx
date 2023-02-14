import * as S from "./style";
import AdBanner from "../AdBanner";
import AdBanner320x50 from "../AdBanner320x50";

export default function SlugPage({ post }) {
  // ...
  const paragraphs = post.content.split(/<\/p>/);
  const contentWithDiv = paragraphs
    .map((p, index) => {
      const newP = `${p}</p>`;
      if (index === 1) {
        return (
          <div class="my-div">
            <AdBanner />
          </div>
        );
      } else if (index === 7) {
        return (
          <div class="my-div2">
            <AdBanner />
          </div>
        );
      } else {
        return <div dangerouslySetInnerHTML={{ __html: newP }}></div>;
      }
    })
    .reduce((acc, curr) => [...acc, curr], []);
  return (
    <>
      {/* ... */}
      <S.Article>{contentWithDiv}</S.Article>
      {/* ... */}
    </>
  );
}
