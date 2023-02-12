import Footer from "../../components/FooterSideBar";
import PostCardCategory from "../../components/PostCardCategory";
import Logo from "../../components/Logo";
import Space from "../../components/Space";
import { gql } from "@apollo/client";
import * as S from "../../components/IndexStyled";
import { initializeApollo } from "../../utils/apollo";
import { useState } from "react";
import Head from "next/head";

const apolloClient = initializeApollo();

export default function Home({ posts }) {
  const [select, setSelect] = useState(6);

  return (
    <>
      <Head>
        <title>{posts.title}</title>
        <link rel="icon" href="favicon.ico"></link>
        <meta
          name="description"
          content="Aqui você vai encontrar informações sobre quase todos países do mundo"
        />
        <meta property="og:title" content={posts.title} />
        <meta property="og:description" content="Aqui você vai encontrar informações sobre quase todos países do mundo" />
        <meta
          property="og:image"
          content={posts.node?.featuredImage?.node.mediaItemUrl}
        />
      </Head>
      <Logo />
      <S.Container>
        <S.PostCardContainer>
          {posts?.map((post) => {
            return (
              <PostCardCategory key={post.uri} post={post}></PostCardCategory>
            );
          })}
        </S.PostCardContainer>
        <Space />
        <Footer select={select} setSelect={setSelect}></Footer>
      </S.Container>
    </>
  );
}

//

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostsByCategory($categoryName: String!) {
      posts(where: { categoryName: $categoryName }) {
        edges {
          node {
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
    }
  `;
  const response = await apolloClient.query({
    query: GET_POST_BY_URI,
    variables: {
      categoryName: params.categoryName,
    },
  });

  const posts = response?.data?.posts?.edges;
  // console.log(posts);
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
