import styled, { keyframes, css } from "styled-components";

export const Ul = styled.div`
  overflow: hidden;

  :last-child{
    margin-bottom: 10rem;
  }
`;

const rightToLeft = keyframes`
  0% {
    left: 100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left:0;
  }
`;

export const Container = styled.div`
  ${({ delay }) => css`
    width: 100%;
    height: 96px;
    background-color: #e2e2e2;
    display: flex;
    cursor: pointer;
    position: relative;
    left: 100%;
    animation: ${rightToLeft} 0.5s ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-delay: ${delay};
  `}
`;

export const ImageContainer = styled.div`
  img {
    max-width: 170px;
    height: 96px;
  }
`;

export const Title = styled.h3`
  margin-left: 1.5rem;
  align-self: center;
  color: #00000095;
  font-weight: 600;
`;
