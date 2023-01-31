import Head from "next/head";
import FooterSideBar from "../components/FooterSideBar";
import Logo from "../components/Logo";
import PostCard from "../components/PostCard";
import { gql } from "@apollo/client";
import * as S from "../components/IndexStyled";
import { initializeApollo } from "../utils/apollo";
import { useState } from "react";


export default function Home() {
  const [select, setSelect] = useState(4);

  return (
    <>
      <Logo />
      <S.Container>


        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}
