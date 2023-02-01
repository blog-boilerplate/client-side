import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #547AA5;
  }
`
export const FooterContainer = styled.div`
  margin-top: 7rem;
`
export const Title = styled.h1`
  color: #232f3e;
  font-size: 3em;
  margin-top: 3rem;
`

export const SubTitle = styled.h2`
  color: #232f3e;
  font-size: 1.7em;
`

export const Paragrafo = styled.p`
  font-size: 15px;
  text-align: justify;
  margin-top: 2.5rem;

  h2 {
    color: #232f3e;
    font-size: 1.7em;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 2rem;
    width: 15rem;
    height: 3rem;
    background-color: #054B81;
    cursor: pointer;
    color: #fafafa;
    font-weight: 500;
    border-radius: 0.5rem;
    border: 1px solid #054B81;

    :disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      cursor: no-drop;
    }
  }
`

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  div {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    max-width: 60rem;
  }

  p {
    text-align: center;
    font-size: 10pt;
    color: red;
    margin: -0.3rem 0;
  }

  input {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 1px solid gray;

    :focus {
      border-color: #232f3e;
    }
  }
`

export const Textarea = styled.textarea`
  height: 15rem;
  resize: vertical;
  padding: 1rem;
  
`
export const Check = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;

  p {
    font-size: 7rem;
    text-align: center;
  }

  span {
    margin-top: -5rem;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
  }
`
