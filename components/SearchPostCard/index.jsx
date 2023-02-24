import * as S from "./style";
import Image from "next/image";
import Link from "next/link";

export default function SearchPostCard({ title, img, delay, url }) {
  const decodedTitle = new DOMParser().parseFromString(title, "text/html").body.textContent;

  return (
    <Link href={url}>
      <S.Ul>
        <S.Container delay={delay}>
          <S.ImageContainer>
            <img src={img} alt="" />
          </S.ImageContainer>
          <S.Title>{decodedTitle}</S.Title>
        </S.Container>
      </S.Ul>
    </Link>
  );
}