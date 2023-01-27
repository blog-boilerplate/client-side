import styled from "styled-components";

export const Footer = styled.div`
  height: 52px;
  width: 95%;
  min-width: 330px;
  background-color: #fff;
  gap: 2em;
  max-width: 500px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0 3rem;
  justify-content: space-around;
  bottom: 5px;
  border-radius: 10px;

  @media (max-width: 360px) {
    transform: scale(0.9);
  }

  .select {
    margin-bottom: 2rem;
    background-color: white;
    border-radius: 10px;
    animation: flash 1s;

    @keyframes flash {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    div {
      width: 55px;
      height: 60px;
    }
  }

  svg {
    width: 30px;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.8rem;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  color: #ef4e23;
  animation: flash 1s;

  @keyframes flash {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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
