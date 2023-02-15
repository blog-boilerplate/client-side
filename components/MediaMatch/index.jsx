import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "768px",
  tablet: "767px",
});

const mediaMatchModifiers = {
  customGreaterThan: (size) => css`
    ${customMedia.greaterThan(size)` display: block`}
  `,
  customLessThan: (size) => css`
    ${customMedia.lessThan(size)` display: block`}
  `,
};

export default styled.div`
  ${({ customLessThan, customGreaterThan }) => css`
    display: none;
    ${!!customGreaterThan &&
    mediaMatchModifiers.customGreaterThan(customGreaterThan)}
    ${!!customLessThan && mediaMatchModifiers.customLessThan(customLessThan)}
  `}
`;
