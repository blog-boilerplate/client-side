import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-width: 650px;

  h2 {
    color: #2f2f2f;
    font-weight: 600;
  }

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
    color: #2f2f2f;
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
