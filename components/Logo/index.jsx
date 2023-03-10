import * as S from "./style";
import Link from "next/link";
import Image from "next/image";
import MediaMatch from "../MediaMatch";

export default function Logo() {
  return (
    <S.Container>
      <Link href="/">
        <S.Logo>
          <Image
            src="/lifenomade-icon.png"
            width={1389}
            height={318}
            priority
            alt="logo-life-nomade"
          />
          <div id="ezoic-pub-ad-placeholder-107"> </div>
        </S.Logo>
      </Link>
      <MediaMatch customGreaterThan="desktop">
        <div>
        </div>
      </MediaMatch>
      <MediaMatch customLessThan="tablet">
        <div>

        </div>
      </MediaMatch>
    </S.Container>
  );
}
