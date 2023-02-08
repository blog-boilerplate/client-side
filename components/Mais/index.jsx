import * as S from "./style";
import Link from "next/link";

export default function Mais({ namePage, linkPage }) {
  return (
    <S.Container>
      <div>
        <Link href={`${linkPage}`} passHref>
          <p>{namePage}</p>
        </Link>
      </div>
    </S.Container>
  );
}
