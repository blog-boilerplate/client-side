import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { gql } from "@apollo/client";
import * as S from "../components/IndexStyled";
import { initializeApollo } from "../utils/apollo";
import { useState } from "react";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(2);

  return (
    <>
        <h1>Suri Mel</h1>
      <S.Container>

        <S.PostCardContainer>
          {posts?.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </S.PostCardContainer>

        <Footer select={select} setSelect={setSelect}></Footer>
      </S.Container>
    </>
  );
}

export async function getServerSideProps() {
  const GET_POSTS = gql`
    query GetAllPost {
      posts {
        nodes {
          title
          content
          uri
          date
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;

  const response = await apolloClient.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.posts?.nodes;
console.log(posts)
  return {
    props: {
      posts,
    },
  };
}
