import Head from "next/head";
import FooterSideBar from "../components/FooterSideBar";
import Logo from "../components/Logo";
import Space from "../components/Space";
import Modal from "../components/Modal";
import { gql } from "@apollo/client";
import { initializeApollo } from "../utils/apollo";
import { useEffect, useState } from "react";
import * as S from "../components/PostStyled";
import Script from "next/script";

const apolloClient = initializeApollo();

export default function SlugPage({ post }) {
  const [select, setSelect] = useState(6);
  const [modal, setModal] = useState(false);
  const firstParagraph = post.content.match(/<p>(.*?)<\/p>/)?.[1] || "";

  useEffect(() => {
    const emailSend = localStorage.getItem("emailSend");
    {
      !emailSend &&
        setTimeout(() => {
          setModal(true);
        }, 20000);
    }
  }, []);

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <Logo />
      <S.PostContainer>
        <Head>
          <Script
            async
            src="https://js.wpadmngr.com/static/adManager.js"
            data-admpid="70725"
          />
          <title>{post.title}</title>
          <link rel="icon" href="favicon.ico"></link>
          <meta name="description" content={firstParagraph} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={firstParagraph} />
          <meta
            property="og:image"
            content={post.featuredImage.node.mediaItemUrl}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
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
          <div data-clickadilla-banner="308660"></div>
          <S.Article
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></S.Article>
        </S.Main>
        <Space />
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
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
