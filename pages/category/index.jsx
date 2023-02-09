import Head from "next/head";
import FooterSideBar from "../../components/FooterSideBar";
import { gql } from "@apollo/client";
import * as S from "../../components/CategoryStyled";
import { initializeApollo } from "../../utils/apollo";
import { useState } from "react";
import CategoriesCard from "../../components/CategoriesCard";
import Logo from "../../components/Logo";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <Logo />
      <S.Container>
        <S.PostCardContainer>
          {posts?.map((post) => {
            return <CategoriesCard key={post.id} post={post}></CategoriesCard>;
          })}
        </S.PostCardContainer>

        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}

export async function getServerSideProps() {
  const GET_CATEGORIES = gql`
    query GetAllCategory {
      categories {
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
