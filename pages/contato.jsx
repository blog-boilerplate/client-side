import FooterSideBar from "../components/FooterSideBar";
import HeadLine from "../components/HeadLine";
import Logo from "../components/Logo";
import Contact from "../components/Contact";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import { useState } from "react";

export default function Home() {
  const [select, setSelect] = useState(6);

  return (
    <>
      <Logo />
      <S.Container>
        <S2.Main>
          <HeadLine title="Contato" />
          <Contact />
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}