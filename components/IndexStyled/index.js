import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px 50px;
  transition: 0.5s;
  height: auto;

  @media (max-width: 1060px) {
    transform: scale(0.8);
    height: 1px;
  }

  @media (max-width: 850px) {
    transform: scale(0.7);
  }

  @media (max-width: 750px) {
    transform: scale(0.6);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    transform: scale(1);
  }

  @media (max-width: 650px) {
    transform: scale(0.9);
  }
  @media (max-width: 450px) {
    transform: scale(0.8);
  }
  @media (max-width: 400px) {
    transform: scale(0.7);
    height: 1px;
  }
  @media (max-width: 350px) {
    transform: scale(0.6);
  }
`;

export const Container = styled.div`
  padding: 1rem 0.5rem;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FooterSpace = styled.div``;
