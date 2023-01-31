import * as S from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <S.Logo>
        <Image src="/lifenomade-icon.png" width={1389} height={318} />
      </S.Logo>
    </Link>
  );
}
