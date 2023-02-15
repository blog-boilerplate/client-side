import * as S from "./style";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo>
          <Image
            src="/lifenomade-icon.png"
            width={1389}
            height={318}
            alt="logo-life-nomade"
          />
        </S.Logo>
      </Link>
      <div>
        <iframe
          src="//a.exdynsrv.com/iframe.php?idzone=4914894&size=900x250"
          width="900"
          height="250"
          scrolling="no"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
        ></iframe>
      </div>
    </S.Container>
  );
}
