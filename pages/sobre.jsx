import FooterSideBar from "../components/FooterSideBar";
import HeadLine from "../components/HeadLine";
import Contact from "../components/Contact";
import Logo from "../components/Logo";
import * as S from "../components/IndexStyled";
import * as S2 from "../components/PostStyled";
import { useState } from "react";

export default function Home() {
  const [select, setSelect] = useState(4);

  return (
    <>
      <Logo />
      <S.Container>
        <S2.Main>
          <HeadLine title="Sobre Nós" />
          <S.Paragraph>
            Oi, o Life Nômade é um blog que quer garatir a experiência do
            usuário, tanto em seu designer voltado para uma navegação suave, sem
            muitas informações confundindo a cabeça do leitor, quanto em seus
            artigos, com palavras fáceis de compreender, para atingir os mais
            variados públicos.
          </S.Paragraph>
          <S.Paragraph>
            Conteúdo de qualidade é o nosso foco, aguçar a curiosidade do leitor
            é o que buscamos, e com isso trazer infomações que agreguem em seu
            cotidiano.
          </S.Paragraph>
          <S.Paragraph>
            Pegue seu passaporte, sua mala e decole com a gente no conhecimento!
          </S.Paragraph>
        </S2.Main>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}