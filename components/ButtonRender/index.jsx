import * as S from "./style";

export default function ButtonRender({ handleLoadMore }) {
  return (
    <S.Container>
      <S.Button onClick={handleLoadMore}>Ver Mais</S.Button>
    </S.Container>
  );
}
