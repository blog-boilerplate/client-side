import * as S from "./style";
import Link from "next/link";

export default function Mais() {
  return (
    <S.Container>
      <div>
        <Link href="/contato">
          <p>Contato</p>
        </Link>
      </div>
    </S.Container>
  );
}
