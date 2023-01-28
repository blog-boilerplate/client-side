import Head from "next/head";
import Footer from "../components/Footer";
import { gql } from "@apollo/client";
import { initializeApollo } from "../utils/apollo";
import { useState } from "react";
import * as S from "../components/PostStyled";

const apolloClient = initializeApollo();

export default function SlugPage({ post }) {
  const [select, setSelect] = useState(5);

  return (
    <S.PostContainer>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <S.Main>
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
          <p>
            ✍️ &nbsp;&nbsp;
            {`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️
            &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <S.Article
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></S.Article>
      </S.Main>

      <Footer select={select} setSelect={setSelect}></Footer>
    </S.PostContainer>
  );
}

export async function getStaticProps({ params }) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
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
