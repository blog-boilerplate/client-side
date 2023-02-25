import styled, { css } from "styled-components";

export const ContainerCard = styled.div`
  ${({ city, desativado }) => css`
    width: 470px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
    cursor: ${desativado ? "default" : "pointer"};
    background: ${city == "França" &&
    "url(https://i.imgur.com/NSEutJw.jpg) no-repeat center"};
    background: ${city == "Alemanha" &&
    "url(https://i.imgur.com/FJubzvG.jpg) no-repeat center"};
    background: ${city == "Brasil" &&
    "url(https://i.imgur.com/QflZVQo.jpg) no-repeat center"};
    background: ${city == "Itália" &&
    "url(https://i.imgur.com/SQYzzs9.jpg) no-repeat center"};
    background: ${city == "Inglaterra" &&
    "url(https://i.imgur.com/EYyDI5C.jpg) no-repeat center"};
    background: ${city == "Suíça" &&
    "url(https://i.imgur.com/uDgoAiG.jpg) no-repeat center"};
    background: ${city == "Bulgária" &&
    "url(https://i.imgur.com/P1IyNou.png) no-repeat center"};
    background: ${city == "Canadá" &&
    "url(https://i.imgur.com/n4UQck7.jpg) no-repeat center"};
    background: ${city == "Caribe" &&
    "url(https://i.imgur.com/wAHMUfv.jpg) no-repeat center"};
    background: ${city == "Croácia" &&
    "url(https://i.imgur.com/MlczCC7.jpg) no-repeat center"};
    background: ${city == "Espanha" &&
    "url(https://i.imgur.com/iZMX6uf.jpg) no-repeat center"};
    background: ${city == "Estados Unidos" &&
    "url(https://i.imgur.com/8z01Pfa.jpg) no-repeat center"};
    background: ${city == "Grécia" &&
    "url(https://i.imgur.com/iVsqh3Q.jpg) no-repeat center"};
    background: ${city == "Havaí" &&
    "url(https://i.imgur.com/xlBeqR6.jpg) no-repeat center"};
    background: ${city == "Indonésia" &&
    "url(https://i.imgur.com/ccSNGyc.jpg) no-repeat center"};
    background: ${city == "Japão" &&
    "url(https://i.imgur.com/Ux73nZd.jpg) no-repeat center"};
    background: ${city == "Maldivas" &&
    "url(https://i.imgur.com/pDDAdlw.jpg) no-repeat center"};
    background: ${city == "Montenegro" &&
    "url(https://i.imgur.com/6f4NxrY.jpg) no-repeat center"};
    background: ${city == "Nepal" &&
    "url(https://i.imgur.com/66FGtOe.jpg) no-repeat center"};
    background: ${city == "Nova Zelândia" &&
    "url(https://i.imgur.com/ElRmmAm.jpg) no-repeat center"};
    background: ${city == "Seychelles" &&
    "url(https://i.imgur.com/GNFlu1V.jpg) no-repeat center"};
    border-radius: 10px;
    background-size: cover;
  `}
`;

export const CategoryName = styled.h2`
  color: #f7f7f7;
  font-weight: 700;
`;
