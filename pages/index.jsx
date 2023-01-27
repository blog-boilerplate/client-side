import Head from "next/head";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import * as S from "../components/IndexStyled";

export default function Home({ posts }) {
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

      <Footer></Footer>
    </div>
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

  const response = await client.query({
    query: GET_POSTS,
  });

  const posts = response?.data?.posts?.nodes;

  return {
    props: {
      posts,
    },
  };
}
