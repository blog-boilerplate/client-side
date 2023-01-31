import styled, { css } from "styled-components";

export const ContainerCard = styled.div`
  ${({ city }) => css`
    width: 470px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    cursor: pointer;
      no-repeat center;
    background: ${
      city == "França" &&
      "url(https://i.imgur.com/NSEutJw.jpg) no-repeat center"
    };
    background: ${
      city == "Alemanha" &&
      "url(https://i.imgur.com/FJubzvG.jpg) no-repeat center"
    };
    background: ${
      city == "Brasil" &&
      "url(https://i.imgur.com/QflZVQo.jpg) no-repeat center"
    };
    background: ${
      city == "Itália" &&
      "url(https://i.imgur.com/SQYzzs9.jpg) no-repeat center"
    };
    background: ${
      city == "Inglaterra" &&
      "url(https://i.imgur.com/EYyDI5C.jpg) no-repeat center"
    };
      border-radius: 10px;
    background-size: cover;

  `}
`;

export const CategoryName = styled.h2`
  color: #f7f7f7;
  font-weight: 700;
`;
