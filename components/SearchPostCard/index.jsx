import * as S from "./style";
import Image from "next/image";

export default function SearchPostCard({ title, img, delay }) {
  return (
    <S.Ul>
      <S.Container delay={delay}>
        <S.ImageContainer>
          <img src={img} alt="" />
        </S.ImageContainer>
        <S.Title>{title}</S.Title>
      </S.Container>
    </S.Ul>
  );
}
