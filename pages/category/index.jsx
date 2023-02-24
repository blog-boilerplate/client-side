import Head from "next/head";
import FooterSideBar from "../../components/FooterSideBar";
import { gql } from "@apollo/client";
import * as S from "../../components/CategoryStyled";
import { initializeApollo } from "../../utils/apollo";
import { useState } from "react";
import CategoriesCard from "../../components/CategoriesCard";
import Logo from "../../components/Logo";
import Space from "../../components/Space";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <Head>
        <title>Lugares</title>
      </Head>
      <Logo />
      <S.Container>
        <S.PostCardContainer>
          {posts?.map((post, index) => {
            return <CategoriesCard key={index} post={post}></CategoriesCard>;
          })}
          <CategoriesCard />
          <CategoriesCard />
        </S.PostCardContainer>
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}

export async function getStaticProps() {
  const GET_CATEGORIES = gql`
    query GetAllCategory {
      categories(first: 100) {
        nodes {
          name
          uri
        }
      }
    }
  `;

  const response = await apolloClient.query({
    query: GET_CATEGORIES,
  });

  const posts = response?.data?.categories?.nodes;

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
