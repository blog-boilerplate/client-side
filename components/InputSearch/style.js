import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
`;

export const Form = styled.form`
  label {
    display: block;
    margin-bottom: 0.8em;
    font-weight: bold;
  }

  input {
    color: inherit;
    background-color: rgba(255, 255, 255, 0);
    padding: 0.2em;
    border: none;
    border-bottom: solid 2px rgba(255, 255, 255, 0.2);
    border-radius: 8px 8px 0 0;
    font-size: 3.5rem;
    font-weight: bold;
    width: 100%;
    outline: none;
    transition: background-color 0.5s ease-in;

    :focus {
      background-color: #00000010;
    }
  }
`;

export const SearchResults = styled.div`
  ul {
  }
`;

export const Li = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00000070;
  line-height: 2.5rem;
  list-style-position: inside;

  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    background-color: #00000040;
  }
`;
