import styled from "styled-components";
import * as PostCardWrapper from "../PostCard/style";

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  transition: 0.5s;
  height: auto;

  @media (max-width: 1060px) {
    grid-gap: 50px 20px;

    ${PostCardWrapper.PostCard} {
      width: 378px;
      height: 212px;
      margin: 0 auto;
    }
  }

  @media (max-width: 850px) {

    ${PostCardWrapper.PostCard} {
      width: 330px;
      height: 186px;
      margin: 0 auto;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);

    ${PostCardWrapper.PostCard} {
      width: 472px;
      height: 265px;
      margin: 0 auto;
    }
  }


  @media (max-width: 517px) {
    ${PostCardWrapper.PostCard} {
      width: 425px;
      height: 239px;
      margin: 0 auto;
    }
  }

  @media (max-width: 460px) {
    ${PostCardWrapper.PostCard} {
      width: 378px;
      height: 212px;
      margin: 0 auto;
    }

    ${PostCardWrapper.TitlePost} {
      font-size: 11pt;
    }
  }

  @media (max-width: 416px) {
    ${PostCardWrapper.PostCard} {
      width: 330px;
      height: 186px;
      margin: 0 auto;
    }

  }
  @media (max-width: 370px) {
    ${PostCardWrapper.PostCard} {
      width: 283px;
      height: 159px;
      margin: 0 auto;
    }

  }
 

`;

export const Container = styled.div`
  padding: 1rem 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FooterSpace = styled.div``;

export const Paragraph = styled.p`
  max-width: 700px;
  text-align: justify;
`;
