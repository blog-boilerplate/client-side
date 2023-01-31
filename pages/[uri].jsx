import Head from "next/head";
import FooterSideBar from "../components/FooterSideBar";
import Logo from "../components/Logo";
import { gql } from "@apollo/client";
import { initializeApollo } from "../utils/apollo";
import { useState } from "react";
import * as S from "../components/PostStyled";

const apolloClient = initializeApollo();

export default function SlugPage({ post }) {
  const [select, setSelect] = useState(5);

  return (
    <>
      <Logo />
      <S.PostContainer>
        <Head>
          <title>Headless WP Next Starter</title>
          <link rel="icon" href="favicon.ico"></link>
        </Head>
        <S.Image src={post.featuredImage.node.mediaItemUrl} alt="" />

        <S.Main>
          <div>
            <h1>{post.title}</h1>
            <S.Date>
              ✍️ &nbsp;&nbsp;
              {`${post.author.node.firstName} ${post.author.node.lastName}`} |
              🗓️ &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
            </S.Date>
          </div>
          <S.Article
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></S.Article>
        </S.Main>

        <FooterSideBar select={select} setSelect={setSelect} />
      </S.PostContainer>
    </>
  );
}

//

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  `;
  const response = await apolloClient.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
    },
  });

  const post = response?.data?.post;
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
