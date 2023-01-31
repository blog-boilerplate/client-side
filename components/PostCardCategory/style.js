import styled, { css } from "styled-components";

export const PostCard = styled.div`
  ${({ imgUrl }) => css`
    width: 472px;
    height: 265px;
    background-color: black;
    border-radius: 7px;
    background: url(${imgUrl}) no-repeat center;
    background-size: cover;
  `}
`;
export const TitlePost = styled.h2`
  font-size: 16pt;
  max-width: 472px;
  font-weight: 500;
`;
export const PostCardContainer = styled.div`
  cursor: pointer;
`;
