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
    <div className="container">
      <main>
        <h1 className="title">SuriMel Blog</h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <S.PostCardContainer>
          {posts?.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </S.PostCardContainer>
      </main>

      <Footer select={select} setSelect={setSelect}></Footer>
    </div>
  );
}

export async function getStaticProps() {
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
