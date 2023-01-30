import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    text-align: justify;
    font-size: 13pt;
    font-weight: 400;
    color: #00000095;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 700px;
    width: 100%;
    height: auto;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  background-color: #fafafa;
  padding: 0 1rem;

  h1 {
    font-size: 20pt;
  }
`;

export const Date = styled.p`
  text-align: center;
`;
