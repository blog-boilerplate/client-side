import Head from "next/head";
import FooterSideBar from "../components/FooterSideBar";
import Logo from "../components/Logo";
import PostCard from "../components/PostCard";
import { gql } from "@apollo/client";
import * as S from "../components/IndexStyled";
import { initializeApollo } from "../utils/apollo";
import { useState, useEffect } from "react";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(2);
  const [postCount, setPostCount] = useState(5);

  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setPostCount(postCount + 5);
      }
    };
  });

  return (
    <>
      <Logo />
      <S.Container>
        <S.PostCardContainer>
        {posts?.slice(0, postCount).map((post) => {
            return <PostCard key={post.uri} post={post}/>;
          })}
        </S.PostCardContainer>

        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
      <S.FooterSpace />
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
  return {
    props: {
      posts,
    },
  };
}
