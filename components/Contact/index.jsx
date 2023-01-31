import React, { useState } from 'react'
import * as S from './style'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Contato() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState(true)

  const emailLegth = email.length >= 10

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios
      .post(
        'https://formsubmit.co/ajax/suportepandamarket@outlook.com',
        {
          name: name,
          email: email,
          message: message
        },
        {
          onUploadProgress: () => {
            toast('Enviando...', {
              icon: '⌛'
            })
          }
        }
      )
      .then(() => {
        setState(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <S.Container>
      <S.Wrapper>
        {state ? (
          <>
            <h2>Fale conosco</h2>
            <S.Form
            // action="https://formsubmit.co/suportepandamarket@outlook.com"
            // method="POST"
            >
              <S.FormInputs>
                <div>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    name="nome"
                    value={name}
                    autoComplete="off"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="off"
                    placeholder="Seu e-mail"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <S.Textarea
                  required
                  placeholder="Sua mensagem..."
                  name="message"
                  value={message}
                  autoComplete="off"
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                />
                <p>* preencha o formulário para liberar o botão</p>
              </S.FormInputs>
              <button
                disabled={!name || !emailLegth || !message}
                type="submit"
                onClick={handleSubmit}
              >
                Enviar mensagem
              </button>
            </S.Form>
          </>
        ) : (
          <S.Check>
            <p>✅</p>
            <span>Seu contato foi enviado com sucesso!</span>
          </S.Check>
        )}
      </S.Wrapper>
      <S.FooterContainer>
      </S.FooterContainer>
    </S.Container>
  )
}
