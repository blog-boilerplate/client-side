import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import { useState } from "react";
import { Star } from "@styled-icons/material-outlined/Star";
import * as S from "./style";
import axios from "axios";
import toast from "react-hot-toast";

export default function ConfirmModal({ setModal, title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailLegth = email.length >= 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(
        "https://formsubmit.co/ajax/lifenomadeleitores@hotmail.com",
        {
          produto: title,
          nome: name,
          email: email,
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
        toast.success("Avaliação enviada");
        setModal(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <S.Modal>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>Grátis</h2>
          <CloseOutline onClick={() => setModal(false)} />
        </S.ModalHeader>
        <S.Info>
          <S.InfoContainer>
            <img src="https://i.imgur.com/9f3erXH.png" alt="" />
            <p>
              Se você adora ler sobre lugares e culturas diferentes vai se
              deliciar com essa extraordinária seleção do que existe de melhor
              para ser visto e apreciado! <br></br> <br></br> Quer receber o
              livro 10 lugares para conhecer antes de morrer de forma gratuita?
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
      </S.ModalContainer>
    </S.Modal>
  );
}
