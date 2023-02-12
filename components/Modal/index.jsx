import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { useState } from "react";
import { Head } from "next/document";
import * as S from "./style";
import axios from "axios";
import toast from "react-hot-toast";

export default function ConfirmModal({ setModal }) {
  const [name, setName] = useState("");
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
          nome: name,
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
                <p style={{ fontWeight: "600", color: "darkgreen" }}>
                  Quer receber o livro 10 lugares para conhecer antes de morrer
                  de forma gratuita?
                </p>
                <img src="https://i.imgur.com/9f3erXH.png" alt="" />
                <p style={{ marginBottom: "0.1rem" }}>
                  Se você adora ler sobre lugares e culturas diferentes vai se
                  deliciar com essa extraordinária seleção do que existe de
                  melhor para ser visto e apreciado!
                </p>
              </S.InfoContainer>
              <p style={{ color: "green" }}>
                Informe seus dados e receba agora o eBook
              </p>
            </S.Info>
            <S.ButtonsContainer>
              <S.Input
                required
                type="text"
                placeholder="Seu nome"
                name="nome"
                value={name}
                autoComplete="off"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
            <p>* preencha o formulário para liberar o botão</p>
            <button
              disabled={!name || !emailLegth}
              type="submit"
              onClick={handleSubmit}
            >
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
