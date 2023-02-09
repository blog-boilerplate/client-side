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
        <Head>
          <title>Life Nômade - Mais informações</title>
          <link rel="icon" href="favicon.ico"></link>
          <meta
            name="description"
            content="Essa página contém outras duas páginas indexadas, sendo elas contato e política de privacidade"
          />
          <meta property="og:title" content="Life Nômade - Mais informações" />
          <meta
            property="og:description"
            content="Essa página contém outras duas páginas indexadas, sendo elas contato e política de privacidade"
          />
          <meta property="og:image" content="https://i.imgur.com/tIte0sw.png" />
        </Head>
        <S2.Main>
          <HeadLine title="Mais" />

          <Mais namePage="Contato" linkPage="contato" />
          <Mais
            namePage="Política de Privacidade"
            linkPage="politica-privacidade"
          />
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
