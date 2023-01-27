import styled from "styled-components";

export const Footer = styled.div`
  height: 60px;
  width: 95%;
  background-color: #fff;
  gap: 2em;
  max-width: 500px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-around;
  bottom: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.2);


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
  color: #f67d50;

  p {
    margin-top: -0.1rem;
    font-size: 8pt;
    font-weight: 400;
  }

  :hover {
    margin-bottom: 1rem;
  }
`;
