import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ active }) => css`
    height: 52px;
    width: 95%;
    min-width: 330px;
    background-color: #31577f;
    gap: 0.7em;
    max-width: 500px;
    display: flex;
    align-items: center;
    position: fixed;
    padding: 0 3rem;
    justify-content: space-around;
    bottom: 5px;
    border-radius: 10px;
    scroll-behavior: smooth;
    opacity: ${active ? "1" : "0"};
    transition: 0.3s ease-in-out;
    pointer-events: ${active ? "all" : "none"};

    @media (max-width: 360px) {
      transform: scale(0.9);
    }

    .select {
      margin-bottom: 2rem;
      background-color: #31577f;
      border-radius: 10px;
      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      touch-callout: none;

      div {
        width: 55px;
        height: 60px;
      }
    }

    svg {
      width: 30px;
    }
  `}
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.8rem;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  color: #fff;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  touch-callout: none;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 55px;
    height: 60px;
  }

  p {
    margin-top: -0.1rem;
    font-size: 7.5pt;
    font-weight: 400;
  }
`;
