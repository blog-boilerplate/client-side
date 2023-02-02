import styled from "styled-components";

export const Logo = styled.div`
  img {
    width: 100%;
    max-width: 400px;
    display: flex;
    margin: 0 auto;
    padding: 1rem 2rem;
    cursor: pointer;
    height: auto;
  }

  @media (max-width: 600px) {
    img {
      max-width: 280px;
      height: auto;
    }
  }
`;
