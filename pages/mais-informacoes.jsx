import FooterSideBar from "../components/FooterSideBar";
import HeadLine from "../components/HeadLine";
import Logo from "../components/Logo";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import * as S3 from "../components/MaisLinkStyled";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [select, setSelect] = useState(5);

  return (
    <>
    <Head>
        <title>Mais informações</title>
      </Head>
      <Logo />
      <S.Container>
        <S2.Main>
          <HeadLine title="Mais" />

          <S3.LinkContainer>
            <div>
              <Link href="/contato">
                <p>Contato</p>
              </Link>
            </div>
          </S3.LinkContainer>
          <S3.LinkContainer>
            <div>
              <Link href="/politica-privacidade">
                <p>Política de Privacidade</p>
              </Link>
            </div>
          </S3.LinkContainer>
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
