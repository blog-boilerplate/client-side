import styled from "styled-components"

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Article = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        text-align: justify;
        padding: 0 1rem;
        font-size: 13pt;
        font-weight: 400;
        color: #00000075;
    }

    figure {
        margin: 0;
    }

    img {
        max-width: 500px;
        width: 100%;
        height: auto;
    }
`

export const Main = styled.main`
`