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
            alt="logo-life-nomade"
          />
        </S.Logo>
      </Link>
      <MediaMatch customGreaterThan="desktop">
        <div>
          <iframe
            src="//a.exdynsrv.com/iframe.php?idzone=4914894&size=728x90"
            width="728"
            height="90"
            scrolling="no"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
          ></iframe>
        </div>
      </MediaMatch>
      <MediaMatch customLessThan="tablet">
        <div>
        <iframe
          src="//a.exdynsrv.com/iframe.php?idzone=4914944&size=300x100"
          width="300"
          height="100"
          scrolling="no"
          marginwidth="0"
          marginheight="0"
          frameborder="0"
        ></iframe>
        </div>
      </MediaMatch>
    </S.Container>
  );
}
