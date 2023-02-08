import FooterSideBar from "../components/FooterSideBar";
import HeadLine from "../components/HeadLine";
import Logo from "../components/Logo";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import { useState } from "react";
import Link from "next/link";
import Mais from "../components/Mais";

export default function Home() {
  const [select, setSelect] = useState(5);

  return (
    <>
      <Logo />
      <S.Container>
        <S2.Main>
          <HeadLine title="Mais" />

          <Mais namePage="Contato" linkPage="contato"/>
          <Mais namePage="Política de Privacidade" linkPage="politica-privacidade"/>
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
