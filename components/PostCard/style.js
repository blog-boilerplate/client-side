import styled, { css } from "styled-components";

export const PostCard = styled.div`
  ${({ imgUrl }) => css`
    width: 330.4px;
    height: 185.5px;
    position: relative;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #e0e0e0 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const TitlePost = styled.h2`
  position: absolute;
  font-size: 12pt;
  max-width: 472px;
  font-weight: 400;
  margin: auto;
  bottom: -15px;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  max-width: 90%;
  background-color: #537aa6;
`;

export const PostCardContainer = styled.div`
  cursor: pointer;
`;
