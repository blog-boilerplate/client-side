import styled, { keyframes, css } from "styled-components";

export const Ul = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #00000020;


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
    height: ;
    background-color: #f2f2f2;
    display: flex;
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
  padding: 0 1rem;
  align-self: center;
  color: #547aa5;
  cursor: pointer;
  font-weight: 600;
`;
