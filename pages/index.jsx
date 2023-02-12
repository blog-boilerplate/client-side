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

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(2);
  const [displayCount, setDisplayCount] = useState(18);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 9);
  };

  return (
    <>
       <Head>
        <title>Life Nômade - Blog de viagem e turismo</title>
        <link rel="icon" href="favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Viaje com a gente pelo mundo! Nossos relatos de viagem incluem dicas incríveis, belas fotos e experiências únicas. Junte-se a nós em uma jornada para explorar culturas, sabores e paisagens exóticas. Inspire-se e planeje sua próxima aventura."
        />
        <meta
          property="og:title"
          content="Life Nômade - Blog de viagem e turismo"
        />
        <meta
          property="og:description"
          content="Viaje com a gente pelo mundo! Nossos relatos de viagem incluem dicas incríveis, belas fotos e experiências únicas. Junte-se a nós em uma jornada para explorar culturas, sabores e paisagens exóticas. Inspire-se e planeje sua próxima aventura."
        />
        <meta property="og:image" content="https://i.imgur.com/tIte0sw.png" />
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
      posts(first: 10000) {
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
