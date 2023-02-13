import Head from "next/head";
import FooterSideBar from "../components/FooterSideBar";
import Logo from "../components/Logo";
import PostCard from "../components/PostCard";
import Space from "../components/Space";
import { gql } from "@apollo/client";
import * as S from "../components/IndexStyled";
import { initializeApollo } from "../utils/apollo";
import { useState, useEffect } from "react";
import ButtonRender from "../components/ButtonRender";
import Script from "next/script";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(2);
  const [displayCount, setDisplayCount] = useState(12);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 9);
  };

  return (
    <>
      <Head>
        <title>Life Nômade - Blog de viagem e turismo</title>
        <Script
          async
          src="https://js.wpadmngr.com/static/adManager.js"
          data-admpid="70719"
        />
      </Head>
      <Logo />
      <S.Container>
        <S.PostCardContainer>
          {posts?.slice(0, displayCount).map((post) => {
            return <PostCard key={post.uri} post={post} />;
          })}
        </S.PostCardContainer>

        {displayCount < posts.length && (
          <ButtonRender handleLoadMore={handleLoadMore} />
        )}
        <Space />
        <FooterSideBar select={select} setSelect={setSelect} />
      </S.Container>
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllPost {
      posts(first: 100) {
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
    revalidate: 60,
  };
}
