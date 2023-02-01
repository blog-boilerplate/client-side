import styled from "styled-components";

export const Container = styled.div`
width: 700px;

@media(max-width: 720px) {
  width: 600px;
}

@media(max-width: 620px) {
  width: 500px;
}

@media(max-width: 520px) {
  width: 450px;
}

@media(max-width: 480px) {
  width: 400px;
}
@media(max-width: 420px) {
  width: 350px;
}

@media(max-width: 374px) {
  width: 300px;
}
`;

export const Input = styled.input`
  padding: 0.2em;
  width: 100%;
  min-width: 100%;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.5s ease-in;
  padding-left: 1rem;
  color: #31577f;
  font-weight: 600;

  :focus {
    background-color: #00000010;
  }
`;
