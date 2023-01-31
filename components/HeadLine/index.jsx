import * as S from "./style";

export default function HeadLine({ title }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
