import * as S from "./style";
import { Category } from "@styled-icons/boxicons-regular/Category";
import { Search } from "@styled-icons/material/Search";
import { Home } from "@styled-icons/entypo/Home";

export default function Footer() {
  return (
    <S.Footer>
      <S.Icon>
        <Category />
        <p>Categorias</p>
      </S.Icon>
      <S.Icon>
        <Home />
        <p>Home</p>
      </S.Icon>
      <S.Icon>
        <Search />
        <p>Buscar</p>
      </S.Icon>
    </S.Footer>
  );
}
