import styled, { css } from "styled-components";

export const Modal = styled.section`
  ${() => css`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
  `}
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 2.2rem;
  border-radius: 8px 8px 0 0;
  background-color: #30587f;
  svg {
    width: 2.5rem;
    cursor: pointer;
  }
  h2 {
    color: white;
    font-weight: 400;
    font-size: 16pt;
  }
`;

export const ModalContainer = styled.form`
  background-color: #fff;
  width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
  border-radius: 10px;
  z-index: 999999;

  p {
    font-size: 8pt;
    text-align: center;
    color: green;
    margin: -1rem 0;
  }

  button {
    margin: 0 auto 2rem auto;
    width: 10rem;
    height: 2.5rem;
    background-color: #232f3e;
    cursor: pointer;
    color: #fafafa;
    font-weight: 500;
    border-radius: 0.5rem;
    border: 1px solid #232f3e;

    :disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      cursor: no-drop;
    }
  }
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 2rem;
    align-items: center;
    label {
      font-size: 1.8rem;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 2rem;

  p {
    color: black;
    width: 2.5rem;
    height: 2.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid gray;
  }
`;

export const Textarea = styled.textarea`
  height: 10rem;
  resize: vertical;
  padding: 1rem;
  border-radius: 5px;
`;

export const Contador = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    font-size: 15px;
    margin-right: 1.5rem;
    color: #232f3e;
  }

  svg {
    margin-left: 1rem;
    color: #fdbc00;
  }
`;

export const Menos = styled.div`
  color: black;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid gray;
`;

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 1rem;
  border-radius: 5px;
  border: 1px solid #aa96b4;
`;

export const InputFile = styled.input`
  width: 100%;
  height: 3.5rem;
  padding-left: 1rem;
  border-radius: 5px;
  color: #232f3e;
`;

export const Info = styled.div`
  width: 100%;

  h2 {
    color: #30587f;
    text-align: center;
    font-size: 19px;
    margin-bottom: 1.5rem;
  }

  p {
    padding: 0 0.5rem;
    font-size: 13px;
    color: black;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1.5rem;

  img {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    width: 80px;
  }
  margin-bottom: 1.5rem;
`;

export const MessageModal = styled.div``;

export const MessagePragraph = styled.p`
  color: black !important;
  padding: 0.5rem 0.5rem 2.2rem 0.5rem;
  font-size: 13px !important;
`;
