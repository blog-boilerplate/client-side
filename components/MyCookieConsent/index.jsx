import React from "react";
import { CookieConsent as ReactCookieConsent } from "react-cookie-consent";
import Link from "next/link";

const customStyles = {
  fontSize: "10px",
};

export default function MyCookieConsent() {
  return (
    <ReactCookieConsent style={customStyles} buttonText="Entendi">
      Este site usa cookies para garantir a melhor experiência do usuário.{" "}
      <Link href="/politica-privacidade">
        <span style={{ color: "yellow" }}>Saiba mais</span>
      </Link>
    </ReactCookieConsent>
  );
}
