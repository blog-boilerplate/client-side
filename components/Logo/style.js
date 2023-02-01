import styled from "styled-components";

export const Logo = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  margin: 0 auto;
  padding: 1rem 2rem;
  cursor: pointer;

  @media(max-width: 450px) {
    max-width: 280px;
  }
`;
