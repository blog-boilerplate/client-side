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

  ul {
    max-width: 700px;
    text-align: justify;

    li {
      margin-top: 1rem;
    }
  }

  h1 {
    color: #31577f;
    margin-top: -3rem;
    font-size: 20pt;
    background-color: #fafafa;
    text-align: center;
    padding: 0.5rem 1rem;
  }
`;

export const Date = styled.p`
  text-align: center;
  font-weight: 400;
  color: #939393;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0;
`;
