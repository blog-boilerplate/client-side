import * as S from "./style";
import Link from "next/link";

export default function Mais({ children }) {
  return (
    <S.Container>
      <div>
        <Link href="/contato">
          <p>{children}</p>
        </Link>
      </div>
    </S.Container>
  );
}
