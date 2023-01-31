import Head from "next/head";
import Footer from "../../components/Footer";
import { gql } from "@apollo/client";
import * as S from "../../components/IndexStyled";
import { initializeApollo } from "../../utils/apollo";
import { useState } from "react";
import CategoriesCard from "../../components/CategoriesCard";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(1);

  return (
    <>
      <h1>Suri Mel</h1>
      <S.Container>
        <S.PostCardContainer>
          {posts?.map((post) => {
            return <CategoriesCard key={post.id} post={post}></CategoriesCard>;
          })}
        </S.PostCardContainer>

        <Footer select={select} setSelect={setSelect}></Footer>
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
  };
}
