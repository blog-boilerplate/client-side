import FooterSideBar from "../components/FooterSideBar";
import InputSearch from "../components/InputSearch";
import Logo from "../components/Logo";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import { useState } from "react";
import Head from "next/head";

export default function Search() {
  const [select, setSelect] = useState(3);

  return (
    <>
    <Head>
        <title>Pesquisar</title>
      </Head>
      <Logo />
      <S.Container>
        <S2.Main>
          <InputSearch />
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
