import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { useState } from "react";
import { Head } from "next/document";
import * as S from "./style";
import axios from "axios";
import toast from "react-hot-toast";

export default function ConfirmModal({ setModal }) {
  const [email, setEmail] = useState("");
  const [checkModal, setCheckModal] = useState(true);

  const emailLegth = email.length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(
        "https://formsubmit.co/ajax/lifenomadeleitores@hotmail.com",
        {
          email: email,
          _cc: "mateeusof@hotmail.com",
        },
        {
          onUploadProgress: () => {
            toast("Enviando...", {
              icon: "⌛",
              duration: 1000,
            });
          },
        }
      )
      .then(() => {
        localStorage.setItem("emailSend", true);
        toast.success("E-mail recebido!");
        setCheckModal(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>100% Grátis</h2>
          <CloseOutline onClick={() => setModal(false)} />
        </S.ModalHeader>
        {checkModal ? (
          <>
            <S.Info>
              <S.InfoContainer>
                <h2>O MELHOR QUE EXISTE PARA SER VISTO E APRECIADO</h2>
                <p style={{ fontWeight: "600", color: "darkgreen" }}>
                  Quer receber o ebook "10 LUGARES INCRÍVEIS PARA CONHECER ANTES DE MORRER" de forma gratuita?
                </p>
                <img src="https://i.imgur.com/HWDQPV4.jpg" alt="capa do ebook" />
                <p style={{ marginBottom: "0.1rem" }}>
                  Você não vai querer morrer sem ao menos saber que esses
                  lugares exitem né?
                </p>
              </S.InfoContainer>
              <p style={{ color: "green" }}>
                Informe seu e-mail e acesse agora o eBook
              </p>
            </S.Info>
            <S.ButtonsContainer>
              <input type="hidden" name="_autoresponse" value="Valeu peituda" />
              <S.Input
                type="email"
                name="email"
                value={email}
                autoComplete="off"
                placeholder="Seu e-mail"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </S.ButtonsContainer>
            <p>* coloque seu e-mail para liberar o botão</p>
            <button disabled={!emailLegth} type="submit" onClick={handleSubmit}>
              Receber meu eBook
            </button>
          </>
        ) : (
          <S.MessageModal>
            <S.MessagePragraph>
              Você logo receberá seu livro. Nossa equipe irá enviá-lo assim que
              verificar suas informações. Enquanto isso, volte a ler o artigo de
              onde parou.
            </S.MessagePragraph>
          </S.MessageModal>
        )}
      </S.ModalContainer>
    </S.Modal>
  );
}
