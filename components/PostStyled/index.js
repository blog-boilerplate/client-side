import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Article = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    font-weight: 600;
  }

  p {
    text-align: justify;
    font-size: 13pt;
    font-weight: 400;
    color: #00000095;
  }

  figure {
    margin: 0 auto;
  }

  img {
    display: block;
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
  background-color: #f2f2f2;
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
    background-color: #f2f2f2;
    text-align: center;
    padding: 0.5rem 1rem;
    max-width: 700px;
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
