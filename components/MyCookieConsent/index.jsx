import React from "react";
import { CookieConsent as ReactCookieConsent } from "react-cookie-consent";
import Link from "next/link";

const customStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "12px",
  textAlign: "center",
  background: "#fcfcfc",
  borderTop: "1px solid #00000050",
  color: "black",
};

const customStylesButtom = {
  color: "#fafafa",
  fontSize: "14px",
  padding: "10px 100px",
  background: "#31577F",
};

export default function MyCookieConsent() {
  return (
    <ReactCookieConsent
      style={customStyles}
      buttonStyle={customStylesButtom}
      buttonText="Entendi"
    >
      Este site usa cookies para garantir a melhor experiência do usuário.{" "}
      <Link href="/politica-privacidade">
        <span style={{ color: "blue" }}>Saiba mais</span>
      </Link>
    </ReactCookieConsent>
  );
}
